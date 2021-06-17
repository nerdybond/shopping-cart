import Button from '@material-ui/core/Button'

//Types
import { CartItemType} from '../App'

//Styles
import { Wrapper } from '../App.styles';
import Item from '../Item/Item';

type Props = {
    item: CartItemType;
    addToCart: (clickedItem: CartItemType) => void;
    removeFromCart: (id: number) => void;
}


const CartItem: React.FC<Props>= ({item, removeFromCart}) => (
<Wrapper>
    <div>
    <h3>{item.title}</h3>
    <div className = 'information'>
<p>Price: $ {item.price} </p>
    <div className = 'button'>
    <Button
        size = 'small'
        variant = 'contained'
        onClick = {() => removeFromCart(item.id)}
        >
        x
        </Button>
        
    </div>
    </div>
    </div>
</Wrapper>

);

export default CartItem;