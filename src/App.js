import "./App.css";
import { useSelector } from "react-redux";

//components
import Routes from "./components/Routes";
import NavBar from "./components/NavBar/NavBar";
import Footer from "./components/NavBar/Footer";
//Styling
import DotLoader from "react-spinners/DotLoader";
import { Body } from "./style";
function App() {
  const loading = useSelector((state) => state.ideas.loading);
  return (
    <div>
      <NavBar />
      {loading ? <DotLoader /> : <Routes />}
      <Body>
        <Footer />
      </Body>
    </div>
  );
}

export default App;
