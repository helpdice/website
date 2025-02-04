import { getTranslations, setRequestLocale } from 'next-intl/server';

import Signup from '@/components/Auth/Signup';

type SignUpPageProps = {
  params: Promise<{ locale: string }>;
};

export async function generateMetadata(props: SignUpPageProps) {
  const { locale } = await props.params;
  const t = await getTranslations({
    locale,
    namespace: 'SignUp',
  });

  return {
    title: t('meta_title'),
    description: t('meta_description')
  };
}

const SignUpPage = async (props: SignUpPageProps) => {
  const { locale } = await props.params;
  setRequestLocale(locale);
  return <Signup />;
};

export default SignUpPage;
