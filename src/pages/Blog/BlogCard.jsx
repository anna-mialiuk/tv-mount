import { Link } from "react-router-dom";

function BlogCard({ article, featured = false }) {
  return (
    <article className={`blog-card ${featured ? "blog-card--featured" : ""}`}>
      <img
        className="blog-card__image"
        src={article.image}
        alt={article.title}
      />

      <div className="blog-card__content">
        <h2 className="blog-card__title">{article.title}</h2>

        <p className="blog-card__description">{article.description}</p>

        <Link className="blog-card__link" to={`/blog/${article.slug}`}>
          Read more
        </Link>
      </div>
    </article>
  );
}

export default BlogCard;
