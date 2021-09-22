import React, { useState } from "react";
import Carousel from "../Carousel/Carousel";
import { makeStyles } from "@material-ui/core/styles";

import Typography from "@material-ui/core/Typography";

const useStyle = makeStyles((theme) => ({
    info: {
        position: "absolute",
        top: 0,
        left: 0,
        right: 0,
        height: "100%",

        padding: theme.spacing(3),
        alignItems: "left",

        backgroundImage: `linear-gradient( ${theme.palette.secondary.main},${theme.palette.secondary.main} , transparent,transparent)`,
        transition: "0.3s",
        opacity: 0.0,
        "&:hover": {
            opacity: 0.8,
            backgroundImage: `linear-gradient( ${theme.palette.secondary.main},${theme.palette.secondary.main} , transparent,transparent)`,
        },
    },
    title: {
        marginBottom: theme.spacing(2),
    },
}));

function Item({ item, state, setState, number }) {
    const classes = useStyle();
    return (
        <div
            style={{
                transition: " 1s",
                width: state === number ? "100%" : "0%",
                height: state === number ? "100%" : "0%",
                opacity: state === number ? 1 : 0,
                position: "relative",
            }}
        >
            <img
                src={item.src}
                style={{
                    width: "100%",
                    height: "100%",
                }}
            />
            <div className={classes.info}>
                <Typography variant="h3" align="left" className={classes.title}>
                    {item.title}
                </Typography>
                <Typography variant="h5" align="left">
                    {item.description}
                </Typography>
            </div>
        </div>
    );
}

const ImagesCarousel = () => {
    const [state, setState] = useState(0);

    const items = [
        {
            title: "聲樂課（聲發）",
            description: "提供聲樂課資源，協助新進成員培養歌唱能力！",
            src: "https://i.imgur.com/Y7gEDlH.jpg",
        },
        {
            title: "風格日",
            description: "在那天穿著符合主題的衣服，一起練唱玩小遊戲！",

            src: "https://imgur.com/eQ6tSYX.jpg",
        },
        {
            title: "慶生會",
            description: "台大團專屬的合唱版生日快樂歌，線上線下都能一起慶生！",

            src: "https://imgur.com/XPp5M7B.jpg",
        },
        {
            title: "工作坊",
            description: "由行政部門主辦的工作坊，練唱之餘還能點滿其他技能！",

            src: "https://i.imgur.com/gQ0Lka4.jpg",
        },
        {
            title: "大小出遊",
            description: "音樂會或表演結束後的各式旅遊，增進團內情誼～",

            src: "https://imgur.com/712b0ad.jpg",
        },
        {
            title: "杜鵑排花",
            description: "三月的某個練唱晚上，一起去椰林大道排NTU CHORUS！",

            src: "https://i.imgur.com/paMHizj.jpg",
        },
    ];
    return (
        <Carousel state={state} setState={setState} aspectRatio="4/3">
            {items.map((item, i) => (
                <Item number={i} key={i} item={item} state={state} setState={setState} />
            ))}
        </Carousel>
    );
};

export default ImagesCarousel;
