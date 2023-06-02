// import { Routes, Route } from 'react-router-dom';
// import { lazy, Suspense } from 'react';

// import PrivateRoute from 'modules/PrivateRoute/PrivateRoute';
// import PublicRoute from 'modules/PublicRoute/PublicRoute';

// const Navbar = lazy(() => import('./modules/Navbar/Navbar'));
// const ContactBooks = lazy(() => import('./Pages/ContactBooks/ContactBooks'));
// const LoginPage = lazy(() => import('./Pages/LoginPage/LoginPage'));
// const RegisterPage = lazy(() => import('./Pages/RegisterPage/RegisterPage'));

export const App = () => {
  return (
  <>HI My FOLLOWERS</>
    // <Suspense>
    //   <Navbar />
    //   <Routes>
    //     <Route element={<PrivateRoute />}>
    //       <Route path="/contacts" element={<ContactBooks />} />
    //     </Route>
    //     <Route element={<PublicRoute />}>
    //       <Route path="/login" element={<LoginPage />} />
    //       <Route path="/register" element={<RegisterPage />} />
    //     </Route>

    //     <Route path="*" element={<LoginPage />} />
    //   </Routes>
    // </Suspense>
  );
};