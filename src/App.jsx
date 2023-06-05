import { Routes, Route } from 'react-router-dom';
import { lazy, Suspense } from 'react';

const Navbar = lazy(() => import('./modules/NavbarUser/Navbar'));
const HomePage = lazy(() => import('./pages/HomePage/HomePage'));
const TweetsPage = lazy(() => import('./pages/TweetsPage/TweetsPage'));

export const App = () => {
  return (
    <Suspense>
      <Navbar />
      <Routes>
        <Route>
          <Route path="/" element={<HomePage />} />
          <Route path="/tweets" element={<TweetsPage />} />
        </Route>
        
        <Route path="*" element={<HomePage />} />
      </Routes>
    </Suspense>
  );
};
