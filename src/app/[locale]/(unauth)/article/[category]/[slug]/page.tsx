/* eslint-disable prefer-destructuring */
/* eslint-disable no-console */
/* eslint-disable react/jsx-no-undef */
/* eslint-disable no-underscore-dangle */
/* eslint-disable react/no-array-index-key */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable no-nested-ternary */
/* eslint-disable react/no-unescaped-entities */
import './index.scss';

import { BASE_URL, SITE_NAME } from '@/utils/constants';

// import { useTranslations } from 'next-intl';
// import { fetchBlogs } from '../../../api/services';
// import { getTranslations } from 'next-intl/server';
// import Image from 'next/image';
import SharePost from '@/components/Blog/SharePost';
import RelatedPost from '@/components/Blog/RelatedPost';
import type { Blog } from '@/types/blog';
// import { format } from 'date-fns';
// import { fetchBlog, fetchBlogCategories } from '../../../api/blog.services';
import type { Category } from '@/types/category';
import Article from '@/components/Blog/Article';
import { Content } from '@helpdice/sdk'
import CategoryTree from '@/components/CategoryTree';
import SearchBox from '@/components/SearchBox';

type BlogSingleProps = {
  params: Promise<{ locale: string; slug: string; category: string }>
}

export async function generateMetadata(props: BlogSingleProps) {
  // const t = await getTranslations({
  //   locale: props.params.locale,
  //   namespace: 'About',
  // });
  const { slug, category } = await props.params;
  const res = await Content.article(slug);
  const b: Blog = res.data.article;

  const title = b ? `${b.title.substring(0, 58)}...` : '';
  const description = b ? `${`${b.title} : ${b.description}`}`.substring(0, 157) : '';
  return {
    title,
    description,
    keywords: b ? b.title : '',
    openGraph: {
      title,
      description,
      url: `${BASE_URL}/blog/${category}/${slug}`,
      siteName: SITE_NAME,
      type: 'article',
      publishedTime: b?.createdAt,
      authors: ['Helpdice'],
    },
    robots: {
      index: false,
      follow: true,
      nocache: true,
      googleBot: {
        index: true,
        follow: false,
        noimageindex: true,
        'max-video-preview': -1,
        'max-image-preview': 'large',
        'max-snippet': -1,
      },
    }
  };
}

export default async function BlogPost(props: BlogSingleProps) {
  // const t = useTranslations('About');
  const { slug } = await props.params
  const result = await Content.article(slug)
  const blog = {
    ...result.data.article,
    author: {
      name: 'Admin',
      image: ""
    }
  }
  const res = await Content.articleCategories();
  const categories: any[] = res.data.categories;

  return (
    <section className="pb-20 pt-35 lg:pb-25 lg:pt-45 xl:pb-30 xl:pt-50">
        <div className="mx-auto max-w-c-1390 px-4 md:px-8 2xl:px-0">
          <div className="flex flex-col-reverse gap-7.5 lg:flex-row xl:gap-12.5">
            <div className="md:w-1/2 lg:w-[32%]">
              <SearchBox path="/article/" />

              <div className="animate_top mb-10 rounded-md border border-stroke bg-white p-9 shadow-solid-13 dark:border-strokedark dark:bg-blacksection">
                <h4 className="mb-7.5 text-2xl font-semibold text-black dark:text-white">
                  Categories
                </h4>
                <CategoryTree data={categories} path="/article/:category" />
              </div>

              <RelatedPost />
            </div>

            <div className="lg:w-2/3">
              <div className="animate_top rounded-md border border-stroke bg-white p-7.5 shadow-solid-13 dark:border-strokedark dark:bg-blacksection md:p-10">
                <Article heading={blog.title} author={blog.author} dated={blog.createdAt}>
                  <div dangerouslySetInnerHTML={{ __html: blog.body }} className="blog-details" />
                </Article>

                <SharePost />
              </div>
            </div>
          </div>
        </div>
      </section>
  );
}
