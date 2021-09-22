import React, { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import theme from "./theme";
import { ThemeProvider } from "@material-ui/core";

import InfoBlock from "./Components/InfoBlock/InfoBlock";
import Main from "./Containers/Main/Main";
import Footer from "./Containers/Footer/Footer";
import VideoCarousel from "./Components/Videos/Videos";
import Video from "./Video/Video";
import Button1 from "./Components/Buttons/Button1";
import ImagesCarousel from "./Components/Images/Images";

function ClickJoin() {
    document.getElementById("JoinBoxContainer").style.display = "flex";
    document.getElementById("JoinBoxContainer").style.justifyContent = "center";
    document.getElementById("JoinBoxContainer").style.alignItems = "center";
    document.getElementById("JoinBoxContainer").style.flexDirection = "column";
    document.getElementById("Header").style.display = "none";
    document.getElementById("Text").style.display = "none";
    document.getElementById("ButtonContainer1").style.display = "none";
    document.getElementById("Logo").style.display = "none";
}
function App() {
    useEffect(() => {
        Aos.init({});
    }, []);
    return (
        <ThemeProvider theme={theme}>
            <Main />

            <InfoBlock title="為什麼想加合唱團？" subtitle="聽聽團員們怎麼說...">
                <Video url="https://www.youtube.com/embed/hGsZa9O1r44" />
            </InfoBlock>

            <InfoBlock left title="我們都在哪裡表演？" subtitle="每年在國家音樂廳演出兩次">
                <VideoCarousel />
            </InfoBlock>

            <InfoBlock title="我們平常還會做什麼？" subtitle="大小活動等你來！">
                <ImagesCarousel />
            </InfoBlock>

            <InfoBlock
                left
                title="什麼時候可以線上諮詢？"
                subtitle="現任幹部線上為您解惑"
            ></InfoBlock>

            <InfoBlock title="試音資訊" subtitle="馬上成為台大合唱團的一份子！">
                <Button1 onClick={ClickJoin} />
            </InfoBlock>

            <InfoBlock left title="合唱小遊戲" subtitle="YouTube闖關回答正確答案拿獎品！" />

            <Footer />
        </ThemeProvider>
    );
}

export default App;
