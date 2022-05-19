
import Styles from './App.module.css';
import './resetcss.css';
import './Global.css'
import Header from './containers/header';
import Footer from './containers/footer';
import Main from './containers/main';
import {
  BrowserRouter as Router,
} from "react-router-dom";

function App() {
  return (
    <Router>
      <div className={Styles.Gird}>
        <Header />
        <Main />
        <Footer />
      </div>
    </Router>
  );
}

export default App;
