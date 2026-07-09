import { Link } from "react-router-dom";
import SEO from "../components/SEO/SEO";
import seo from "../data/seo";

import "./NotFound.sass";

function NotFound() {
  return (
    <>
      <SEO {...seo.notFound} />
      <main className="not-found">
        <div className="not-found__container container">
          <p className="not-found__code p">404</p>
          <h1 className="not-found__title h1">
            Oops! This page doesn't exist.
          </h1>
          <p className="not-found__text p">
            The page you are looking for may have been moved, deleted or you
            entered the wrong address.
          </p>
          <div className="not-found__actions">
            <Link to="/" className="button">
              ← Back Home
            </Link>
          </div>
        </div>
      </main>
    </>
  );
}

export default NotFound;
