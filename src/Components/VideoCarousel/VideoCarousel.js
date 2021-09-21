import React from "react";
import Carousel from "react-material-ui-carousel";
import { Paper, Button } from "@material-ui/core";

function VideoCarousel(props) {
    var items = [
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
        <Carousel
            style={{ width: "100%", height: "100%", border: "dotted 10px red" }}
            height="400px"
            autoPlay={false}
            interval="4000"
            animation="fade"
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

export default VideoCarousel;
