import { Suspense } from 'react';
import Routes from './routes';

function App() {
  return (
    <Suspense fallback={null}>
      <Routes />
    </Suspense>
  );
}

export default App;
