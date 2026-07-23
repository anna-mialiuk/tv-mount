import { lazy, Suspense, useMemo } from "react";
import { Link, useParams } from "react-router-dom";

import { blogArticles } from "../../data/blog";
import SEO from "../../components/SEO/SEO";

import "./BlogArticle.sass";

const articleModules = import.meta.glob("../../content/blog/*/index.jsx");

function BlogArticle() {
  const { slug } = useParams();

  const article = useMemo(() => {
    return blogArticles.find((item) => item.slug === slug);
  }, [slug]);

  const ArticleContent = useMemo(() => {
    if (!slug) {
      return null;
    }

    const articlePath = `../../content/blog/${slug}/index.jsx`;
    const articleLoader = articleModules[articlePath];

    if (!articleLoader) {
      return null;
    }

    return lazy(articleLoader);
  }, [slug]);

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
