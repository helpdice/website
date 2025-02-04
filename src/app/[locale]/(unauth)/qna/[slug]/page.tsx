/* eslint-disable no-nested-ternary */
/* eslint-disable prefer-destructuring */
/* eslint-disable react/no-unescaped-entities */
// import './index.scss';

// import { useTranslations } from 'next-intl';

// import { getTranslations } from 'next-intl/server';
// import { API_URL } from '@/utils/constants';

import CategoryTree from '@/components/CategoryTree';
import RelatedPost from '@/components/Blog/RelatedPost';
// import McqRelated from '@/components/MCQ/McqRelated';
import Article from '@/components/Blog/Article';
import SharePost from '@/components/Blog/SharePost';
import Image from 'next/image';
// import { fetchQnaCategories, fetchQnas } from '../../api/qna.services';
import type { QNA, QNAListItem } from '@/types/qna';
// import { getTranslations } from 'next-intl/server';
import QnaRelated from '@/components/QNA/QNARelated';
import { Content } from '@helpdice/sdk';
import QNAHeader from '../header';

type QNASinglePageProps = {
  params: Promise<{ locale: string; slug: string }>
}
export async function generateMetadata(props: QNASinglePageProps) {
  const { slug } = await props.params;
  // const t = await getTranslations({
  //   locale,
  //   namespace: 'QNA',
  // });

  let q: any;

  try {
    // console.log(props.params.slug);
    const res = await Content.qna(slug);
    q = res.data.qna;
  } catch (e) {
    //
  }

  const title =
    slug === q.category.slug
      ? `${q.category.name} QNA | Helpdice`
      : q.question.length <= 46
        ? `${q.question.substring(0, 49)} - Helpdice`
        : `${q.question.substring(0, 46)}... - Helpdice`;

  const description =
    slug === q.category.slug
      ? `QNAs based on ${q.category.name} provided by Helpdice to enhance and test deep knowledge of the topic.`
      : `${title} : ${q.answer}`;

  const keywords =
    slug === q.category.slug
      ? `Question and answers in ${q.category.name}, ${q.category.name} Important Questions and answers, Solved QNAs for ${q.category.name}, ${q.category.name} Questions with answers PDF download`
      : `${q.question}`;

  return {
    title,
    description,
    keywords,
  };
}

export default async function About(props: QNASinglePageProps) {
  // const t = useTranslations('About');
  const { slug } = await props.params;
  const categories = (await Content.qnasCategories()).data.categories;
  let _qna: QNA = (await Content.qna(slug)).data.qna;
  const qna: QNA = {
    _id: _qna._id,
    question: _qna.question,
    category: _qna.category,
    answer: _qna.answer,
    slug: _qna.slug,
    author: {
      name: 'Admin',
      image: ""
    },
    createdAt: _qna.createdAt,
    updatedAt: _qna.updatedAt,
  }

  const qnas: QNAListItem[] = (await Content.qnas({
    params: {

    }
  })).data.qnas;

  return (
    <section className="pb-20 pt-20 lg:pb-25 lg:pt-25 xl:pb-30 xl:pt-30">
      <QNAHeader />
      <br />
      <div className="mx-auto max-w-c-1390 px-4 md:px-8 2xl:px-0">
        <div className="flex flex-col-reverse gap-7.5 lg:flex-row xl:gap-12.5">
          <div className="md:w-1/2 lg:w-[32%]">
            <div className="animate_top mb-10 rounded-md border border-stroke bg-white p-3.5 shadow-solid-5 dark:border-strokedark dark:bg-blacksection">
              <form
                action="https://formbold.com/s/unique_form_id"
                method="POST"
              >
                <div className="relative">
                  <input
                    type="text"
                    placeholder="Search Here..."
                    className="w-full rounded-lg border border-stroke px-6 py-4 focus:border-primary focus:outline-none dark:border-strokedark dark:bg-black dark:shadow-none dark:focus:border-primary"
                  />

                  <button
                    className="absolute right-0 top-0 p-5"
                    aria-label="search-icon"
                  >
                    <svg
                      className="fill-black transition-all duration-300 hover:fill-primary dark:fill-white dark:hover:fill-primary"
                      width="21"
                      height="21"
                      viewBox="0 0 21 21"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M16.031 14.617L20.314 18.899L18.899 20.314L14.617 16.031C13.0237 17.3082 11.042 18.0029 9 18C4.032 18 0 13.968 0 9C0 4.032 4.032 0 9 0C13.968 0 18 4.032 18 9C18.0029 11.042 17.3082 13.0237 16.031 14.617ZM14.025 13.875C15.2941 12.5699 16.0029 10.8204 16 9C16 5.132 12.867 2 9 2C5.132 2 2 5.132 2 9C2 12.867 5.132 16 9 16C10.8204 16.0029 12.5699 15.2941 13.875 14.025L14.025 13.875Z" />
                    </svg>
                  </button>
                </div>
              </form>
            </div>

            <div className="animate_top mb-10 rounded-md border border-stroke bg-white p-9 shadow-solid-5 dark:border-strokedark dark:bg-blacksection">
              <h4 className="mb-7.5 text-2xl font-semibold text-black dark:text-white">
                Categories
              </h4>
              {/* <ul>
              {categories.map((category: Category) => (
                <li className="mb-3 transition-all duration-300 last:mb-0 hover:text-primary">
                  <a href={`/blog/${category.slug}`}>{category.name}</a>
                </li>
              ))}
            </ul> */}
              <CategoryTree data={categories} />
            </div>

            <RelatedPost />
          </div>

          {qna.image && (
            <div className="mb-10 w-full overflow-hidden ">
              <div className="relative aspect-[97/60] w-full sm:aspect-[97/44]">
                <Image
                  src={"/images/blog/blog-01.png"}
                  alt=""
                  fill
                  className="rounded-md object-cover object-center"
                />
              </div>
            </div>
          )}

          <div className="lg:w-2/3">
            <div className="animate_top rounded-md border border-stroke bg-white shadow-solid-5 dark:border-strokedark dark:bg-blacksection py-10 px-10">

              <Article heading={qna.question} author={qna.author} dated={qna.createdAt}>
                <div className="p-4 bg-gray-200 dark:bg-gray-700 rounded-md mb-6">{qna.answer}</div>
                {/* <Divider h={1.5} /> */}
                <QnaRelated qnas={qnas.slice(0, 5)} />
              </Article>
              <SharePost />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
