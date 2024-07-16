import styles from "./styles.module.css";

const Button = ({
  children,
  onClick,
  disabled = false,
  className,
  type = "button",
  ...props
}: ButtonProps) => {
  return (
    <button
      className={`${styles.button} ${className}`}
      onClick={onClick}
      disabled={disabled}
      type={type}
      {...props}
    >
      {children}
    </button>
  );
};

interface ButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  disabled?: boolean;
  className?: string;
  type?: "button" | "submit" | "reset" | undefined;
  props?: unknown;
}

export default Button;
