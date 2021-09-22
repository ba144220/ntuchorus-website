import { makeStyles, Typography } from "@material-ui/core";
import Button from "@material-ui/core/Button";
import React from "react";

const useStyle = makeStyles((theme) => ({
    button: {
        transition: "0.4s",

        color: theme.palette.secondary.main,
        borderColor: theme.palette.secondary.main,
        //backgroundImage: "linear-gradient(45deg, red , yellow)",
        marginTop: theme.spacing(3),
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

const Game = () => {
    const classes = useStyle();
    return (
        <>
            <img src="https://i.imgur.com/6r7I85u.gif" width="80%" height="60%" />
            <Button className={classes.button} color="primary" variant="outlined" disabled>
                <a
                    href="https://gather.town/app/UymIyY1JY0kJXkve/Welcome_to_NTUChorus"
                    style={{ textDecoration: "none" }}
                >
                    <Typography variant="h5" className={classes.text}>
                        點擊前往小遊戲！
                    </Typography>
                </a>
            </Button>
        </>
    );
};

export default Game;
