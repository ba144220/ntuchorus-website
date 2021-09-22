import React, { useState, useEffect } from "react";

import { makeStyles } from "@material-ui/core/styles";
import ChevronRightSharpIcon from "@material-ui/icons/ChevronRightSharp";
import ChevronLeftSharpIcon from "@material-ui/icons/ChevronLeftSharp";

const useStyle = makeStyles((theme) => ({
    center: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
    },

    root: {
        height: "100%",
        width: "100%",
    },
    content: {
        width: "90%",
        maxHeight: "80%",
        aspectRatio: "14/9",

        position: "relative",
    },
    indicatorHolder: {
        height: "3%",

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

        position: "absolute",

        transition: "0.5s",

        "&:hover": {
            cursor: "pointer",
            height: "100%",
            backgroundColor: "rgba(200,200,200,0.5)",
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

const Carousel = ({ children, state, setState, aspectRatio }) => {
    const classes = useStyle();

    const [pause, setPause] = useState(false);

    useEffect(() => {
        const interval = setInterval(() => {
            if (pause === true) {
                return;
            }
            setState((state) => (state + 1) % children.length);
        }, 4000);
        return () => clearInterval(interval);
    }, [pause]);

    return (
        <div
            className={`${classes.root} ${classes.center}`}
            onMouseEnter={() => setPause(true)}
            onMouseLeave={() => setPause(false)}
        >
            <div className={`${classes.content} ${classes.center}`}>
                {children}
                <div className={classes.indicatorHolder}>
                    {children.map((child, i) => (
                        <Indicator number={i} state={state} setState={setState} key={i} />
                    ))}
                </div>
                <div
                    className={`${classes.side} ${classes.center}`}
                    style={{ right: 0 }}
                    onClick={() => setState((state) => (state + 1) % children.length)}
                >
                    <ChevronRightSharpIcon fontSize="large" />
                </div>
                <div
                    className={`${classes.side} ${classes.center}`}
                    style={{ left: 0 }}
                    onClick={() => {
                        setState((state - 1 + children.length) % children.length);
                    }}
                >
                    <ChevronLeftSharpIcon fontSize="large" />
                </div>
            </div>
        </div>
    );
};

export default Carousel;
