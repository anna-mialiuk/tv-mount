import { useMemo, useState } from "react";
import BlogCard from "./BlogCard";
import { blogArticles, blogCategories } from "../../data/blog";
import "./Blog.sass";

function Blog() {
  const [activeCategory, setActiveCategory] = useState("All Articles");
  const [currentPage, setCurrentPage] = useState(1);

  const articlesPerPage = 9;

  const filteredArticles = useMemo(() => {
    if (activeCategory === "All Articles") {
      return blogArticles;
    }

    return blogArticles.filter(
      (article) => article.category === activeCategory,
    );
  }, [activeCategory]);

  const totalPages = Math.ceil(filteredArticles.length / articlesPerPage);

  const visibleArticles = filteredArticles.slice(
    (currentPage - 1) * articlesPerPage,
    currentPage * articlesPerPage,
  );

  const handleCategoryChange = (category) => {
    setActiveCategory(category);
    setCurrentPage(1);
  };

  return (
    <main className="blog">
      <div className="blog__container container">
        <h1 className="blog__title h1">Blog</h1>

        <div className="blog__categories">
          {blogCategories.map((category) => (
            <button
              key={category}
              className={`blog__category ${
                activeCategory === category ? "blog__category--active" : ""
              }`}
              type="button"
              onClick={() => handleCategoryChange(category)}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="blog__grid">
          {visibleArticles.map((article, index) => (
            <BlogCard
              key={article.id}
              article={article}
              featured={index === 0 && currentPage === 1}
            />
          ))}
        </div>

        {totalPages > 1 && (
          <div className="blog__pagination">
            {Array.from({ length: totalPages }, (_, index) => {
              const page = index + 1;

              return (
                <button
                  key={page}
                  className={`blog__page ${
                    currentPage === page ? "blog__page--active" : ""
                  }`}
                  type="button"
                  onClick={() => setCurrentPage(page)}
                >
                  {page}
                </button>
              );
            })}

            {currentPage < totalPages && (
              <button
                className="blog__next"
                type="button"
                onClick={() => setCurrentPage((page) => page + 1)}
              >
                <span className="blog__next-text">Next Page</span>
                <img
                  className="blog__next-icon"
                  src="/icons/orange-arrow.svg"
                  alt=""
                  aria-hidden="true"
                />
              </button>
            )}
          </div>
        )}
      </div>
    </main>
  );
}

export default Blog;
