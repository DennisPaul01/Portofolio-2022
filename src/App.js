import React, { useEffect, Suspense } from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import LazySpinner from "./components/UI/LazySpinner";
import ReactGA from "react-ga4";

import NavBar from "./components/NavBar/NavBar";

const HomePage = React.lazy(() => import("./Pages/HomePage"));
const AboutPage = React.lazy(() => import("./Pages/AboutPage"));

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
        <Suspense fallback={<LazySpinner></LazySpinner>}>
          <Switch>
            <Route path="/home" exact>
              <HomePage></HomePage>
            </Route>
            <Route path="/about" exact>
              <AboutPage></AboutPage>
            </Route>
            <Route path="*">
              <Redirect to="/home"></Redirect>
            </Route>
          </Switch>
        </Suspense>
      </main>
    </>
  );
}

export default App;
