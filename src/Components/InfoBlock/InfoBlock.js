import React from "react";

import "./InfoBlock.css";

import { makeStyles } from "@material-ui/core/styles";

import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
const useStyle = makeStyles((theme) => ({
    root: {
        [theme.breakpoints.down("sm")]: {
            backgroundColor: "purple",
        },
        display: "flex",
        flexDirection: "row",
        minHeight: "400px",
        width: "100vw",
        backgroundColor: "black",
        borderTop: "solid 5px grey",
    },
    text: {
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",

        minHeight: "10px",
        textAlign: "center",
        color: "#f9f9f9",
    },
    content: {
        minHeight: "200px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        textAlign: "center",
        backgroundColor: "blueviolet",
        color: "#f9f9f9",
    },
    title: {
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "flex-start",
        margin: theme.spacing(8),
        "& *": {
            color: "white",
        },
    },
    mainTitle: {
        marginBottom: theme.spacing(3),
    },
    test: {
        border: "solid 1px red",
        width: "100%",
        height: "100%",
    },
}));
const InfoBlock = ({ left, title = "大標題", subtitle = "小標題", children }) => {
    const classes = useStyle();

    return (
        <Grid container className={classes.root}>
            {left && (
                <Grid
                    item
                    md={5}
                    xs={12}
                    className={classes.content}
                    data-aos="fade"
                    data-aos-delay="500"
                    data-aos-duration="1000"
                >
                    {/* {children} */}
                    <div className={classes.test}>
                        <iframe
                            style={{
                                width: "100%",
                                aspectRatio: "16/9",
                                maxHeight: "100%",
                            }}
                            src="https://www.youtube.com/embed/7g3j1bayTpI"
                            title="YouTube video player"
                            frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                        ></iframe>
                    </div>
                </Grid>
            )}

            <Grid
                item
                md={7}
                xs={12}
                className={classes.text}
                data-aos={left ? "fade-left" : "fade-right"}
                data-aos-easing="ease-out"
                data-aos-duration="1500"
            >
                <div className={classes.title}>
                    <Typography className={classes.mainTitle} align="left" variant="h2">
                        {title}
                    </Typography>

                    <Typography align="left" variant="h4">
                        {subtitle}
                    </Typography>
                </div>
            </Grid>

            {left ? (
                <></>
            ) : (
                <Grid
                    item
                    md={5}
                    xs={12}
                    className={classes.content}
                    data-aos="fade"
                    data-aos-delay="500"
                    data-aos-duration="1000"
                >
                    {children}
                </Grid>
            )}
        </Grid>
    );
};

export default InfoBlock;
