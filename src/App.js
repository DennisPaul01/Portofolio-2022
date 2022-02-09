import NavBar from "./components/NavBar/NavBar";
import React, { useEffect } from "react";
import { Route, Switch } from "react-router-dom";
import HomePage from "./Pages/HomePage";
import AboutPage from "./Pages/AboutPage";
import ReactGa from "react-ga";

function App() {
  useEffect(() => {
    ReactGa.initialize("G-C2ECT1HVSN");
    // to report page view
    ReactGa.pageview(window.location.pathname + window.location.search);
  }, []);
  return (
    <>
      <header>
        <NavBar></NavBar>
      </header>
      <main>
        <Switch>
          <Route path="/home" exact>
            <HomePage></HomePage>
          </Route>
          <Route path="/about" exact>
            <AboutPage></AboutPage>
          </Route>
          <Route path="*">
            <HomePage></HomePage>
          </Route>
        </Switch>
      </main>
    </>
  );
}

export default App;
