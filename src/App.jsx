import { lazy, Suspense, useState } from "react";
import { Route, Routes } from "react-router-dom";

import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import Benefits from "./components/Benefits/Benefits";

import DeferredSection from "./components/DeferredSection/DeferredSection";
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
const Footer = lazy(() => import("./components/Footer/Footer"));
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

      {/* Benefits близько до першого екрана — залишаємо одразу */}
      <Benefits />

      <DeferredSection rootMargin="1000px 0px">
        <Suspense fallback={null}>
          <Reviews />
        </Suspense>
      </DeferredSection>

      <DeferredSection>
        <Suspense fallback={null}>
          <BundleDiscount onQuizOpen={onQuizOpen} />
        </Suspense>
      </DeferredSection>

      <DeferredSection>
        <Suspense fallback={null}>
          <PopularAddons onQuizOpen={onQuizOpen} />
        </Suspense>
      </DeferredSection>

      <DeferredSection>
        <Suspense fallback={null}>
          <MountingStyles onQuizOpen={onQuizOpen} />
        </Suspense>
      </DeferredSection>

      <DeferredSection>
        <Suspense fallback={null}>
          <Offer />
        </Suspense>
      </DeferredSection>

      <DeferredSection>
        <Suspense fallback={null}>
          <Steps />
        </Suspense>
      </DeferredSection>

      <DeferredSection>
        <Suspense fallback={null}>
          <ServiceAreas />
        </Suspense>
      </DeferredSection>

      <DeferredSection>
        <Suspense fallback={null}>
          <Projects />
        </Suspense>
      </DeferredSection>

      <DeferredSection>
        <Suspense fallback={null}>
          <BookingCTA />
        </Suspense>
      </DeferredSection>

      <DeferredSection>
        <Suspense fallback={null}>
          <FAQ />
        </Suspense>
      </DeferredSection>
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

      <Suspense fallback={null}>
        <Footer />
      </Suspense>

      {isQuizOpen && (
        <Suspense fallback={null}>
          <QuoteQuiz isOpen={isQuizOpen} onClose={closeQuiz} />
        </Suspense>
      )}
    </>
  );
}

export default App;
