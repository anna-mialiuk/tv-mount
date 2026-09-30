import { Helmet } from "react-helmet-async";
import { SITE_URL } from "../../data/seo";

const DEFAULT_TITLE = "TV Mount Company | Professional TV Installation";
const DEFAULT_DESCRIPTION =
  "Professional TV mounting and installation services. Fast service, clean setup, hidden wires, and reliable technicians.";
const DEFAULT_URL = `${SITE_URL}/`;
const DEFAULT_IMAGE = `${SITE_URL}/og-image.jpg`;

function SEO({
  title = DEFAULT_TITLE,
  description = DEFAULT_DESCRIPTION,
  url = DEFAULT_URL,
  image = DEFAULT_IMAGE,
}) {
  return (
    <Helmet>
      <title>{title}</title>

      <meta name="description" content={description} />
      <link rel="canonical" href={url} />

      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={url} />
      <meta property="og:type" content="website" />
      <meta property="og:image" content={image} />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />
    </Helmet>
  );
}

export default SEO;
