import React, { useState } from 'react'
import { TextField, Button, Typography, Paper} from "@material-ui/core";
import useStyle from './styles';
const Form = () => {
    const classes = useStyle();
    const  [postData, setPostData] = useState();
    const handleSubmit = () => {

    }
    return (
        <Paper className={classes.paper}>
            <form autoComplete ="off" noValidate className={classes.form} onSubmit={handleSubmit}>
                <Typography variant={h6}> Creating a Memory</Typography>
                <TextField name= "creator" variant= "outlined" label ="Creator" fullWidth
                value={postData.creator} onChange={}>

                </TextField>
            </form>
        </Paper>
    )
}

export default Form;
