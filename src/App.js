import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import React, {Suspense, lazy} from 'react';
import './App.scss';

const styles = theme => ({
    button: {
        margin: theme.spacing.unit
    },
    input: {
        display: 'none'
    }
});
const Food = lazy(() => import('./food/Food'));
const Sport = lazy(() => import('./sport/Sport'));
const Home = lazy(() => import('./home/Home'));

function App() {
    return (
        <div>
            <link
                rel="stylesheet"
                href="https://fonts.googleapis.com/css?family=Roboto:300,400,500"/>
            <link
                rel="stylesheet"
                href="https://fonts.googleapis.com/icon?family=Material+Icons"/>
            <Router>
                <Suspense fallback={< div > Loading ...</div>}>
                    <Switch>
                        <Route path="/food" component={Food}></Route>
                        <Route path="/sport" component={Sport}></Route>
                        <Route path="/" component={Home}></Route>
                    </Switch>
                </Suspense>
            </Router>
        </div>
    );
}

export default App;
