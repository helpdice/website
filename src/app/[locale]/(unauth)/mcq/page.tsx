import './index.scss';
import { getTranslations } from 'next-intl/server';
import McqItem from '@/components/MCQ/McqItem';
import type { MCQ } from '@/types/mcq';
import { Content } from '@helpdice/sdk';
import SearchBar from '@/components/SearchBar';
import MCQHeader from './header';

type MCQPageProps = {
  params: { locale: string },
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>
}

export async function generateMetadata(props: MCQPageProps) {
  const { locale } = props.params;
  const t = await getTranslations({
    locale,
    namespace: 'MCQ',
  });

  return {
    title: t('meta_title'),
    description: t('meta_description'),
    keywords: t('meta_keywords'),
  };
}

export default async function MCQPage(props: MCQPageProps) {
  const searchParams = await props.searchParams;
  const search = searchParams['search'];
  const category = searchParams['category'];
  const result = await Content.mcqs({
    params: {
      search,
      category
    }
  });
  const mcqs: MCQ[] = result.data.mcqs;
  const res = await Content.mcqsCategories();
  const categories: any[] = res.data.categories;
  return (
    <section className="py-20 lg:py-25 xl:py-30">
      <MCQHeader />
      <br />
      <br />
      <SearchBar categories={categories} />
      <div className="mx-auto mt-15 max-w-c-1280 px-4 md:px-8 xl:mt-20 xl:px-0">
        <div className="grid grid-cols-1 gap-5.5 md:grid-cols-1 lg:grid-cols-2 xl:gap-8">
          {mcqs.map((post, key) => (
            <McqItem key={key} blog={post} />
          ))}
        </div>
      </div>
    </section>
  );
}
