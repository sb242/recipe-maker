import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";

export const useTheme = function () {
  const context = useContext(ThemeContext);

  if (context === undefined) {
    throw new Error("useTheme() must be used inside of a ThemeProvider");
  }

  return context;
};
