function ArticleSection({ title, children, className = "" }) {
  const classes = ["blog-article__section", className]
    .filter(Boolean)
    .join(" ");

  return (
    <section className={classes}>
      <h2 className="blog-article__section-title">{title}</h2>
      {children}
    </section>
  );
}

export default ArticleSection;
