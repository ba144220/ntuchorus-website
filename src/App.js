import React, { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import theme from "./theme";
import { ThemeProvider } from "@material-ui/core";

import InfoBlock from "./Components/InfoBlock/InfoBlock";
import About from "./Containers/About/About";
import Activities from "./Containers/Activities/Activities";
import ContactUs from "./Containers/ContactUs/ContactUs";
import Game from "./Containers/Game/Game";
import Main from "./Containers/Main/Main";
import Videos from "./Containers/Videos/Videos";
import Footer from "./Containers/Footer/Footer";
import VideoCarousel from "./Components/VideoCarousel/VideoCarousel";

function App() {
    useEffect(() => {
        Aos.init({});
    }, []);
    return (
        <ThemeProvider theme={theme}>
            <Main />

            <InfoBlock title="想了解更多？" subtitle="點選連結進入聊天室，由幹部為您解惑！">
                <div style={{ height: "50px" }}>a</div>
                <VideoCarousel />
            </InfoBlock>
            <InfoBlock left />
            <InfoBlock />
            <InfoBlock left />
            <Footer />

            {/* 
            <InfoBlock />
            <ContactUs />
            <About />
            <Videos />
            <Activities />
            <Game /> */}
        </ThemeProvider>
    );
}

export default App;
