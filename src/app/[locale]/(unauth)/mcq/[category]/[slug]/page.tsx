/* eslint-disable prefer-destructuring */
/* eslint-disable no-console */
/* eslint-disable react/jsx-no-undef */
/* eslint-disable no-underscore-dangle */
/* eslint-disable react/no-array-index-key */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable no-nested-ternary */
/* eslint-disable react/no-unescaped-entities */
// import '../index.scss';

// import { useTranslations } from 'next-intl';

// import { getTranslations } from 'next-intl/server';
// import { API_URL } from '@/utils/constants';

// import MCQBody from '../body';
import RelatedPost from '@/components/Blog/RelatedPost';
import Image from 'next/image';
import SharePost from '@/components/Blog/SharePost';
// import { fetchMcq, fetchMcqCategories, fetchMcqs } from '../../api/mcq.services';
import type { MCQ, MCQListItem } from '@/types/mcq';
import MCQOptions from '@/components/MCQ/McqOptions';
import CategoryTree from '@/components/CategoryTree';
import Article from '@/components/Blog/Article';
import McqRelated from '@/components/MCQ/McqRelated';
import { Content } from '@helpdice/sdk';
import MCQHeader from '../../header';

type MCQSingleProps = {
  params: Promise<{ locale: string, slug: string }>
}

export async function generateMetadata(props: MCQSingleProps) {
  // const t = await getTranslations({
  //   locale: props.params.locale,
  //   namespace: 'About',
  // });
  const { slug } = await props.params;
  const m = (await Content.mcq(slug)).data.mcq;

  const title =
    slug === m.category?.slug
      ? `${m.category.name} MCQ | Helpdice`
      : m.title.length <= 46
        ? `${m.title.substring(0, 49)} - Helpdice`
        : `${m.title.substring(0, 46)}... - Helpdice`;

  const description =
    slug === m.category?.slug
      ? `MCQs based on ${m.category.name} provided by Helpdice to enhance and test deep knowledge of the topic.`
      : `${title} A: ${m.option_a}, B: ${m.option_b}`;

  const keywords =
    slug === m.category?.slug
      ? `Question and answers in ${m.category.name}, ${m.category.name} multiple choice questions and answers, ${m.category.name} Important MCQs, Solved MCQs for ${m.category.name}, ${m.category.name} MCQs with answers PDF download`
      : `${m.title}`;

  return {
    title,
    description,
    keywords,
  };
}

export default async function MCQSinglePage(props: MCQSingleProps) {
  const { slug } = await props.params;
  const categories = (await Content.mcqsCategories()).data.categories;
  const question: MCQ = (await Content.mcq(slug)).data.mcq;
  const mcqs: MCQListItem[] = (await Content.mcqs({
    params: {
      category: question.category.slug,
      related: true
    }
  })).data.mcqs;

  return (
    <>
      {/* <MCQBody categories={categories} blogs={blogs} /> */}
      <section className="pb-20 pt-20 lg:pb-25 lg:pt-25 xl:pb-30 xl:pt-30">
        <MCQHeader />
        <br /><br />
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

            {question?.image && (
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
                {question && (
                  <>
                    <Article heading={question.title} dated={question.createdAt}>
                      <MCQOptions {...question} />
                      {/* <Divider h={1.5} /> */}
                      <McqRelated mcqs={mcqs} />
                    </Article>
                    <SharePost />
                  </>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
