/* eslint-disable react/button-has-type */
/* eslint-disable react/jsx-no-undef */
/* eslint-disable react/no-unescaped-entities */
import '../index.scss';

import { getTranslations, setRequestLocale } from 'next-intl/server';

import Product from '@/components/Shop/product';
import FaqSection from './faqSection';
import SectionSteps from '@/components/Common/SectionStep';
import ServicesHero from '../ServicesHero';
import { Accounting, getUrl } from '@helpdice/sdk';
import { cookies } from 'next/headers';

// import { fetchProducts } from '../../api/products.services';

type LogoDesigningPageProps = {
  params: { locale: string }
}

export async function generateMetadata(props: LogoDesigningPageProps) {
  const { locale } = await props.params;
  const t = await getTranslations({
    locale,
    namespace: 'LogoDesign',
  });

  return {
    title: t('meta_title'),
    description: t('meta_description'),
  };
}

// export async function getStaticProps() {
//   // fetch the blog posts from the mock API
//   const res = await fetch('http://localhost:3000/posts');
//   const posts = await res.json();

//   return {
//     props: { posts }, // props will be passed to the page
//   };
// }

// const callAPI = async (): Promise<any> => {
//   let res = null;
//   try {
//     res = await fetch(`http://localhost:8080/products?slug=logo-design`);
//   } catch (err) {
//     // console.log(err);
//   }
//   return res?.json();
// };

export default async function LogoDesign(props: LogoDesigningPageProps) {
  const { locale } = await props.params;
  setRequestLocale(locale);
  let products: any[] = [];
  try {
    const result = await Accounting.items({ 
      params: {
        category: 'logo-designing'
      },
      headers: {
        'Authorization': `Bearer ${(await cookies())?.get('ACID')?.value}`
      }
    });
    products = result.data.products;
  } catch (err) {
    //
  }

  return (
    <section className="py-20 lg:py-25 xl:py-30 px-15 lg:px-25 xl:px-30">
      <ServicesHero heading="Logo Design" description="It does not matter how your company, product or service are
            attractive for the audience, if the logo does not correctly
            reflect your points of strength. An unsuitable company identity
            will attract the wrong audience for your company. Time is
            precious so better not risk wasting it dealing with potential
            customers whom you are not really interested in. This is a
            relevant problem when starting a new business. i elaborated a
            logo design process, which I apply to every project, aiming to
            make sure that the brand can communicate the values and points
            of strength of the company." />
      <br />
      <SectionSteps heading="How we make a Logo Design" steps={[
        {
          name: "Define Brand Identity and Seek Inspiration"
        },
        {
          name: "Determine Logo Style & Type"
        },
        {
          name: "Decide Color Scheme & Font"
        },
        {
          name: "Build Outline and Create a Logo"
        },
        {
          name: "Refine results and Finalize"
        }
      ]} />
      <br />
      <Product products={products} />
      <FaqSection />
    </section>
  );
}
