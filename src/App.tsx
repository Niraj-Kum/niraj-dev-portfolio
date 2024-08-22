import "./App.css";
import { ThemeProvider } from "./context/ThemeProvider";
import MainScreen from "./screens/MainScreen";

function App() {
  return (
    <>
      <ThemeProvider>
        <MainScreen />
      </ThemeProvider>
    </>
  );
}

export default App;
