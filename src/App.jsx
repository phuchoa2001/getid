import './reset-css.css';
import './global.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import React, { Suspense, lazy } from 'react';
import MainLayout from './layout/MainLayout';
import Loading from './components/Loading';

const Home = lazy(() => import('./pages/Home'));
const Add = lazy(() => import('./pages/Add'));
const Guide = lazy(() => import('./pages/Guide'));

function App() {
  return (
    <Router>
      <MainLayout>
        <Suspense fallback={<Loading />}>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/add" component={Add} />
            <Route path="/guide" component={Guide} />
          </Switch>
        </Suspense>
      </MainLayout>
    </Router>
  );
}

export default App;
