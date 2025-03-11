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
import RelatedPost from "@/components/Blog/RelatedPost";
import Image from "next/image";
import SharePost from "@/components/Blog/SharePost";
// import { fetchMcq, fetchMcqCategories, fetchMcqs } from '../../api/mcq.services';
import type { MCQ, MCQListItem } from "@/types/mcq";
import MCQOptions from "@/components/MCQ/McqOptions";
import CategoryTree from "@/components/CategoryTree";
import Article from "@/components/Blog/Article";
import McqRelated from "@/components/MCQ/McqRelated";
import { Content } from "@helpdice/sdk";
import MCQHeader from "../../header";
import SearchBox from "@/components/SearchBox";
import { permanentRedirect, RedirectType } from "next/navigation";

type MCQSingleProps = {
  params: Promise<{ locale: string; slug: string, category: string }>;
};

export async function generateMetadata(props: MCQSingleProps) {
  // const t = await getTranslations({
  //   locale: props.params.locale,
  //   namespace: 'About',
  // });
  const { slug, category } = await props.params;
  if (slug === 'www.helpdice.com') {
    const _mcq = (await Content.mcq(category)).data.mcq
    permanentRedirect(`/mcq/${_mcq.category.slug}/${_mcq.slug}`, RedirectType.replace);
  }
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
  let categories = [];
  let question: MCQ = {
    _id: 0,
    title: "",
    category: {
      name: "",
      slug: "",
      metadata: undefined,
      _id: undefined,
      _ref: undefined
    },
    slug: "",
    options: [],
    correctAnswers: [],
    explanations: undefined,
    createdAt: "",
    updatedAt: "",
    author: {
      name: "",
      image: undefined,
      bio: undefined,
      _id: undefined
    },
    isMultipleChoice: false
  };
  let mcqs: MCQListItem[] = [];
  try {
    categories = (await Content.mcqsCategories()).data.categories;
    question = (await Content.mcq(slug)).data.mcq;
    mcqs = (
      await Content.mcqs({
        params: {
          category: question.category.slug,
          related: true,
        },
      })
    ).data.mcqs;
  } catch (err) {
    console.log(err);
  }

  return (
    <>
      {/* <MCQBody categories={categories} blogs={blogs} /> */}
      <section className="pt-20 pb-20 lg:pt-25 lg:pb-25 xl:pt-30 xl:pb-30">
        <MCQHeader />
        <br />
        <br />
        <div className="max-w-c-1390 mx-auto px-4 md:px-8 2xl:px-0">
          <div className="flex flex-col-reverse gap-7.5 lg:flex-row xl:gap-12.5">
            <div className="md:w-1/2 lg:w-[32%]">
              <SearchBox path="/mcq/" />

              <div className="animate_top border-stroke shadow-solid-5 dark:border-strokedark dark:bg-blacksection mb-10 rounded-md border bg-white p-9">
                <h4 className="mb-7.5 text-2xl font-semibold text-black dark:text-white">
                  Categories
                </h4>

                <CategoryTree data={categories} path="/mcq/:category" />
              </div>

              <RelatedPost />
            </div>

            {question?.image && (
              <div className="mb-10 w-full overflow-hidden">
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
              <div className="animate_top border-stroke shadow-solid-5 dark:border-strokedark dark:bg-blacksection rounded-md border bg-white px-10 py-10">
                {question && (
                  <>
                    <Article
                      heading={question.title}
                      dated={question.createdAt}
                    >
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
