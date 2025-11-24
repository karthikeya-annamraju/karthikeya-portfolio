"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

interface ButtonProps {
  children: ReactNode;
  variant?: "primary" | "secondary" | "outline";
  size?: "sm" | "md" | "lg";
  onClick?: () => void;
  href?: string;
  className?: string;
  disabled?: boolean;
}

const Button = ({
  children,
  variant = "primary",
  size = "md",
  onClick,
  href,
  className = "",
  disabled = false,
}: ButtonProps) => {
  const baseStyles = "font-semibold rounded-full transition-all inline-flex items-center justify-center gap-2";
  
  const variantStyles = {
    primary: "bg-gradient-to-r from-sunset-orange to-sunset-coral text-white hover:shadow-xl",
    secondary: "bg-gray-200 text-gray-800 hover:bg-gray-300",
    outline: "border-2 border-sunset-orange text-sunset-orange hover:bg-sunset-orange hover:text-white",
  };
  
  const sizeStyles = {
    sm: "px-4 py-2 text-sm",
    md: "px-6 py-3 text-base",
    lg: "px-8 py-4 text-lg",
  };
  
  const combinedStyles = `${baseStyles} ${variantStyles[variant]} ${sizeStyles[size]} ${className} ${
    disabled ? "opacity-50 cursor-not-allowed" : ""
  }`;

  const MotionComponent = href ? motion.a : motion.button;

  return (
    <MotionComponent
      href={href}
      onClick={disabled ? undefined : onClick}
      whileHover={disabled ? {} : { scale: 1.05 }}
      whileTap={disabled ? {} : { scale: 0.95 }}
      className={combinedStyles}
      disabled={disabled}
    >
      {children}
    </MotionComponent>
  );
};

export default Button;
