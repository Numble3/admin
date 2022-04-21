import { memo } from 'react';
import { Outlet } from 'react-router-dom';
import LayoutHeader from './header';
import LayoutNavigation from './navigation';

const LayoutContainer = () => {
  return (
    <>
      <LayoutHeader />
      <LayoutNavigation />
      <main className={`h-full w-full pl-nav pt-header`}>
        <Outlet />
      </main>
    </>
  );
};

export default LayoutContainer;
