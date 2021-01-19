// Imports
// React Imports
import React from 'react';
// Material UI Imports
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { IconButton } from '@material-ui/core';
import DescriptionIcon from '@material-ui/icons/Description';

// Styling for Header Component
const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    titleButton: {
        marginRight: theme.spacing(0),
    },
    title: {
        flexGrow: 1,
    },
}));

// Header component
export default function Header() {
    // use Styles const
    const classes = useStyles();
    // component return
    return (
        <div className={classes.root}>
            <AppBar position="static" elevation={0} style={{ background: 'none', border: 'none' }}>
                <Toolbar>
                    <IconButton edge="start" className={classes.titleButton} color="inherit" aria-label="timer">
                        <DescriptionIcon style={{ fontSize: 30 }} />
                    </IconButton>
                    <Typography variant="h6" className={classes.title}>
                        Multi-Step Form
                    </Typography>
                </Toolbar>
            </AppBar>
        </div>
    );
}