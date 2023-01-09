//styles
import "./ThemeSelector.css";
import modeIcon from "../assets/mode-icon.svg";

import { useTheme } from "../hooks/useContext";

export default function ThemeSelector() {
  const { changeColor, changeMode, mode } = useTheme();

  const themeColors = ["#58249c", "#249c6b", "#b70233"];

  const toggleMode = () => {
    mode === "dark" ? changeMode("light") : changeMode("dark");
  };

  console.log(mode);

  return (
    <div className="theme-selector">
      <div className="mode-toggle">
        <img
          src={modeIcon}
          onClick={toggleMode}
          alt="dark/light toggle icon"
          style={{ filter: mode === "dark" ? "invert(100%)" : "invert(20%)" }}
        />
      </div>
      <div className="theme-buttons">
        {themeColors.map((color) => (
          <div
            key={color}
            onClick={() => changeColor(color)}
            style={{ background: color }}
          />
        ))}
      </div>
    </div>
  );
}
