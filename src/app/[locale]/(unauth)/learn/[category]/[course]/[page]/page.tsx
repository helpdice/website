/* eslint-disable react/no-unescaped-entities */
// import './index.scss';

// import { useTranslations } from 'next-intl';
// import { getTranslations } from 'next-intl/server';

// import { fetchCoursePages } from '@/app/[locale]/(unauth)/api/services';

// import CourseBody from './body';

export async function generateMetadata(props: {
  params: Promise<{ locale: string; course: string; page: string; category: string }>;
}) {
  // const t = await getTranslations({
  //   locale: props.params.locale,
  //   namespace: 'About',
  // });

  await props.params;

  // const { response: Page } = await fetchCoursePages(course, page);

  return {
    title: "",
    description: "",
    keywords: "",
  };
}

export default async function About(props: {
  params: Promise<{ locale: string; course: string; page: string }>;
}) {
  await props.params;
  // const t = useTranslations('About');
  // const { response } = await fetchCoursePages(course, page);
  // const { response: data } = await fetchCoursePages(course);
  // console.log(data);
  // const { response: blogs } = await fetchBlogs();
  return <></>;
}
