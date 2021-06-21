import React from 'react';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
// import {useStyles} from './AppBar.styles';


import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import { Badge } from '@material-ui/core';
import { Link } from 'react-router-dom';
import { StyledButton, Wrapper } from './App.styles';

export default function ButtonAppBar() {
  // const classes = useStyles();

  /* <StyledButton onClick={() => setCartOpen(true)}>
  <Badge badgeContent={getTotalItems(cartItems)} color='error'>
  <ShoppingCartIcon />
</Badge>
</StyledButton>*/



  return (
    <Wrapper>
    <div className='TopBar'>
      <AppBar position="static">
      
        <Toolbar>
          <Typography variant="h6" className='Shop'>
            Shop
          </Typography>

          <IconButton edge="start" 
        className= 'shoppingCart'
         color="default" aria-label="menu">
            <ShoppingCartIcon href = "./Cart/Cart.tsx">
            </ShoppingCartIcon>
          
           

          <Badge>
        </Badge>
          </IconButton>

        </Toolbar>
      </AppBar>
    </div>
    </Wrapper>
  );
}