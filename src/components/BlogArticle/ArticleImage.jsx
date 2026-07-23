function ArticleImage({ src, alt, hero = false, className = "" }) {
  const baseClass = hero
    ? "blog-article__hero-image"
    : "blog-article__section-image";
  const classes = [baseClass, className].filter(Boolean).join(" ");

  return (
    <img
      className={classes}
      src={src}
      alt={alt}
      loading={hero ? "eager" : "lazy"}
      decoding="async"
    />
  );
}

export default ArticleImage;
