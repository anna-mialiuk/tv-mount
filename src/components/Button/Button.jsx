import "./Button.sass";

const PHONE_HREF = "tel:+14047938283";

function Button({
  children,
  variant = "primary",
  className = "",
  onClick,
  type = "button",
}) {
  const isPhoneButton = variant === "secondary" || variant === "outline";

  if (isPhoneButton) {
    return (
      <a href={PHONE_HREF} className={`button button--${variant} ${className}`}>
        {children}
      </a>
    );
  }

  return (
    <button
      type={type}
      onClick={onClick}
      className={`button button--${variant} ${className}`}
    >
      {children}
    </button>
  );
}

export default Button;
