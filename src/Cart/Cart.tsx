import CartItem from "../CartItem/CartItem";

//Styles
import { Wrapper } from "../App.styles";

//Types
import { CartItemType } from "../App";
import { Link } from "react-router-dom";


type Props = {
    cartItems: CartItemType[];
    addToCart: (clickedItem: CartItemType) => void;
    removeFromCart: (id: number) => void;
}

const Cart: React.FC<Props> = ({cartItems, addToCart, removeFromCart}) =>
{
const calculateTotal = (items: CartItemType[]) =>
items.reduce((ack: number, item) => ack + item.amount * item.price, 0)


/*
      <Drawer anchor='right' open={cartOpen} onClose={() => setCartOpen(false)}>
        <Cart
          cartItems={cartItems}
          addToCart={handleAddToCart}
          removeFromCart={handleRemoveFromCart}
        />
      </Drawer>
*/

return(
    <Wrapper>
        <h2>Cart</h2>
        {cartItems.length === 0 ? <p>No items in cart.</p>: null}
        {cartItems.map(item => (
            <CartItem
            key = {item.id}
            item = {item}
            addToCart = {addToCart}
            removeFromCart = {removeFromCart}
            />
        ))}
        <h2>${calculateTotal(cartItems).toFixed(2)}</h2>
        <h2>Buy Now</h2>
        </Wrapper>
);
};
export default Cart;