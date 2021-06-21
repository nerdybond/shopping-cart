import Button from '@material-ui/core/Button'

//Types
import {CartItemType} from '../App';
import  useState  from '../App';

//Styles
import {Wrapper} from './Item.styles';


type Props = {
item: CartItemType;
handleAddToCart: (clickedItem: CartItemType) => void;

}


// TO-DO: Create a img src match to match image with product id.

//Note - Title text will now only display two lines of text, with an ellipses hiding further information.
const Item: React.FC<Props> = ({item, handleAddToCart}) => (

    
    <Wrapper>
    <div className = "displayItem">
    <img src = {item.image} alt={item.title} />
    <div className = "itemInfo">
    <p>{item.category}  </p>
    <h3 className = "title">{item.title}</h3>
    
    <div className = "priceAdd">
    <h3>${item.price}</h3>
    <Button onClick={()=> handleAddToCart(item)}>Add &nbsp; +</Button>
    
    </div>
    </div>
    </div>
    </Wrapper>
);

export default Item;