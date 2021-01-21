import Navbar from "./components/Navbar";
import { BrowserRouter as Router } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <Router>
      <Navbar />
      <main>
        <p>The Meat of the Page</p>
      </main>
    </Router>
  );
}

export default App;
