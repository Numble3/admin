import { Suspense } from 'react';
import LayoutContainer from './components/layout';
import Routes from './routes';

function App() {
  return (
    <Suspense fallback={null}>
      <LayoutContainer>
        <Routes />
      </LayoutContainer>
    </Suspense>
  );
}

export default App;
