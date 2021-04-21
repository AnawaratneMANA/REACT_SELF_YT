import React from 'react';
import { Container, AppBar, Typography, Grow, Grid} from "@material-ui/core";

//Importing the Image.
import memories from './images/far_cry.png'
const App = () => {
    return (
        <Container maxWidth={"lg"}>
            <AppBar position= "static" color = "inherit">
                <Typography variant = "h2" align = "center">Memories</Typography>
                <img src={memories} alt ="memories" height ="60"/>
            </AppBar>
        </Container>
    )
}

export default App;
