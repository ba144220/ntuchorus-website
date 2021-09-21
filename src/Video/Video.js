import React from "react";
import { makeStyles } from "@material-ui/core/styles";

const useStyle = makeStyles((theme) => ({
    center: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
    },
    content: {
        width: "90%",
        maxHeight: "80%",
        aspectRatio: "16/9",

        position: "relative",
    },
}));

const Video = ({ url }) => {
    const classes = useStyle();
    return (
        <div className={`${classes.content} ${classes.center}`}>
            <iframe
                width="100%"
                height="100%"
                src={url}
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
            ></iframe>
        </div>
    );
};

export default Video;
