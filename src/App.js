/**
 * @author Olawale
 * @email olawale.akinodanye@gmail.com
 * @create date 2021-01-29 12:24:55
 * @modify date 2021-02-03 17:49:32
 * @desc [description]
 */
import React, { useState } from "react";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import PageMain from "./components/Main";
import PageFooter from "./components/Footer";
import PagePackage from "./components/Packages";
import PageCustomer from "./components/Customers";
import MobileNav from "./components/MobileNav";
import Backdrop from "./components/Backdrop";
import Modal from "./components/Modal";

function App() {
  const [isOpen, setIsOpen] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);
  const [showBackdrop, setShowBackdrop] = useState(false);

  return (
    <Router>
      <MobileNav isOpen={isOpen} />
      <Navbar
        isOpen={isOpen}
        setIsOpen={setIsOpen}
        showBackdrop={showBackdrop}
        setShowBackdrop={setShowBackdrop}
      />
      <Backdrop
        showBackdrop={showBackdrop}
        setShowBackdrop={setShowBackdrop}
        setModalOpen={setModalOpen}
        setIsOpen={setIsOpen}
      />
      <Modal
        modalOpen={modalOpen}
        setModalOpen={setModalOpen}
        showBackdrop={showBackdrop}
        setShowBackdrop={setShowBackdrop}
      />
      <Switch>
        <Route path="/packages" component={PagePackage} />
        <Route path="/customers" component={PageCustomer} />
        <Route
          path="/"
          render={(props) => (
            <PageMain
              {...props}
              modalOpen={modalOpen}
              setModalOpen={setModalOpen}
              setShowBackdrop={setShowBackdrop}
            />
          )}
        />
      </Switch>
      <PageFooter />
    </Router>
  );
}

export default App;
