import React, { useState } from "react";
import Carousel from "../Carousel/Carousel";

function Item({ item, state, setState, number }) {
    return (
        <>
            <iframe
                src={item.src}
                //width="100%"
                height="100%"
                style={{
                    transition: " 1.2s",
                    width: state === number ? "100%" : "0%",
                    //height: state === number ? "100%" : "0%",
                    opacity: state === number ? 1 : 0,
                }}
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
            ></iframe>
        </>
    );
}

const VideoCarousel = () => {
    const [state, setState] = useState(0);

    const items = [
        {
            title: "「緣」：紅樓夢抄檢",
            src: "https://www.youtube.com/embed/Ldwvd0d7RRg",
        },
        {
            title: "「緣」：那天一個衝動我加入合唱團",
            src: "https://www.youtube.com/embed/BTQga91HouQ",
        },
        {
            title: "「許個願」：Northern Lights",
            src: "https://www.youtube.com/embed/823sq6i7Ni0",
        },
        {
            title: "「許個願」：狩俁唱和",
            src: "https://www.youtube.com/embed/K2LZsASPsI8",
        },
        {
            title: "「魅」：under the sea",
            src: "https://www.youtube.com/embed/wv3HOaC7_Rk",
        },
        {
            title: "「以月光為箋」：一棵開花的樹",
            src: "https://www.youtube.com/embed/3u6uU0H1cWc",
        },
    ];
    return (
        <Carousel state={state} setState={setState} aspectRatio="16/9">
            {items.map((item, i) => (
                <Item number={i} key={i} item={item} state={state} setState={setState} />
            ))}
        </Carousel>
    );
};

export default VideoCarousel;
