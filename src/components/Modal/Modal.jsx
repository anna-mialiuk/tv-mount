function Modal({
  isOpen,
  onClose,
  children,
  overlayClassName = "modal",
  contentClassName = "modal__content",
}) {
  if (!isOpen) return null;

  return (
    <div
      className={overlayClassName}
      role="dialog"
      aria-modal="true"
      onClick={onClose}
    >
      <div className={contentClassName} onClick={(event) => event.stopPropagation()}>
        {children}
      </div>
    </div>
  );
}

export default Modal;
