import { langUrl } from '@/libs/i18n';
import { getBaseUrl } from './Helpers';


type Path = {
  private?: boolean;
  name?: string;
  path: string;
  children?: Path[];
};

type URLObject = {
  [key: string]: string;
};

type SitemapURLObject = {
  [key: string]: {
    url: string;
    lastModified?: string | Date | undefined;
    changeFrequency: "always" | "hourly" | "daily" | "weekly" | "monthly" | "yearly" | "never" | undefined;
    priority: number;
    alternates: object;
  };
};

const paths = [
  {
    path: '',
    children: [
      {
        name: 'BASE_URL',
        path: '',
      },
      {
        name: 'TERM_OF_USE',
        path: 'term-of-use',
      },
      {
        name: 'PRIVACY_POLICY',
        path: 'privacy-policy',
      },
      {
        name: 'REFUND_POLICY',
        path: 'refund-policy',
      },
      {
        name: 'ABOUT_US',
        path: 'about-us',
      },
      {
        name: 'CONTACT_US',
        path: 'contact-us',
      },
      // {
      //   name: 'LEARN',
      //   path: 'learn',
      // },
      {
        name: 'CAREERS',
        path: 'careers',
      },
      // {
      //   name: 'COURSE_PAGE',
      //   path: 'learn/:category/:course/:page',
      // },
      // {
      //   name: 'CART',
      //   path: 'cart',
      // },
      {
        name: 'BLOG',
        path: 'blog',
      },
      {
        name: 'BLOG_POST',
        path: 'blog/:category/:slug',
        private: true
      },
      {
        name: 'MCQ',
        path: 'mcq',
      },
      {
        name: 'MCQ_CATEGORY',
        path: 'mcq/:category',
        private: true
      },
      {
        name: 'MCQ_SLUG',
        path: 'mcq/:category/:slug',
        private: true
      },
      {
        name: 'QNA',
        path: 'qna',
      },
      {
        name: 'QNA_CATEGORY',
        path: 'qna/:category',
        private: true
      },
      {
        name: 'QNA_SLUG',
        path: 'qna/:slug',
        private: true
      },
      {
        name: 'SERVICES',
        path: 'services/',
        children: [
          {
            name: 'LOGO_DESIGN',
            path: 'logo-designing',
          },
          {
            name: 'SEARCH_ENGINE_OPTIMIZATION',
            path: 'search-engine-optimization',
          },
          {
            name: 'DIGITAL_MARKETING',
            path: 'digital-marketing',
          },
          {
            name: 'UX_DESIGN',
            path: 'ux-designing',
          },
          {
            name: 'APP_DEVELOPMENT',
            path: 'app-development',
          },
        ],
      },
    ],
  },
  {
    name: 'LOGIN',
    path: 'login',
  },
  {
    name: 'REGISTER',
    path: 'register',
  },
  {
    name: 'ACCOUNT',
    path: 'account',
    private: true,
    children: [
      {
        name: 'HISTORY',
        path: 'history'
      },
      {
        name: 'PROFILE',
        path: 'profile'
      },
      {
        name: 'SETTINGS',
        path: 'settings'
      }
    ]
  }
  // {
  //   name: 'MAINTENANCE',
  //   path: 'maintenance',
  // },
  // {
  //   name: 'AD_BLOCK',
  //   path: 'ad-block',
  // },
  // {
  //     path: 'ads.txt',
  //     element:
  // },
  // {
  //   path: '404',
  // },
  // {
  //   path: '*',
  // },
];

function generateURLs(paths: Path[], basePath: string = ''): URLObject {
  let urlObject: URLObject = {};

  paths.forEach((path) => {
    const fullPath = basePath + path.path;

    // If the path has a name, add it to the object
    if (path.name) {
      urlObject[path.name] = fullPath;
    }

    // If the path has children, recursively generate their URLs
    if (path.children) {
      const childURLs = generateURLs(path.children, fullPath + '/');
      urlObject = { ...urlObject, ...childURLs };
    }
  });

  return urlObject;
}

export function getUrl(
  name: string,
  params: Record<string, string> = {},
): string {
  const routeMap: Record<string, string> = {};

  // Populate routeMap for faster lookup
  function populateRouteMap(routes: any, parentPath: string = '') {
    routes.forEach(
      (route: { path: string; name: string | number; children: any }) => {
        const fullPath = parentPath + route.path;
        routeMap[route.name] = fullPath;
        if (route.children) {
          populateRouteMap(route.children, fullPath);
        }
      },
    );
  }
  populateRouteMap(paths);

  // Find the path corresponding to the name
  const path = routeMap[name];
  if (!path) return '';

  // Substitute parameters
  let url = path;
  for (const [key, value] of Object.entries(params)) {
    url = url.replace(`:${key}`, value);
  }
  return getBaseUrl() + '/' + url;
}

// export function scrollTo(id: string) {
//   window.scrollTo({
//     top: document.querySelector(id).offsetTop,
//     behavior: 'smooth',
//   });
// }

function generateSitemapURLs(paths: Path[], basePath: string = ''): SitemapURLObject {
  let urlObject: SitemapURLObject = {};

  paths.forEach((path: Path) => {
    const fullPath = basePath + path.path;
    const routeUrl = `${getBaseUrl()}/${fullPath}`;

    if (!path.private) {
      // If the path has a name, create the metadata object for it
      if (path.name && !path.name.includes(':') ) {
        urlObject[path.name] = {
          url: routeUrl,
          lastModified: new Date(), // You can replace this with actual last modified date logic
          changeFrequency: 'weekly',  // Typically "daily" for frequently updated content
          priority: 0.7,             // You can adjust the priority based on your needs
          alternates: {
            languages: langUrl(`${getBaseUrl()}/:lang/${fullPath}`)
          }
        };
      }

      // If the path has children, recursively generate their URLs
      if (path.children) {
        const childURLs = generateSitemapURLs(path.children, fullPath + '');
        urlObject = { ...urlObject, ...childURLs };
      }
    }
  });

  return urlObject;
}

const sitemap = generateSitemapURLs(paths); 
const ROUTE = generateURLs(paths);


export const URLS = Object.values(sitemap);
export default ROUTE;
