import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import React, {Suspense, lazy} from 'react';
import './App.scss';
import {withStyles} from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

const styles = theme => ({
    button: {
        margin: theme.spacing.unit
    },
    input: {
        display: 'none'
    }
});
const Food = lazy(() => import ('./food/Food'));
const Sport = lazy(() => import ('./sport/Sport'));

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
                    </Switch>
                </Suspense>
            </Router>
            <div>
                <h1>Welcome to FT</h1>
            </div>
            <div className="nav">
                <Button variant="outlined" color="primary" className={'router-btn'}>
                    <a href="/food">Record food</a>
                </Button>
                <Button variant="outlined" color="secondary" className={'router-btn'}>
                    <a href="/sport">Record sports</a>
                </Button>
            </div>
        </div>
    );
}

export default App;
