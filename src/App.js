import "./App.css";
import Routes from "./components/Routes";

//components
import NavBar from "./components/NavBar/NavBar";
import Footer from "./components/NavBar/Footer";
function App() {
  return (
    <div>
      <NavBar />

      <Routes />

      <Footer />
    </div>
  );
}

export default App;
