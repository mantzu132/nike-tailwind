const Button = ({ label, iconURL, variant }) => {
  const baseClasses =
    "flex justify-center items-center gap-2 px-7 py-4 border font-montserrat text-lg leading-none rounded-full";
  const variants = {
    primary: "bg-coral-red text-white border-coral-red",
    secondary: "bg-transparent text-coral-red border-coral-red",
  };

  const variantClasses = variants[variant] || variants["primary"]; // Default to primary if no or invalid variant is provided

  return (
    <button className={`${baseClasses} ${variantClasses}`}>
      {label}
      {iconURL && (
        <img
          src={iconURL}
          alt="arrow right icon"
          className="ml-2 rounded-full w-5 h-5"
        />
      )}
    </button>
  );
};
export default Button;
