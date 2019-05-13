import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import React, {Suspense, lazy} from 'react';
import logo from './logo.svg';
import './App.scss';

const Main = lazy(() => import('./main/Main'));

function App() {
  return (
    <div>
      <Router>
        <Suspense fallback={<div>Loading...</div>}>
          <Switch>
            <Route path="/main" component={Main}></Route>
          </Switch>
        </Suspense>
      </Router>
      <a href="main">hahaha</a>
    </div>
  );
}

export default App;
