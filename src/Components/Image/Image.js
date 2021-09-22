import { makeStyles } from "@material-ui/core";
import React from "react";

const useStyle = makeStyles((theme) => ({
    root: {
        width: "100%",
        height: "100%",
    },
}));

const Image = () => {
    const classes = useStyle();
    return <div className={classes.root}></div>;
};

export default Image;
