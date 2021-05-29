import "./App.css";
import { Redirect, Switch, Route } from "react-router-dom";
import NavBar from "./NavBar";
import PageA from "./pageA/PageA";
import PageB from "./pageB/PageB";
import PageC from "./pageC/PageC";
function App() {
  return (
    <>
      <div>
        <NavBar />
        <Switch>
          <Route exact path="/A" component={PageA} />
          <Route exact path="/B" component={PageB} />
          <Route exact path="/C" component={PageA} />
          <Redirect to="/" />
        </Switch>
      </div>
    </>
  );
}

export default App;
