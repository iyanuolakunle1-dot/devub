const Button = ({
  children,
  variant = "primary",
  onClick,
  className = "",
  type = "button",
  disabled = false,
}) => {
  const base =
    "inline-flex items-center gap-2 px-5 py-2.5 rounded-full font-semibold text-sm transition-all duration-200 disabled:opacity-50";

  const variants = {
    primary: "bg-brand hover:bg-brand-dark text-white shadow-sm hover:shadow-md",
    outline: "border border-gray-300 hover:border-brand text-gray-800 hover:text-brand bg-white",
    dark: "bg-white text-gray-900 hover:bg-gray-100 font-semibold",
  };

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`${base} ${variants[variant] ?? variants.primary} ${className}`}
    >
      {children}
    </button>
  );
};

export default Button;
