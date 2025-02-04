// import { useTranslations } from 'next-intl';

// import { Footer } from '@/components/_footer';
import Footer from '@/components/Footer';
import Header from '@/components/Header';
// import { Header } from '@/components/header';
import { BaseTemplate } from '@/templates/BaseTemplate';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  robots: {
    index: false,
    follow: false,
    nocache: true,
    googleBot: {
      index: false,
      follow: false,
      noimageindex: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
}

export default function Layout(props: { children: React.ReactNode }) {
  // const t = useTranslations('RootLayout');
  return (
    <BaseTemplate>
      <Header />
      <main className="o-main">
        <div className="py-5 text-xl [&_p]:my-6">{props.children}</div>
      </main>
      <Footer />
    </BaseTemplate>
  );
}

