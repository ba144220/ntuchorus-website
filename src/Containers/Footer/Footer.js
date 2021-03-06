import React from "react";
import "./Footer.css";

import Facebook from "@material-ui/icons/Facebook";
import Instagram from "@material-ui/icons/Instagram";
import Youtube from "@material-ui/icons/YouTube";
import { makeStyles } from "@material-ui/core";

const useStyle = makeStyles((theme) => ({
    icons: {
        color: "#999999",
        transition: "0.2s",

        "&:hover": {
            color: "#eeeeee",
        },
    },
}));

const Footer = () => {
    const classes = useStyle();
    return (
        <div className="FootPage">
            <div className="TagContainer">
                <a href="https://www.facebook.com/NTUChorus/">
                    <Facebook fontSize="large" className={classes.icons} />
                </a>
                <a href="https://www.instagram.com/ntuchorus/">
                    <Instagram fontSize="large" className={classes.icons} />
                </a>
                <a href="https://www.youtube.com/user/ntuchorus">
                    <Youtube fontSize="large" className={classes.icons} />
                </a>
            </div>
            <p>Copyright © 2021 NTUChorus</p>
        </div>
    );
};

export default Footer;
