//Styles
import { Wrapper } from "../Confirmation/Confirmation.styles";
import StarOutlineOutlinedIcon from '@material-ui/icons/StarOutlineOutlined';
import { Button } from "@material-ui/core";

//Types
// import { CartItemType } from "../Confirmation/Confirmation.styles";

const Confirmation: React.FC<any> = ({}) =>
{
    //create iteration for number of orders confirmed.
    // Function - for every form submitted: order.id ++

return(
    <Wrapper>
        <h2>Order Confirmation</h2>
        
        <div className = "orderConfirm">
        <div className = "circle"><StarOutlineOutlinedIcon /></div>

        <h2>Your order has been processed</h2>
        <br/><br/>
        <p>Your order ID is <strong>#ITERATIVE NUMBER#</strong></p>
        </div>
        
        <Button
        size = 'small'
        variant = 'contained'      
        >
        <h2>Return to Products</h2>
        </Button>
        </Wrapper>
);
};
export default Confirmation;