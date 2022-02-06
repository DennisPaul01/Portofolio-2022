import NavBar from "./components/NavBar/NavBar";
import { Route, Switch } from "react-router-dom";
import HomePage from "./Pages/HomePage";
import AboutPage from "./Pages/AboutPage";
function App() {
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
