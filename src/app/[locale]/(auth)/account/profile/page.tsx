import Placeholder from '@/components/Placeholder';
import { getTranslations } from 'next-intl/server';
import Image from 'next/image';
import ProfileBody from './body';

export async function generateMetadata(props: { params: Promise<{ locale: string }> }) {
  const { locale } = await props.params;
  const t = await getTranslations({
    locale,
    namespace: 'Profile',
  });

  return {
    title: t('meta_title'),
  };
}

const ProfilePage = () => {
  return (
    <div className="py-15">
      <ProfileBody />
    </div>
  );
};

export default ProfilePage;