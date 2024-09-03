/* eslint-disable @typescript-eslint/no-explicit-any */
import { createContext, useEffect, useReducer } from "react";
import "./App.css";
import MainScreen from "./screens/MainScreen";

import { createGlobalStyle } from "styled-components";
import useLocalStorage from "./hooks/useLocalStorage";
import { initialState, reducer } from "./reducer/ThemeReducer";
import { usePrefersReducedMotion } from "./hooks/usePrefersReducedMotion";
import { theme } from "./utils/theme";
import { config as transitionConfig } from "react-transition-group";
import { ThemeProvider } from "@mui/material";
import { ThemeToggle } from "./components/theme-toggle/ThemeToggle";
import Navbar from "./screens/Navbar";

// Create contexts with initial types
export const AppContext = createContext<any>(undefined);

function App() {
  const [storedTheme] = useLocalStorage("theme", "dark");
  const [state, dispatch] = useReducer(reducer, initialState);
  const prefersReducedMotion = usePrefersReducedMotion();
  const { currentTheme } = state;

  useEffect(() => {
    if (prefersReducedMotion) {
      transitionConfig.disabled = true;
    } else {
      transitionConfig.disabled = false;
    }
  }, [prefersReducedMotion]);

  useEffect(() => {
    window.history.scrollRestoration = "manual";
  }, []);

  useEffect(() => {
    window.localStorage.setItem("theme", JSON.stringify(storedTheme));
    dispatch({ type: "setTheme", value: theme[storedTheme] });
  }, [storedTheme]);
  return (
    <>
      <ThemeProvider theme={currentTheme}>
        <AppContext.Provider value={{ ...state, dispatch }}>
          <ThemeToggle />
          <GlobalStyles theme={currentTheme} />
          <Navbar />
          <MainScreen />
        </AppContext.Provider>
      </ThemeProvider>
    </>
  );
}

const GlobalStyles = createGlobalStyle`
  html,
  body {
    box-sizing: border-box;
    -webkit-font-smoothing: antialiased;
  	-moz-osx-font-smoothing: grayscale;
    font-family: "Gotham","ヒラギノ角ゴ Pro W3", "Hiragino Kaku Gothic Pro",
    "Hiragino Sans", "Osaka", "メイリオ", "Meiryo", "Segoe UI", "sans-serif";
    background: ${(props: any) =>
      props.theme.palette.mode === "dark"
        ? "rgb(17, 17,17)"
        : "rgb(250, 250, 250)"};
    color: ${(props: any) =>
      props.theme.palette.mode === "dark"
        ? "rgba(255, 255, 255, 1)"
        : "rgba(0, 0, 0, 0.8)"};
    border: 0;
    margin: 0;
    width: 100vw;
    overflow-x: hidden;
    font-weight: 400;
  }
`;

export default App;
