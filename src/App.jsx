import { useState, lazy, Suspense } from "react";
import { Routes, Route } from "react-router-dom";

import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import Benefits from "./components/Benefits/Benefits";
import Footer from "./components/Footer/Footer";
import ScrollToHash from "./components/ScrollToHash";
import ScrollToTop from "./components/ScrollToTop";
import ErrorBoundary from "./components/ErrorBoundary/ErrorBoundary";
import SEO from "./components/SEO/SEO";
import seo from "./data/seo";

const Reviews = lazy(() => import("./components/Reviews/Reviews"));
const BundleDiscount = lazy(
  () => import("./components/BundleDiscount/BundleDiscount"),
);
const PopularAddons = lazy(
  () => import("./components/PopularAddons/PopularAddons"),
);
const MountingStyles = lazy(
  () => import("./components/MountingStyles/MountingStyles"),
);
const Offer = lazy(() => import("./components/Offer/Offer"));
const Steps = lazy(() => import("./components/Steps/Steps"));
const ServiceAreas = lazy(
  () => import("./components/ServiceAreas/ServiceAreas"),
);
const Projects = lazy(() => import("./components/Projects/Projects"));
const BookingCTA = lazy(() => import("./components/BookingCTA/BookingCTA"));
const FAQ = lazy(() => import("./components/FAQ/FAQ"));
const QuoteQuiz = lazy(() => import("./components/QuoteQuiz/QuoteQuiz"));

const PrivacyPolicy = lazy(() => import("./pages/PrivacyPolicy"));
const CookiePolicy = lazy(() => import("./pages/CookiePolicy"));
const Disclaimer = lazy(() => import("./pages/Disclaimer"));
const TermsOfService = lazy(() => import("./pages/TermsOfService"));
const Blog = lazy(() => import("./pages/Blog/Blog"));
const BlogArticle = lazy(() => import("./pages/Blog/BlogArticle"));
const NotFound = lazy(() => import("./pages/NotFound"));

function HomePage({ onQuizOpen }) {
  return (
    <>
      <SEO {...seo.home} />

      <Hero onQuizOpen={onQuizOpen} />
      <Benefits />

      <Suspense fallback={null}>
        <Reviews />
        <BundleDiscount onQuizOpen={onQuizOpen} />
        <PopularAddons onQuizOpen={onQuizOpen} />
        <MountingStyles onQuizOpen={onQuizOpen} />
        <Offer />
        <Steps />
        <ServiceAreas />
        <Projects />
        <BookingCTA />
        <FAQ />
      </Suspense>
    </>
  );
}

function App() {
  const [isQuizOpen, setIsQuizOpen] = useState(false);

  const openQuiz = () => setIsQuizOpen(true);
  const closeQuiz = () => setIsQuizOpen(false);

  return (
    <>
      <Header onQuizOpen={openQuiz} />
      <ScrollToTop />
      <ScrollToHash />

      <ErrorBoundary>
        <Suspense fallback={null}>
          <Routes>
            <Route path="/" element={<HomePage onQuizOpen={openQuiz} />} />
            <Route path="/privacy-policy" element={<PrivacyPolicy />} />
            <Route path="/cookie-policy" element={<CookiePolicy />} />
            <Route path="/disclaimer" element={<Disclaimer />} />
            <Route path="/terms-of-service" element={<TermsOfService />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/blog/:slug" element={<BlogArticle />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Suspense>
      </ErrorBoundary>

      <Footer />

      {isQuizOpen && (
        <Suspense fallback={null}>
          <QuoteQuiz isOpen={isQuizOpen} onClose={closeQuiz} />
        </Suspense>
      )}
    </>
  );
}

export default App;
