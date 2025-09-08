// import { useTranslations } from 'next-intl';

import { getTranslations } from 'next-intl/server';

// import LearnBody from './body';

export async function generateMetadata(props: { params: { locale: string } }) {
  const { locale } = props.params;
  const t = await getTranslations({
    locale,
    namespace: 'Learn',
  });

  return {
    title: t('meta_title'),
    description: t('meta_description'),
  };
}

export default function Learn() {
  // const t = useTranslations('About');
  return <></>;
}
