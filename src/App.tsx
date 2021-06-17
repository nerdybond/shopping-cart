import {useState} from 'react'
import {useQuery} from 'react-query'
import React from 'react';
import {BrowserRouter as Router, Switch, Route, Link} from "react-router-dom";

//TypeScript Components - necessary for the shopping cart build
import Cart from './Cart/Cart';
import Item from './Item/Item'
import Grid from '@material-ui/core/Grid';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import Badge from '@material-ui/core/Badge';
import Box from '@material-ui/core/Box';
import PropTypes from 'prop-types';

//TypeScript Styling Components - used for developing the cart's UI
import {Wrapper, StyledButton} from './App.styles';
import { Typography } from '@material-ui/core';
import CircularProgress from '@material-ui/core/CircularProgress';
import {Drawer} from '@material-ui/core';
import ButtonAppBar from './AppBar';

//Page Structure - TO-DO: Needs to have pages routed correctly
// import Confirmation from './Confirmation/Confirmation';
// // TO-DO: IMPORT CART FROM CART.
// import Checkout from './Checkout/Checkout';



//To-Do : Change id to String.
export type CartItemType = {
 image: string;
 title: string;
 id: number;
 name: string;
 category: string;
 price: number;
 bgColor: string;
 amount: number;
}


//TO-DO : Convert this to contact the local json file.
const getProducts = async (): Promise<CartItemType[]> => 
await (await fetch('https://fakestoreapi.com/products')).json();


const App = () => {

  const [cartOpen, setCartOpen] = useState(false);

  const [cartItems, setCartItems] = useState([] as CartItemType[]);
   
    const {data, isLoading, error} = useQuery<CartItemType[]>(
      'products', getProducts);

    // Useful in debugging if local json/API isn't showing products list.
    // console.log(data);

    const getTotalItems = (items: CartItemType[]) => 
    items.reduce((ack: number, items) => ack + items.amount, 0);
    
    //Function that handles items added to cart.
    const handleAddToCart = (clickedItem: CartItemType) => {
      setCartItems(prev => {
        //Condition 1 - What if the item is already in the cart? 
        // Note- This currently does not increment individual items. However, this can be built in using this function.
        const isItemInCart = prev.find(item => item.id === clickedItem.id)
        if (isItemInCart){
          return prev.map(item =>
            item.id === clickedItem.id 
            ?{...item, amount: item.amount}
            : item
          );
        }
// Condition 2 - First time item is added to Cart.
return [...prev, {...clickedItem, amount: 1}];
      });
    };

    // TO-DO: Currently 'remove from cart', removes 1 item amount rather than all amounts. 
    const handleRemoveFromCart = (id:number) => 
    setCartItems(prev =>
      prev.reduce((ack, item) => {
        if (item.id === id) {
          if (item.amount === 1) return ack;
          return [...ack, { ...item, amount: item.amount - 1}];
        } else {
          return [...ack, item];
        }
      }, [] as CartItemType[])
    );


// Currently fixed to the top left of the screen.
// TO-DO: Center it in the middle of the screen, and make changes to display percentage loaded.
    function CircularProgressWithLabel(props: any) {
      return (
        <Box position="relative" display="inline">
          <CircularProgress variant="determinate" {...props} />
          <Box
            top={0}
            left={0}
            bottom={0}
            right={0}
            position="absolute"
            display="flex"
            alignItems="center"
            justifyContent="center"
          >    
          </Box>
        </Box>
      );
    }
      
  if (isLoading) return <CircularProgress/>;

  if (error) return <div>Something went wrong</div>;

    return  (

      
      //Will make Drawer into 'Item added to cart. And will move drawer code to new page.'
    <Wrapper>
      <Drawer anchor = 'bottom' open = {cartOpen} onClose={() => setCartOpen(false)}>
        <Cart 
        cartItems={cartItems} 
        addToCart={handleAddToCart}
        removeFromCart = {handleRemoveFromCart}/>
        </Drawer>
        <ButtonAppBar />
        <StyledButton onClick={() => setCartOpen(true)}>
        <Badge badgeContent={getTotalItems(cartItems)} color='error'>
        </Badge>
      </StyledButton>

        

      <h2>Products</h2>

      <p>This is where the filters will be going.</p>      
      <Grid container spacing = {3}>
        {data?.map(item => (
          <Grid item key = {item.id} xs = {12} sm={6} md={4} lg={3}>

            <Item item = {item} handleAddToCart = {handleAddToCart}/>
          </Grid>
          
        )) }
        </Grid>
        
    </Wrapper>
    )
};


export default App;
