import './reset-css.css';
import './global.css'
import {
  BrowserRouter as Router,
  Switch, Route
} from "react-router-dom";
import MainLayout from './layout/MainLayout';
import Home from './pages/Home';
import Add from './pages/Add';
import Guide from './pages/Guide';

function App() {
  return (
    <Router>
      <MainLayout>
        <Switch>
          <Route exact path="/" component={() => <Home />} />
          <Route path="/add" component={() => <Add />} />
          <Route path="/guide" component={() => <Guide />} />
        </Switch>
      </MainLayout>
    </Router>
  );
}

export default App;
