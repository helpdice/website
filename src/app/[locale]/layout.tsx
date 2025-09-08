/* eslint-disable import/no-named-as-default */
import '@/styles/global.css';

import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { NextIntlClientProvider } from 'next-intl';

import GoogleAnalytics from '@/components/GoogleAnalytics';
import ScrollToTop from '@/components/ScrollToTop';

// import ToasterContext from "../context/ToastContext";

import { Inter } from 'next/font/google';
import { routing } from '@/libs/i18nNavigation';
import { getMessages, setRequestLocale } from 'next-intl/server';
import { BASE_URL } from '@/utils/constants';
import { ToastContainer } from 'react-toastify';
import Script from 'next/script';
import ThemeClient from '@/providers/ThemeClient';

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),
  alternates: {
    canonical: '/',
    languages: {
      'en': '/en',
      'fr': '/fr',
    },
  },
  // openGraph: {
  //   images: '/og-image.png',
  // },
  icons: [
    {
      rel: 'apple-touch-icon',
      url: '/apple-touch-icon.png',
    },
    {
      rel: 'icon',
      type: 'image/png',
      sizes: '32x32',
      url: '/favicon.png',
    },
    {
      rel: 'icon',
      type: 'image/png',
      sizes: '16x16',
      url: '/favicon.png',
    },
    {
      rel: 'icon',
      type: 'image/png',
      url: '/favicon.png',
    },
  ],
  other: {
    "google-adsense-account": "ca-pub-7034818195807373"
  }
}

export default async function RootLayout(props: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await props.params;

  if (!routing.locales.includes(locale)) {
    notFound();
  }

  setRequestLocale(locale);

  // Using internationalization in Client Components
  const messages = await getMessages();

  return (
    <html lang={locale}>
      <GoogleAnalytics />
      <body suppressHydrationWarning className={`dark:bg-black ${inter.className}`}>
        <NextIntlClientProvider
          locale={locale}
          messages={messages}
        >
          <ThemeClient>
            {/* <Lines /> */}
            {/* <ToasterContext /> */}
            {props.children}
            <ToastContainer position="bottom-center" />
            <ScrollToTop />
          </ThemeClient>
        </NextIntlClientProvider>
        <Script src="https://checkout.razorpay.com/v1/checkout.js" />
        <Script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-7034818195807373" crossOrigin="anonymous" />
      </body>
    </html>
  );
}

// Enable edge runtime but you are required to disable the `migrate` function in `src/libs/DB.ts`
// Unfortunately, this also means it will also disable the automatic migration of the database
// And, you will have to manually migrate it with `drizzle-kit push`
// export const runtime = 'edge';
