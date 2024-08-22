import { createContext, ReactNode, useEffect, useRef, useState } from "react";
import { DarkTheme, LightTheme } from "../utils/Theme/Theme";
import { ThemeProvider as MuiThemeProvider } from "@mui/material/styles";

interface IProps {
  children?: ReactNode;
}

export const ThemeContext = createContext({
  theme: "dark",
  toggleTheme: () => {},
});

export const ThemeProvider = (props: IProps) => {
  const ref = useRef(null);

  const getPrefColorScheme = () => {
    if (!window.matchMedia) return;

    return window.matchMedia("(prefers-color-scheme: dark)").matches;
  };
  const getInitialMode = () => {
    if (typeof localStorage === "undefined") return true;
    const isReturningUser = "dark" in localStorage;
    const savedMode = JSON.parse(localStorage.getItem("dark") || "false");
    const userPrefersDark = getPrefColorScheme();
    if (isReturningUser) {
      return savedMode;
    }
    return !!userPrefersDark;
  };

  const [theme, setTheme] = useState(getInitialMode() ? "dark" : "light");

  const toggleTheme = () => {
    if (theme === "light") {
      setTheme("dark");
    } else {
      setTheme("light");
    }
  };

  useEffect(() => {
    if (typeof localStorage !== "undefined") {
      localStorage.setItem("dark", JSON.stringify(theme === "dark"));
    }
  }, [theme]);

  return (
    <ThemeContext.Provider
      value={{
        theme,
        toggleTheme,
      }}
    >
      <MuiThemeProvider theme={theme === "light" ? LightTheme : DarkTheme}>
        <div ref={ref}>{props.children}</div>
      </MuiThemeProvider>
    </ThemeContext.Provider>
  );
};
