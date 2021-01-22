import Navbar from "./components/Navbar";
import { BrowserRouter as Router } from "react-router-dom";
import "./App.css";
import PageMain from "./components/Main";

function App() {
  return (
    <Router>
      <Navbar />
      <PageMain />
    </Router>
  );
}

export default App;
