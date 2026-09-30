import { lazy, Suspense, useMemo } from "react";
import { Link, useParams } from "react-router-dom";

import { blogArticles } from "../../data/blog";
import SEO from "../../components/SEO/SEO";
import { SITE_URL } from "../../data/seo";

import "./BlogArticle.sass";

const articleModules = import.meta.glob("../../content/blog/*/index.jsx");

// One lazy component per article, created once when the module loads —
// not during render, so React doesn't recreate it on every re-render.
const articleComponents = Object.fromEntries(
  Object.entries(articleModules).map(([path, loader]) => {
    const slug = path.split("/").at(-2);
    return [slug, lazy(loader)];
  }),
);

function BlogArticle() {
  const { slug } = useParams();

  const article = useMemo(() => {
    return blogArticles.find((item) => item.slug === slug);
  }, [slug]);

  const ArticleContent = articleComponents[slug];

  if (!article || !ArticleContent) {
    return (
      <main className="article-not-found">
        <div className="article-not-found__container container">
          <h1 className="article-not-found__title">Article not found</h1>

          <p className="article-not-found__text">
            The requested article does not exist or has been removed.
          </p>

          <Link className="article-not-found__link" to="/blog">
            Back to Blog
          </Link>
        </div>
      </main>
    );
  }

  return (
    <>
      <SEO
        title={`${article.title} | TV Mount Company`}
        description={article.description}
        url={`${SITE_URL}/blog/${article.slug}`}
      />

      <main className="blog-article">
        <article className="blog-article__container container">
          <header className="blog-article__header">
            <h1 className="blog-article__title h1">{article.title}</h1>
          </header>

          <Suspense
            fallback={
              <div className="blog-article__loading">Loading article...</div>
            }
          >
            <ArticleContent />
          </Suspense>
        </article>
      </main>
    </>
  );
}

export default BlogArticle;
