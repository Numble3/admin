import { memo } from 'react';
import { ReactNode } from 'react';
import LayoutHeader from './header';
import LayoutNavigation from './navigation';

type Props = {
  children: ReactNode;
};

const LayoutContainer = ({ children }: Props) => {
  return (
    <>
      <LayoutHeader />
      <LayoutNavigation />
      <main className={`h-full w-full pl-nav pt-header`}>{children}</main>
    </>
  );
};

export default memo(LayoutContainer);
