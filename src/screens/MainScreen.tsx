import { useRef } from "react";
import Home from "./Home";

const disciplines = ["Engineer", "ML Enthusiast", "Cloud Dev", "Coder"];

const MainScreen = () => {
  const intro = useRef();
  return (
    <>
      <Home id="intro" sectionRef={intro} disciplines={disciplines} scrollIndicatorHidden={false}/>
    </>
  );
};

export default MainScreen;
