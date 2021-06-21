import styled from 'styled-components'
import IconButton from '@material-ui/core/IconButton'
import { Badge, createMuiTheme, makeStyles } from '@material-ui/core';



export const Wrapper = styled.div`
font-family: Montserrat;
`;



export const StyledButton = styled(IconButton)`
position:absolute;
border: 1px solid black;
border-radius: 50%;
box-shadow: 0 3px 0px rgba(0, 0, 0, 1), 0 0px 0px rgba(0, 0, 0, 1);
top: 5px;
right: 5px;
width: 30px;
height: 30px;
padding: 10px;
margin: 1px;
color: black;
background-color: white;
`


export const Drawer = makeStyles(theme => ({
    root: {
      '& .MuiDrawer-paperAnchorBottom': {
        right: 10,
        left: 10,
        bottom: 10,
        boxShadow: "10px 10px 5px 0px rgba(0,0,0,0.75);"
      }
    }
  }));
