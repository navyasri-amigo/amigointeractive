import React, { useEffect, useState } from 'react';
import { BrowserRouter, Navigate, Route, Routes, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import { Header } from './components/layout/Header';
import { Loader } from './components/layout/Loader';
// import { CustomCursor } from './components/layout/CustomCursor';
import { ScrollProgress } from './components/layout/ScrollProgress';
import { ScrollManager } from './components/layout/ScrollManager';
import { PageTransition } from './components/layout/PageTransition';
import { Home } from './pages/Home';
import { About } from './pages/About';
import { Services } from './pages/Services';
import { ServiceDetail } from './pages/ServiceDetail';
import { News } from './pages/News';
import { Testimonials } from './pages/Testimonials';
import { Careers } from './pages/Careers';
import { Locations } from './pages/Locations';
import { Contact } from './pages/Contact';
// import { AdvertiserSignup } from './pages/AdvertiserSignup';
// import { PublisherSignup } from './pages/PublisherSignup';

export function App() {
  const [ready, setReady] = useState(false);

  useEffect(() => {
    const t = window.setTimeout(() => setReady(true), 1100);
    return () => window.clearTimeout(t);
  }, []);

  return (
    <BrowserRouter>
      <div className="w-full bg-white">
        <AnimatePresence>{!ready && <Loader key="loader" />}</AnimatePresence>
        {ready && <AppRoutes />}
      </div>
    </BrowserRouter>);

}

const SIGNUP_ROUTES = ['/advertiser-signup', '/publisher-signup'];

function AppRoutes() {
  const location = useLocation();
  const isSignup = SIGNUP_ROUTES.includes(location.pathname);

  return (
    <>
      <ScrollProgress />
      {/* <CustomCursor /> */}
      <ScrollManager />
      {!isSignup && <Header />}
      <AnimatePresence
        mode="wait"
        onExitComplete={() => {
          if (!window.location.hash) window.scrollTo({ top: 0, behavior: 'instant' as ScrollBehavior });
        }}>
        
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<PageTransition><Home /></PageTransition>} />
          <Route path="/about" element={<PageTransition><About /></PageTransition>} />
          <Route path="/services" element={<PageTransition><Services /></PageTransition>} />
          <Route path="/services/:slug" element={<PageTransition><ServiceDetail /></PageTransition>} />
          <Route path="/news" element={<PageTransition><News /></PageTransition>} />
          <Route path="/testimonials" element={<PageTransition><Testimonials /></PageTransition>} />
          <Route path="/careers" element={<PageTransition><Careers /></PageTransition>} />
          <Route path="/locations" element={<PageTransition><Locations /></PageTransition>} />
          <Route path="/contact" element={<PageTransition><Contact /></PageTransition>} />
          {/* <Route path="/advertiser-signup" element={<PageTransition withFooter={false}><AdvertiserSignup /></PageTransition>} /> */}
          {/* <Route path="/publisher-signup" element={<PageTransition withFooter={false}><PublisherSignup /></PageTransition>} /> */}
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </AnimatePresence>
    </>);

}