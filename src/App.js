import logo from "./logo.svg";
import "./App.css";
import Home from "./home/Home";
import Navbar from "./components/Navbar/Navbar";

function App() {
  return (
    <div className="App">
      <Navbar />

      <Home />
    </div>
  );
}

export default App;
