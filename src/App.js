import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import CreateJob from "./CreateJob";
import "./App.css";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/new">
          <CreateJob />
        </Route>
        <Route path="/jobs/:id">TODO</Route>
        <Route path="/">
          <h1>ChunkyCloud</h1>
          <h2 className="blink">Beautiful website coming soon</h2>
          <Link to="/new">Create a new job</Link>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
