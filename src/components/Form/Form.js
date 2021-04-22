import React from 'react'
import { TextField, Button, Typography, Paper} from "@material-ui/core";
import useStyle from './styles';
const Form = () => {
    const classes = useStyle();
    const handleSubmit = () => {

    }
    return (
        <Paper className={classes.paper}>
            <Form autoComplete ="off" noValidate className={classes.form} onSubmit={handleSubmit}>

            </Form>
        </Paper>
    )
}

export default Form;
