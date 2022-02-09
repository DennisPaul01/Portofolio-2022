import NavBar from "./components/NavBar/NavBar";
import React, { useEffect } from "react";
import { Route, Switch } from "react-router-dom";
import HomePage from "./Pages/HomePage";
import AboutPage from "./Pages/AboutPage";
import ReactGA from "react-ga4";

function App() {
  ReactGA.initialize("UA-136464204-2");

  useEffect(() => {
    ReactGA.send({ hitType: "pageview", page: "home" });
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
