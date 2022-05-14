import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import AlertPopup from '../common/alert';
import LayoutHeader from './header';
import LayoutNavigation from './navigation';

const LayoutContainer = () => {
  return (
    <>
      <LayoutHeader />
      <LayoutNavigation />
      <main className={`w-full pl-nav`}>
        <Suspense fallback={null}>
          <Outlet />
        </Suspense>
      </main>
      <AlertPopup />
    </>
  );
};

export default LayoutContainer;
