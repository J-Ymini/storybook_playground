import React from "react";
import "./Input.css";

interface InputProps {
  size?: string;
  placeholder?: string;
}

const Input = ({ size = "medium", ...rest }: InputProps) => {
  return <input className={`size ${size}`} {...rest} />;
};

export default Input;
