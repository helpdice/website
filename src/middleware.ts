import { NextRequest } from 'next/server';
import { NextResponse } from 'next/server';
// import { clerkMiddleware, createRouteMatcher } from '@clerk/nextjs/server';
import createMiddleware from 'next-intl/middleware';
import { routing } from './libs/i18nNavigation';
// import { Auth } from '@helpdice/sdk';

const intlMiddleware = createMiddleware(routing);

const isProtectedRoute = [
  '/account(.*)',
  '/:locale/account(.*)',
];

const isAuthPage = [
  '/login(.*)',
  '/:locale/login(.*)',
  '/register(.*)',
  '/:locale/register(.*)',
];

const isSeoPage = [
  '(\\.xml|\\.txt)$',
]

// Function to match route with the current request
function matchRoute(request: NextRequest, routes: any[]): boolean | null {
  const url = request.url; // Get the URL of the request
  const localePattern = /^\/([^/]+)\/(.*)$/; // Regex for matching locale paths (e.g., /en/some-path)

  for (const route of routes) {
    const routeRegex = new RegExp(route.replace('/:locale', '([^/]+)')); // Replace :locale with a capture group

    const match = url.match(routeRegex);
    if (match) {
      // If the route includes a locale, check if the locale matches the first segment of the URL
      if (route.includes('/:locale')) {
        const matchLocale = url.match(localePattern);
        if (matchLocale && matchLocale[1] !== match[1]) {
          continue; // Skip if the locale does not match
        }
      }
      return route != null; // Return the matching route
    }
  }

  return false; // No match found
}

export default function middleware(
  request: NextRequest,
  // event: NextFetchEvent,
) {
  // Run Clerk middleware only when it's necessary
  if (!matchRoute(request, isSeoPage)) {
    if (
      matchRoute(request, isAuthPage) || matchRoute(request, isProtectedRoute)
    ) {
      const locale = request.nextUrl.pathname.match(/(\/.*)\/account/)?.at(1) ?? '';
      const signInUrl = new URL(`${locale}/login`, request.url);
      // const dashboardUrl = new URL(`${locale}/dashboard`, request.url);
      // console.log(request.cookies.get(process.env.NEXT_PUBLIC_TOKEN_KEY!));
      const authenticated = Boolean(request.cookies.get('HSSID'));
      console.log('Authenticated : ', authenticated);
      if (matchRoute(request, isProtectedRoute)) {
        if (authenticated) {
          return intlMiddleware(request);
        }
        return NextResponse.redirect(signInUrl);
      }

      if (authenticated && matchRoute(request, isAuthPage)) {
        return NextResponse.redirect(new URL(`${locale}/`, request.url))
      }

      return intlMiddleware(request);
    }
    return intlMiddleware(request);
  }
  return NextResponse.next();
}

export const config = {
  matcher: [
    // Skip Next.js internals and all static files, unless found in search params
    '/((?!_next|monitoring|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)',
    // Always run for API routes
    '/(api|trpc)(.*)',
  ],
};
