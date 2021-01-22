import Navbar from "./components/Navbar";
import { BrowserRouter as Router } from "react-router-dom";
import "./App.css";
import PageMain from "./components/Main";
import PageFooter from "./components/Footer";

function App() {
  return (
    <Router>
      <Navbar />
      <PageMain />
      <PageFooter />
    </Router>
  );
}

export default App;
