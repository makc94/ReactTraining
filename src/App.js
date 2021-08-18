import All from "./Components/All";
import About from "./Components/About";
import Error from "./Components/Error";
import { BrowserRouter, Link, Switch, Route, Redirect } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <div className="navbar">
        <div className="navbar__links">
          <Link to="/about">About</Link>
          <Link to="/posts">Posts</Link>
        </div>
      </div>
      <Switch>
        <Route path="/about">
          <About />
        </Route>
        <Route path="/posts">
          <All />
        </Route>
        <Route path="/error">
          <Error />
        </Route>
        <Redirect to="/error" />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
