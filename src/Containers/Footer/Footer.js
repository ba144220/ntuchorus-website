import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";

const useStyle = makeStyles((theme) => ({
    root: {
        width: "100%",
        backgroundColor: "black",
        color: "white",
        flexGrow: 1,
        borderTop: "solid 5px grey",
    },
    paper: {
        padding: theme.spacing(2),
        textAlign: "center",
        color: theme.palette.text.secondary,
    },
    container: {
        border: "dotted 2px green",
    },
    gridItem: {
        padding: theme.spacing(4),
    },
}));
const Footer = () => {
    const classes = useStyle();
    return (
        <div className={classes.root}>
            <Grid container spacing={0}>
                <Grid item xs={4} className={classes.gridItem}>
                    <Container className={classes.container}>
                        <Typography variant="h5">台大合唱團</Typography>
                    </Container>
                </Grid>
                <Grid item xs={4} className={classes.gridItem}>
                    <Container className={classes.container}>
                        <Typography variant="h5">商業合作</Typography>

                        <Typography variant="subtitle1">good.dish.tw@gmail.com</Typography>
                    </Container>
                </Grid>
                <Grid item xs={4} className={classes.gridItem}>
                    <Container className={classes.container}>
                        <Typography variant="h5">聯絡資訊</Typography>

                        <Typography variant="subtitle1">Instagram</Typography>

                        <Typography variant="subtitle1">Facebook</Typography>
                        <Typography variant="subtitle1">官網</Typography>
                    </Container>
                </Grid>
            </Grid>
        </div>
    );
};

export default Footer;
