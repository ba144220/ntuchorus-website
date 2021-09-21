import React, { useState } from "react";

import { makeStyles } from "@material-ui/core/styles";
const useStyle = makeStyles((theme) => ({
    root: {
        backgroundColor: "orange",
        height: "90%",
        width: "90%",

        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
    },
    content: {
        width: "100%",
        maxHeight: "80%",
        aspectRatio: "16/9",
        border: "solid 1px red",

        position: "relative",

        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
    },
    indicatorHolder: {
        height: "5%",
        border: "solid 1px green",
        width: "80%",

        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "flex-start",

        position: "absolute",
        bottom: 0,
    },
    next: {
        height: "30%",
        width: "10%",
        border: "solid 1px purple",

        position: "absolute",
        right: 0,

        "&:hover": {
            cursor: "pointer",
        },
    },
    prev: {
        height: "30%",
        width: "10%",
        border: "solid 1px blue",

        position: "absolute",
        left: 0,

        "&:hover": {
            cursor: "pointer",
        },
    },
    test: {
        height: "95%",
        width: "95%",
        backgroundColor: "red",

        "&:hover": {
            backgroundColor: "darkred",
        },
    },
    indicator: {
        minHeight: "5px",
        width: "10%",
        backgroundColor: "grey",
        marginLeft: "2%",
        marginRight: "2%",

        transition: "1s",

        "&:hover": {
            backgroundColor: "white",
            cursor: "pointer",
        },
    },
}));

const Indicator = ({ number, state, setState }) => {
    const classes = useStyle();
    return (
        <div
            className={classes.indicator}
            onClick={() => {
                setState(number);
            }}
        ></div>
    );
};

const Carousel = ({ children }) => {
    const classes = useStyle();

    const [state, setState] = useState(0);

    return (
        <div className={classes.root}>
            <div className={classes.content}>
                <div className={classes.indicatorHolder}>
                    <Indicator number={0} state={state} setState={setState} />
                    <Indicator number={1} state={state} setState={setState} />
                    <Indicator number={2} state={state} setState={setState} />
                </div>
                <div
                    className={classes.next}
                    onClick={() => {
                        setState((state + 1) % children.length);
                    }}
                >
                    {">"}
                </div>
                <div
                    className={classes.prev}
                    onClick={() => {
                        setState((state - 1 + children.length) % children.length);
                    }}
                >
                    {"<"}
                </div>

                {children[state]}
            </div>
        </div>
    );
};

function Item(props) {
    return (
        <div style={{ width: "100%", height: "100%", border: "dotted 1px yellow" }}>
            <iframe
                width="100%"
                height="100%"
                src={props.item.src}
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
            ></iframe>
        </div>
    );
}

const VideoCarousel = () => {
    const items = [
        {
            title: "那天一個衝動我加入合唱團",
            src: "https://www.youtube.com/embed/BTQga91HouQ",
        },
        {
            title: "如果明天就是下一生",
            src: "https://www.youtube.com/embed/AXrPbg7G_UE",
        },
        {
            title: "When you believe",
            src: "https://www.youtube.com/embed/7g3j1bayTpI",
        },
    ];
    return (
        <Carousel>
            {items.map((item, i) => (
                <Item key={i} item={item} />
            ))}
        </Carousel>
    );
};

export default VideoCarousel;
