import { useState, lazy, Suspense } from "react";
import { Routes, Route } from "react-router-dom";

import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import Benefits from "./components/Benefits/Benefits";
import Reviews from "./components/Reviews/Reviews";
import BundleDiscount from "./components/BundleDiscount/BundleDiscount";
import PopularAddons from "./components/PopularAddons/PopularAddons";
import Offer from "./components/Offer/Offer";
import Steps from "./components/Steps/Steps";
import About from "./components/About/About";
import BookingCTA from "./components/BookingCTA/BookingCTA";
import Footer from "./components/Footer/Footer";
import ScrollToHash from "./components/ScrollToHash";
import ScrollToTop from "./components/ScrollToTop";
import ErrorBoundary from "./components/ErrorBoundary/ErrorBoundary";
import SEO from "./components/SEO/SEO";
import seo from "./data/seo";

const ServiceAreas = lazy(
  () => import("./components/ServiceAreas/ServiceAreas"),
);
const Projects = lazy(() => import("./components/Projects/Projects"));
const FAQ = lazy(() => import("./components/FAQ/FAQ"));
const QuoteQuiz = lazy(() => import("./components/QuoteQuiz/QuoteQuiz"));

const PrivacyPolicy = lazy(() => import("./pages/PrivacyPolicy"));
const CookiePolicy = lazy(() => import("./pages/CookiePolicy"));
const Disclaimer = lazy(() => import("./pages/Disclaimer"));
const TermsOfService = lazy(() => import("./pages/TermsOfService"));
const NotFound = lazy(() => import("./pages/NotFound"));

function HomePage({ onQuizOpen }) {
  return (
    <>
      <SEO {...seo.home} />

      <Hero onQuizOpen={onQuizOpen} />
      <Benefits />
      <Reviews />
      <BundleDiscount />
      <PopularAddons onQuizOpen={onQuizOpen} />
      <Offer />
      <Steps />

      <Suspense fallback={null}>
        <ServiceAreas />
        <About />
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
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Suspense>
      </ErrorBoundary>

      <Footer />

      <Suspense fallback={null}>
        <QuoteQuiz isOpen={isQuizOpen} onClose={closeQuiz} />
      </Suspense>
    </>
  );
}

export default App;
