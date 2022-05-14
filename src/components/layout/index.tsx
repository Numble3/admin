import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import AlertPopup from './alert';
import LayoutHeader from './header';
import LayoutNavigation from './navigation';

const LayoutContainer = () => {
  return (
    <>
      <LayoutHeader />
      <LayoutNavigation />
      <main className={`h-full w-full pl-nav pt-header`}>
        <Suspense fallback={null}>
          <Outlet />
        </Suspense>
      </main>
      <AlertPopup />
    </>
  );
};

export default LayoutContainer;
