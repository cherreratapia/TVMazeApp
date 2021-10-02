import { useContext } from "react";
import ThemeContext from "../../Root/Theme/ThemeContext";

export default function useColor() {
  const { color } = useContext(ThemeContext);
  return color;
}
