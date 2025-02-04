/* eslint-disable no-underscore-dangle */
/* eslint-disable react/no-array-index-key */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable no-nested-ternary */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable react/no-unescaped-entities */
// import './index.scss';

// import { useTranslations } from 'next-intl';

import { getTranslations } from 'next-intl/server';

// import LearnBody from './body';

export async function generateMetadata(props: { params: Promise<{ locale: string }> }) {
  const { locale } = await props.params;
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
