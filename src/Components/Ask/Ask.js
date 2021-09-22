import { makeStyles, Typography } from "@material-ui/core";
import Button from "@material-ui/core/Button";
import React from "react";

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
                color: theme.palette.primary.main,
            },
        },
    },
    text: {
        transition: "0.4s",
        margin: theme.spacing(1),
        color: theme.palette.secondary.main,
    },
}));

const Ask = () => {
    const classes = useStyle();
    return (
        <Button className={classes.button} color="primary" variant="outlined">
            <a
                href="https://gather.town/app/UymIyY1JY0kJXkve/Welcome_to_NTUChorus"
                style={{ textDecoration: "none" }}
            >
                <Typography variant="h5" className={classes.text}>
                    點擊前往 Gather Town
                </Typography>
            </a>
        </Button>
    );
};

export default Ask;
