import { Routes, Route } from 'react-router-dom';
import { lazy, Suspense } from 'react';

// import PrivateRoute from 'modules/PrivateRoute/PrivateRoute';
// import PublicRoute from 'modules/PublicRoute/PublicRoute';

const Navbar = lazy(() => import('./modules/NavbarUser/Navbar'));
const HomePage = lazy(() => import('./pages/HomePage/HomePage'));
const TweetsPage = lazy(() => import('./pages/TweetsPage/TweetsPage'));
const FollowersPage = lazy(() => import('./pages/FollowersPage/FollowersPage'));

export const App = () => {
  return (
    // <>HI My FOLLOWERS</>
    <Suspense>
      <Navbar />
      <Routes>
        <Route>
          <Route path="/" element={<HomePage />} />
          <Route path="/tweets" element={<TweetsPage />} />
          <Route path="/followers" element={<FollowersPage />} />
        </Route>
        {/* <Route element={<PrivateRoute />}>
          <Route path="/contacts" element={<ContactBooks />} />
        </Route> */}
        {/* <Route element={<PublicRoute />}>
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
        </Route> */}

        <Route path="*" element={<HomePage />} />
      </Routes>
    </Suspense>
  );
};
