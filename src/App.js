import "./App.css";
import { useSelector } from "react-redux";
import { useState } from "react";

//components
import Routes from "./components/Routes";
import NavBar from "./components/NavBar/NavBar";
import Footer from "./components/NavBar/Footer";
//Styling
import DotLoader from "react-spinners/DotLoader";
import { Body, GlobalStyle, ThemeButton, theme } from "./style";
import { ThemeProvider } from "styled-components";
import Switch from "@material-ui/core/Switch";

function App() {
  const [currentTheme, setCurrentTheme] = useState("light");
  const ToggleCurrentTheme = () => {
    if (currentTheme === "light") {
      setCurrentTheme("dark");
    } else setCurrentTheme("light");
  };

  const loading = useSelector((state) => state.ideas.loading);
  return (
    <ThemeProvider theme={theme[currentTheme]}>
      <GlobalStyle />

      <Switch onClick={ToggleCurrentTheme} color="primary" name="checkedB" />
      <label> {currentTheme === "light" ? "Dark Mode" : "Light Mode"}</label>
      <NavBar />
      {loading ? <DotLoader /> : <Routes />}
      <Body>
        <Footer />
      </Body>
    </ThemeProvider>
  );
}

export default App;
