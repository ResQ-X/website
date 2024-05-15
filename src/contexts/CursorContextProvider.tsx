import React, { createContext, useEffect, useState } from "react";

// Interface
interface ICursorContextProviderProps {
  children: React.ReactNode;
}

export const CursorContext = createContext({
  cursorVariants: {
    default: {
      x: 0,
      y: 0,
      backgroundColor: "",
    },
  },
});

function CursorContextProvider({ children }: ICursorContextProviderProps) {
  // Functions, States and Variables
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });

  //   UseEffects
  useEffect(() => {
    const updateCursorPosition = (e: MouseEvent) => {
      console.log({ x: e.clientX, y: e.clientY });
      setCursorPosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", updateCursorPosition);

    // Clean up
    return () => {
      window.removeEventListener("mousemove", updateCursorPosition);
    };
  }, []);

  //   Cursor Variants
  const cursorVariants = {
    default: {
      x: cursorPosition.x - 16,
      y: cursorPosition.y - 16,
      backgroundColor: "#000000",
    },
  };

  return (
    <CursorContext.Provider value={{ cursorVariants: cursorVariants }}>
      {children}
    </CursorContext.Provider>
  );
}

export default CursorContextProvider;
