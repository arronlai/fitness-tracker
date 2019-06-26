import React from 'react';
import Button from '@material-ui/core/Button';
import './Home.scss';

const Home = () => {
    return (
        <div>
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
    )
};
export default Home;