import {useState} from 'react'
import {useQuery} from 'react-query'
import React from 'react';
import {BrowserRouter as Router, Switch, Route, Link} from "react-router-dom";
import Data from './products.json';


//TypeScript Components - necessary for the shopping cart build
import Checkout from './Checkout/Checkout';
import Confirmation from './Confirmation/Confirmation';
import Home from './Home/Home';
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



//TO-DO : Convert this to contact the local json file. Either with .map OR
// via an external RESTful API.

const getProducts = async (): Promise<CartItemType[]> => 
await (await fetch('https://fakestoreapi.com/products')).json();

    // TO-DO: Currently 'remove from cart', removes 1 item amount rather than all amounts. 
   

const App = () => {

const [cartOpen, setCartOpen] = useState(false);

const [cartItems, setCartItems] = useState([] as CartItemType[]);
   

    // Useful in debugging if local json/API isn't showing products list.
    // console.log(data);

    const getTotalItems = (items: CartItemType[]) => 
    items.reduce((ack: number, items) => ack + items.amount, 0);


    //Function that handles items added to cart.
      const handleAddToCart = (clickedItem: CartItemType) => {
        setCartItems((prev: any[]) => {
          //Condition 1 - What if the item is already in the cart? 
          // Note- This currently does not increment individual items. However, this can be built in using this function.
          const isItemInCart = prev.find((item: { id: number; }) => item.id === clickedItem.id)
          if (isItemInCart){
            return prev.map((item: { id: number; amount: any; }) =>
              item.id === clickedItem.id 
              ?{...item, amount: item.amount}
              : item
            );
          }
  // Condition 2 - First time item is added to Cart.
  return [...prev, {...clickedItem, amount: 1}];
        });
      };



  const {data, isLoading, error} = useQuery<CartItemType[]>(
  'products', getProducts);

   const handleRemoveFromCart = (id:number) => 
  setCartItems((prev: any[]) =>
    prev.reduce((ack: any, item: { id: number; amount: number; }) => {
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

      <Router>
      <Switch>
        <Route exact path = "/"><Home/>
  <Wrapper>
  <Grid container spacing = {3}>
        {data?.map((getProducts => (
          <Grid item key = {Item.id} xs = {12} sm={6} md={4} lg={3}>
            <Item item = {Item} handleAddToCart = {handleAddToCart}/>
          </Grid>
        ))) }
        </Grid>
      </Wrapper>
        </Route>
        <Route path = "/Checkout"><Checkout/></Route>
        <Route path = "/Confirmation"><Confirmation/></Route>
      </Switch>

    <ButtonAppBar/>
    </Router>
    )
};

export default App;
