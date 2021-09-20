import React from "react";
import Carousel from "react-material-ui-carousel";
import { Paper, Button } from "@material-ui/core";

function VideoCarousel(props) {
    var items = [
        {
            src: "https://www.youtube.com/embed/BTQga91HouQ",
        },
        {
            src: "https://www.youtube.com/embed/AXrPbg7G_UE",
        },
        {
            src: "https://www.youtube.com/embed/7g3j1bayTpI",
        },
    ];

    return (
        <Carousel
            autoPlay
            interval="4000"
            animation="fade"
            indicators="false"
            IndicatorIcon={
                <div style={{ height: "5px", width: "20px", backgroundColor: "red" }}></div>
            }
            indicatorIconButtonProps={{
                style: {
                    padding: "10px", // 1
                    color: "blue", // 3
                },
            }}
        >
            {items.map((item, i) => (
                <Item key={i} item={item} />
            ))}
        </Carousel>
    );
}
function Item(props) {
    return (
        <iframe
            width="500px"
            height="300px"
            src={props.item.src}
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
        ></iframe>
    );
}

export default VideoCarousel;
