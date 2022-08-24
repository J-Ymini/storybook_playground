import React from "react";
import "./Button.css";

interface ButtonProps {
  variant?: string;
  children: React.ReactNode;
  onClick?: () => void;
}

const Button = ({ variant = "primary", children, ...rest }: ButtonProps) => {
  return (
    <button className={`button ${variant}`} {...rest}>
      {children}
    </button>
  );
};

export default Button;
