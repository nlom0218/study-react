import { BrowserRouter as Router, Route, Switch } from "react-router-dom"
import About from "./pages/About"
import Home from "./pages/Home"


function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/"><Home /></Route>
        <Route path="/about"><About /></Route>
        <Route>NotFound</Route>
      </Switch>
    </Router>
  );
}

export default App;
