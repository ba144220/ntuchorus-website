import { makeStyles, Typography } from "@material-ui/core";
import Button from "@material-ui/core/Button";
import React from "react";

import "./Button1.css";

const useStyle = makeStyles((theme) => ({
    button: {
        transition: "0.4s",

        color: theme.palette.secondary.main,
        borderColor: theme.palette.secondary.main,
        //backgroundImage: "linear-gradient(45deg, red , yellow)",
        "&:hover": {
            color: theme.palette.primary.main,
            borderColor: theme.palette.primary.main,
            transform: "scale(1.05, 1.05) ",

            "& $text": {
                //transform: "scale(1.05, 1.05) ",
                //content: "'add'",
                //color: "grey",
                //color: "#b83a3c",
            },
        },
    },
    text: {
        //transition: "0.4s",
        margin: theme.spacing(1),
    },
}));

const Button1 = ({ onClick }) => {
    const classes = useStyle();
    return (
        <Button className={classes.button} color="primary" variant="outlined">
            <Typography variant="h5" className={classes.text}>
                查看招生試音資訊
            </Typography>
        </Button>
    );
};

export default Button1;
