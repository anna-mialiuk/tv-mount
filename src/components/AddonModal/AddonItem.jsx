function AddonItem({ item }) {
  const isString = typeof item === "string";

  return (
    <li className="addon-modal__item p">
      {isString ? (
        item
      ) : (
        <>
          <strong className="addon-modal__item-title">{item.title}:</strong>{" "}
          {item.text}
        </>
      )}
    </li>
  );
}

export default AddonItem;
