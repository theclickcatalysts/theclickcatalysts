// import React, { Suspense, lazy, useState, useEffect } from "react";
// import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
// import "react-toastify/dist/ReactToastify.css";
// import ScrollToTopButton from "./Components/Common/ScrollToTopButton";
// import LoadingScreen from "./Components/Common/Loading";
// import WhatsAppButton from "./Components/Common/WhatsAppButton";
// import ScrollToTop from "./Components/Common/ScrollToTop";
// import MainLayout from "./MainLayout"; // Import MainLayout
// import CustomCursor from "./Components/Common/CustomCursor";

// const Home = lazy(() => import("./Pages/Home"));
// const KnowUs = lazy(() => import("./Pages/KnowUs"));
// const Services = lazy(() => import("./Pages/Services"));
// const Contact = lazy(() => import("./Pages/Contact"));
// const Blog = lazy(() => import("./Pages/Blog"));
// const Carrer = lazy(() => import("./Pages/Carrer"));
// const Login = lazy(() => import("./Dashboard/Login"));
// const Dashboard = lazy(() => import("./Pages/Dashboard"));
// const NotFoundPage = lazy(() => import("./Components/Common/NotFoundPage"));

// function App() {
//   const [auth, setAuth] = useState(localStorage.getItem("authToken") ? true : false);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     setTimeout(() => setLoading(false), 1850);
//   }, []);

//   return (
//     <BrowserRouter>
//     <CustomCursor />
//       <ScrollToTop />
//       {loading ? (
//         <LoadingScreen />
//       ) : (
//         <Suspense fallback={<LoadingScreen />}>
//           <Routes>
//             <Route
//               path="/dashboard"
//               element={auth ? <Dashboard /> : <Navigate to="/login" replace />}
//             />
//             <Route
//               path="*"
//               element={
//                 <MainLayout>
//                   <Routes>
//                     <Route path="/" element={<Home />} />
//                     <Route path="/know-us" element={<KnowUs />} />
//                     <Route path="/services" element={<Services />} />
//                     <Route path="/career" element={<Carrer />} />
//                     <Route path="/contact" element={<Contact />} />
//                     <Route path="/blog" element={<Blog />} />
//                     <Route path="/login" element={<Login setAuth={setAuth} />} />
//                     <Route path="*" element={<NotFoundPage />} />
//                   </Routes>
//                 </MainLayout>
//               }
//             />
//           </Routes>
//           <ScrollToTopButton />
//           <WhatsAppButton />
//         </Suspense>
//       )}
//     </BrowserRouter>
//   );
// }

// export default App;

import React, { Suspense, lazy, useEffect, useState } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { useSelector } from "react-redux";
import "react-toastify/dist/ReactToastify.css";
import ScrollToTopButton from "./Components/Common/ScrollToTopButton";
import LoadingScreen from "./Components/Common/Loading";
import WhatsAppButton from "./Components/Common/WhatsAppButton";
import ScrollToTop from "./Components/Common/ScrollToTop";
import MainLayout from "./MainLayout";
import CustomCursor from "./Components/Common/CustomCursor";
import PrivacyPolicy from "./Pages/PrivacyPolicy";

const Home = lazy(() => import("./Pages/Home"));
const KnowUs = lazy(() => import("./Pages/KnowUs"));
const Services = lazy(() => import("./Pages/Services"));
const Contact = lazy(() => import("./Pages/Contact"));
const Blog = lazy(() => import("./Pages/Blog"));
const BlogDetail = lazy(() => import("./Components/Blog/BlogDetail"));
const Carrer = lazy(() => import("./Pages/Carrer"));
const Login = lazy(() => import("./Dashboard/Login"));
const Dashboard = lazy(() => import("./Pages/Dashboard"));
const NotFoundPage = lazy(() => import("./Components/Common/NotFoundPage"));

function PrivateRoute({ children }) {
  const { isAuthenticated } = useSelector((state) => state.auth);
  return isAuthenticated ? children : <Navigate to="/login" replace />;
}

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timeout = setTimeout(() => setLoading(false), 1850);
    return () => clearTimeout(timeout);
  }, []);

  if (loading) return <LoadingScreen />;

  return (
    <BrowserRouter>
      <CustomCursor />
      <ScrollToTop />
      <Suspense fallback={<LoadingScreen />}>
        <Routes>
          {/* Public Pages */}
          <Route
            path="/"
            element={
              <MainLayout>
                <Home />
              </MainLayout>
            }
          />
          <Route
            path="/know-us"
            element={
              <MainLayout>
                <KnowUs />
              </MainLayout>
            }
          />
          <Route
            path="/services"
            element={
              <MainLayout>
                <Services />
              </MainLayout>
            }
          />
          <Route
            path="/career"
            element={
              <MainLayout>
                <Carrer />
              </MainLayout>
            }
          />
          <Route
            path="/contact"
            element={
              <MainLayout>
                <Contact />
              </MainLayout>
            }
          />
          <Route
            path="/blog"
            element={
              <MainLayout>
                <Blog />
              </MainLayout>
            }
          />
          <Route
            path="/blog/:slugWithId"
            element={
              <MainLayout>
                <BlogDetail />
              </MainLayout>
            }
          />
          <Route
            path="/login"
            element={
              <MainLayout>
                <Login />
              </MainLayout>
            }
          />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />

          {/* Private Route */}
          <Route
            path="/dashboard"
            element={
              <PrivateRoute>
                <Dashboard />
              </PrivateRoute>
            }
          />

          {/* 404 Fallback */}
          <Route
            path="*"
            element={
              <MainLayout>
                <NotFoundPage />
              </MainLayout>
            }
          />
        </Routes>
        <ScrollToTopButton />
        <WhatsAppButton />
      </Suspense>
    </BrowserRouter>
  );
}

export default App;
