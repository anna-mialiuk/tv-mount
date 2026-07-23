function ArticleList({ items }) {
  return (
    <ul className="blog-article__list">
      {items.map((item, index) => (
        <li
          className="blog-article__list-item p"
          key={item.key ?? `${index}-${item.title ?? item.text}`}
        >
          <p>
            {item.title && <strong>{item.title}</strong>}
            {item.title && item.text ? " " : null}
            {item.text}
          </p>
        </li>
      ))}
    </ul>
  );
}

export default ArticleList;
