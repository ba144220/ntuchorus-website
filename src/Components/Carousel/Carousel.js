import React, { useState, useEffect } from "react";

import { makeStyles } from "@material-ui/core/styles";
import ChevronRightSharpIcon from "@material-ui/icons/ChevronRightSharp";
import ChevronLeftSharpIcon from "@material-ui/icons/ChevronLeftSharp";

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

    side: {
        height: "50%",
        width: "10%",
        border: "solid 1px purple",

        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",

        position: "absolute",

        transition: "0.5s",

        "&:hover": {
            cursor: "pointer",
            height: "100%",
            backgroundColor: "rgba(200,200,200,0.5)",
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
        minHeight: "4px",
        //width: "10%",
        backgroundColor: "grey",
        marginLeft: "2%",
        marginRight: "2%",

        borderRadius: "2px",

        transition: "0.4s",

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
            style={{
                width: number === state ? "12%" : "10%",
                backgroundColor: number === state ? "silver" : "grey",
            }}
        ></div>
    );
};

const Carousel = ({ children, state, setState }) => {
    const classes = useStyle();

    const [pause, setPause] = useState(false);

    useEffect(() => {
        const interval = setInterval(() => {
            if (pause === true) {
                console.log(pause);
                return;
            }
            setState((state) => (state + 1) % children.length);
        }, 4000);
        return () => clearInterval(interval);
    }, [pause]);

    return (
        <div
            className={classes.root}
            onMouseEnter={() => setPause(true)}
            onMouseLeave={() => setPause(false)}
        >
            <div className={classes.content}>
                <div className={classes.indicatorHolder}>
                    {children.map((child, i) => (
                        <Indicator number={i} state={state} setState={setState} key={i} />
                    ))}
                </div>
                <div
                    className={classes.side}
                    style={{ right: 0 }}
                    onClick={() => setState((state) => (state + 1) % children.length)}
                >
                    <ChevronRightSharpIcon fontSize="large" />
                </div>
                <div
                    className={classes.side}
                    style={{ left: 0 }}
                    onClick={() => {
                        setState((state - 1 + children.length) % children.length);
                    }}
                >
                    <ChevronLeftSharpIcon fontSize="large" />
                </div>

                {children}
            </div>
        </div>
    );
};

function Item({ item, state, setState, number }) {
    return (
        <div
            hidden={state != number}
            style={{ width: "100%", height: "100%", border: "dotted 1px yellow" }}
        >
            <iframe
                width="100%"
                height="100%"
                src={item.src}
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
            ></iframe>
        </div>
    );
}

const VideoCarousel = () => {
    const [state, setState] = useState(0);

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
        <Carousel state={state} setState={setState}>
            {items.map((item, i) => (
                <Item number={i} key={i} item={item} state={state} setState={setState} />
            ))}
        </Carousel>
    );
};

export default VideoCarousel;
