import React from 'react';
import './Main.scss';
import { makeStyles } from '@material-ui/core/styles';
import { TextField } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    width: 200,
    display: "block",
  },
  dense: {
    marginTop: 19,
  },
  menu: {
    width: 200,
  },
}));

const Main = () => {
    const classes = useStyles();
    return (
        <div className="Food">
            <form action="">
                <TextField
                    id="fname"
                    label="食物名称"
                    placeholder="输入食物名称……"
                    className={classes.textField}
                    margin="normal"
                />
                <TextField
                    id="famount"
                    label="数量(g)"
                    placeholder="输入食物数量……"
                    className={classes.textField}
                    margin="normal"
                />
            </form>
        </div>
    )
};


export default Main;