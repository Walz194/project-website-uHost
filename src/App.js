import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import PageMain from "./components/Main";
import PageFooter from "./components/Footer";
import PagePackage from "./components/Packages";
import PageCustomer from "./components/Customers";

function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route path="/packages" component={PagePackage} />
        <Route path="/customers" component={PageCustomer} />
        <Route path="/" component={PageMain} />
      </Switch>
      <PageFooter />
    </Router>
  );
}

export default App;
