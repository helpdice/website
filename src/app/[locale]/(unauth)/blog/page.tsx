/* eslint-disable react/button-has-type */
/* eslint-disable no-underscore-dangle */
/* eslint-disable react/no-array-index-key */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable no-nested-ternary */
/* eslint-disable react/no-unescaped-entities */
import "./index.scss";
import BlogItem from "@/components/Blog/BlogItem";

// import { useTranslations } from 'next-intl';
import { getTranslations } from 'next-intl/server';
import type { Blog } from "@/types/blog";
import { Content } from "@helpdice/sdk";
import SearchBar from "@/components/SearchBar";

type BlogPageProps = {
  params: Promise<{ locale: string }>,
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>
}

export async function generateMetadata(props: BlogPageProps) {
  const { locale } =  await props.params;
  const t = await getTranslations({
    locale,
    namespace: 'About',
  });

  return {
    title: t('meta_title'),
    description: t('meta_description'),
    robots: {
      index: false,
      follow: true,
      nocache: true,
      googleBot: {
        index: false,
        follow: true,
        noimageindex: true,
        'max-video-preview': -1,
        'max-image-preview': 'large',
        'max-snippet': -1,
      },
    }
  };
}

export default async function BlogPage(props: BlogPageProps, ) {
  const searchParams = await props.searchParams;
  const search = searchParams['search'];
  const category = searchParams['category'];
  const result = await Content.articles({
    params: {
      search,
      category
    }
  });
  const articles: Blog[] = result.data.articles;
  const res = await Content.articleCategories();
  const categories: any[] = res.data.categories;

  return (
    <>
      {/* <!-- ===== Blog Grid Start ===== --> */}
      <section className="py-8 lg:py-10 xl:py-15">
        <div className="mx-auto mt-15 max-w-c-1280 px-4 md:px-8 xl:mt-20 xl:px-0">
          <SearchBar placeholder="Search Article..." categories={categories} />
          <br />
          <br />
          <div className="grid grid-cols-1 gap-6.5 md:grid-cols-2 lg:grid-cols-3 xl:gap-10">
            {articles.map((post, key) => (
              <BlogItem key={key} blog={post} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
