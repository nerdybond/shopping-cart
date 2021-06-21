import {useState} from 'react'
import {useQuery} from 'react-query'
import {BrowserRouter as Router, Switch, Route, Link} from "react-router-dom";

//TypeScript Components - necessary for the shopping cart build
import Checkout from './Checkout/Checkout';
import Confirmation from './Confirmation/Confirmation';
import Home from './Home/Home';
import Item from './Item/Item'
import Grid from '@material-ui/core/Grid';
import PropTypes from 'prop-types';
import CartItem from './CartItem/CartItem';
import { Box, Button, Drawer } from '@material-ui/core';

//TypeScript Styling Components - used for developing the cart's UI
import {Wrapper, StyledButton} from './App.styles';
import CircularProgress from '@material-ui/core/CircularProgress';
import ButtonAppBar from './AppBar';

//Page Structure - TO-DO: Needs to have pages routed correctly
// import Confirmation from './Confirmation/Confirmation';
// // TO-DO: IMPORT CART FROM CART.
// import Checkout from './Checkout/Checkout';


export type CartItemType = {
  id: number;
  category: string;
  description: string;
  image: string;
  price: number;
  title: string;
  amount: number;
}




// TO-DO: Currently 'remove from cart', removes 1 item amount rather than all amounts. Confirm with WB if this is what they want. 
const App = () => {
  
  const getProducts = async (): Promise<CartItemType[]> =>
  await (await fetch('https://fakestoreapi.com/products')).json();
  
  
  const [cartOpen, setCartOpen] = useState(false);
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [cartItems, setCartItems] = useState([] as CartItemType[]);
  const { data, isLoading, error } = useQuery<CartItemType[]>(
    'products',
    getProducts
  );

  // Useful in debugging if local json/API isn't showing products list.
  console.log(data);

    const getTotalItems = (items: CartItemType[]) => 
    items.reduce((ack: number, items) => ack + items.amount, 0);



  const handleAddToCart = (clickedItem: CartItemType) => {
    setCartItems(prev => {
      // 1. Is the item already added in the cart?
      const isItemInCart = prev.find(item => item.id === clickedItem.id);

      if (isItemInCart) {
        return prev.map(item =>
          item.id === clickedItem.id
            ? { ...item, amount: item.amount }
            : item
        );
      }
      // First time the item is added
      return [...prev, { ...clickedItem, amount: 1 }]      
    });
  };


  const handleRemoveFromCart = (id: number) => {
    setCartItems(prev =>
      prev.reduce((ack, item) => {
        if (item.id === id) {
          if (item.amount === 1) return ack;
          return [...ack, { ...item, amount: item.amount - 1 }];
        } else {
          return [...ack, item];
        }
      }, [] as CartItemType[])
    );
  };

// Currently fixed to the top left of the screen.
// TO-DO: Center it in the middle of the screen, and make changes to display percentage loaded.
    function CircularProgressStyled(props: any) {
      return (
        <Box position="relative" display="inline">
          <CircularProgress variant="determinate" {...props} />
          <Box
            color = "primary"
            position="absolute"
            display="flex"
            alignItems="center"
            justifyContent="center"
          >    
          </Box>
        </Box>
      );
    }


  if (isLoading) return <CircularProgressStyled/>;

  if (error) return <div>Something went wrong</div>;

    return  (

      <Router>
        <ButtonAppBar/>      
  
  
      <Switch>
        <Route exact path = "/"><Home/>
        <Wrapper>
        <h2>Products</h2>

      <p>This is where the filters will be going.</p>
        
        <Grid container spacing={2}>
        {data?.map(item => (
          <Grid item key={item.id} xs = {12} sm={6} md={4} lg={3}>
            <Item item={item} handleAddToCart={handleAddToCart}  />
          </Grid>
        ))}
      </Grid>
      <StyledButton onClick={() => setDrawerOpen(true)}></StyledButton>

      <Drawer anchor='bottom' open={drawerOpen} onClose={() => setDrawerOpen(false)}>
        <div>
      <StyledButton onClick={() => setDrawerOpen(false)}>x</StyledButton>
      <strong>Item</strong>
      <p>has been added to your cart.</p>
          </div>
      </Drawer>

        </Wrapper>
        </Route>
        <Route path = "/Checkout"><Checkout/></Route>
        <Route path = "/Confirmation"><Confirmation/></Route>
      </Switch>
    </Router>
    );
};
//        <Route path = "/Cart/Cart"><Cart/></Route>


export default App;
