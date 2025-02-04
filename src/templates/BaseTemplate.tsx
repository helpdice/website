import SessionProvider from '@/providers/AuthProvider';
import UiProvider from '@/providers/UiProvider';

interface Props {
  children: any;
}

export const BaseTemplate: React.FunctionComponent<Props> = ({
  children,
}: Props) => {
  return (
    <>
      <UiProvider>
      {/* <CssBaseline /> */}
      <SessionProvider>
        {children}
      </SessionProvider>
      </UiProvider>
    </>
  );
};

export default BaseTemplate;

