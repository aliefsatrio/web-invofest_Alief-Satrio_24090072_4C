interface ButtonProps {
  title: string;
  type?: "button" | "submit";
  variant?: "primary" | "outline";
  isLoading?: boolean;
}

const Button: React.FC<ButtonProps> = ({
  title,
  type = "button",
  variant = "primary",
  isLoading = false,
}) => {
  const base = "px-4 py-2 rounded font-medium w-full transition";

  const styles = {
    primary: "bg-blue-600 text-white hover:bg-blue-700",
    outline: "border border-blue-600 text-blue-600 hover:bg-blue-50",
  };

  return (
    <button
      type={type}
      disabled={isLoading}
      className={`${base} ${styles[variant]}`}
    >
      {isLoading ? "Loading..." : title}
    </button>
  );
};

export default Button;