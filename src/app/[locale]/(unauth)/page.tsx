/* eslint-disable @typescript-eslint/naming-convention */
/* eslint-disable @next/next/no-img-element */
/* eslint-disable react/no-unescaped-entities */
/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable no-restricted-globals */
/* eslint-disable no-plusplus */
/* eslint-disable no-underscore-dangle */
/* eslint-disable guard-for-in */
/* eslint-disable no-restricted-syntax */
/* eslint-disable @typescript-eslint/no-use-before-define */
// import Link from 'next/link';
import { getTranslations } from 'next-intl/server';

import About from '@/components/About';
import Blog from '@/components/Blog';
// import Brands from '@/components/Brands';
import Contact from '@/components/Contact';
import CTA from '@/components/CTA';
import FAQ from '@/components/FAQ';
import Feature from '@/components/Features';
import FeaturesTab from '@/components/FeaturesTab';
import FunFact from '@/components/FunFact';
import Hero from '@/components/Hero';
import Integration from '@/components/Integration';
import Pricing from '@/components/Pricing';
import Testimonial from '@/components/Testimonial';
import { getCookie } from '@helpdice/sdk';
// import { getUrl } from '@/utils/routes';

// import { useEffect } from 'react';

type IndexPageProps = {
  params: { locale: string };
};

export async function generateMetadata(props: IndexPageProps) {
  const { locale } = await props.params;
  const t = await getTranslations({
    locale,
    namespace: 'Index',
  });

  return {
    title: t('meta_title'),
    description: t('meta_description'),
  };
}

export default function Index() {
  // console.log(getCookie());
  return (
    <div>
      <Hero />
      {/* <Brands /> */}
      <Feature />
      <About />
      <FeaturesTab />
      <FunFact />
      <Integration />
      <CTA />
      <FAQ />
      <Testimonial />
      <Pricing />
      <Contact />
      <Blog />
    </div>
  );
}
