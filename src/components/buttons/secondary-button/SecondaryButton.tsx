import React from "react";
import "./SecondaryButton.css";

// Interfaces
interface IProps {
  className?: string;
  placeholder: string;
  disabled?: boolean;
  onClick: React.MouseEventHandler<HTMLButtonElement> | undefined;
}
function SecondaryButton({
  className,
  placeholder,
  disabled = false,
  onClick,
}: IProps) {
  return (
    <div className={`secondary-button-wrapper ${className}`}>
      <button disabled={disabled} onClick={onClick}>
        {placeholder}
      </button>
    </div>
  );
}

export default SecondaryButton;
