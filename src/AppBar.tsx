import React from 'react';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import {useStyles} from './AppBar.styles';


import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import { Badge } from '@material-ui/core';

export default function ButtonAppBar() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static">
      
        <Toolbar>
          <Typography variant="h6" className={classes.title}>
            Shop
          </Typography>

          <IconButton edge="start" 
        className={classes.menuButton}
         color="default" aria-label="menu">
          <ShoppingCartIcon />
          <Badge>
        </Badge>
          </IconButton>


        </Toolbar>
      </AppBar>
    </div>
  );
}