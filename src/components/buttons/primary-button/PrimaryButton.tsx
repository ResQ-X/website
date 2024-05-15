import React from "react";
import "./PrimaryButton.css";
import { motion } from "framer-motion";

// Interfaces
interface IProps {
  className?: string;
  placeholder: string;
  withArrow?: boolean;
  isActionLoading?: boolean;
  disabled?: boolean;
  onClick: React.MouseEventHandler<HTMLButtonElement> | undefined;
}
function PrimaryButton({
  className,
  placeholder,
  disabled = false,
  onClick,
}: IProps) {
  return (
    <motion.div
      whileHover={{ y: -4 }}
      className={`primary-button-wrapper ${className}`}
    >
      <button disabled={disabled} onClick={onClick}>
        {placeholder}
      </button>
    </motion.div>
  );
}

export default PrimaryButton;
