/* eslint-disable @typescript-eslint/no-explicit-any */
import { createContext, useContext } from "react";
import "./App.css";
import { ThemeContext, ThemeProvider } from "./context/ThemeProvider";
import MainScreen from "./screens/MainScreen";

import { createGlobalStyle } from "styled-components";

export const TransitionContext = createContext({ status: "" });

function App() {
  const { theme } = useContext(ThemeContext);
  return (
    <>
      <ThemeProvider>
        <GlobalStyles theme={theme} />
        <MainScreen />
      </ThemeProvider>
    </>
  );
}

export const GlobalStyles = createGlobalStyle`
  html,
  body {
    box-sizing: border-box;
    -webkit-font-smoothing: antialiased;
  	-moz-osx-font-smoothing: grayscale;
    font-family: "Gotham","ヒラギノ角ゴ Pro W3", "Hiragino Kaku Gothic Pro",
    "Hiragino Sans", "Osaka", "メイリオ", "Meiryo", "Segoe UI", "sans-serif";
    background: ${(props: any) =>
      props.theme === "light" ? "rgb(17, 17,17)" : "rgb(250, 250, 250)"};
    color: ${(props: any) =>
      props.theme === "light"
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
