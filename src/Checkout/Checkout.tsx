import CartItem from "../CartItem/CartItem";
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Switch from '@material-ui/core/Switch';
import React from 'react';
import Cart from "../Cart/Cart";

//Styles
import { Wrapper } from "../App.styles";

//Types
import { CartItemType } from "../App";
import { Link } from "react-router-dom";



const Checkout: React.FC<any> = ({}) =>
{
    const [checked, setChecked] = React.useState(false);
    const toggleChecked = () => {
    setChecked((prev) => !prev);
};

return(
    <Wrapper>
        <h2>Checkout</h2>
        <form name = 'checkoutForm'>
        <label>
            Your name:
            <input type="text" name="name" placeholder="e.g. Jane Doe" aria-required = "true"/>
        </label>
        <label>
            Your email:
            <input type="email" name="email" placeholder="e.g. jane@company.co" aria-required = "true"/>
        </label>

        <FormControlLabel
        control={<Switch checked={checked} onChange={toggleChecked} />}
        label="Normal" aria-required = "true"
        />

        <input type="submit" value="Pay ${calculateTotal(Cart.cartItems).toFixed(2)}" />
        </form>
        </Wrapper>
);

};
export default Checkout;