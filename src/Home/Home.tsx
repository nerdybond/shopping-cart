import CartItem from "../CartItem/CartItem";
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Switch from '@material-ui/core/Switch';
import React, { useState } from 'react';
import Cart from "../Cart/Cart";
import App from "../App";

//Styles
import { Wrapper } from "../App.styles";
import ProductGrid from "../App";

//Types
import { Grid } from "@material-ui/core";
import Item from "../Item/Item";


const Home: React.FC<any> = ({}) =>
{
    const [checked, setChecked] = React.useState(false);
    const toggleChecked = () => {
    setChecked((prev) => !prev);
};


return(
<Wrapper>
      
      
      
        
    </Wrapper>

);
//Will make Drawer into 'Item added to cart. And will move drawer code to new page.'
/*

*/

};
export default Home;