import React, { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import theme from "./theme";
import { ThemeProvider } from "@material-ui/core";

import InfoBlock from "./Components/InfoBlock/InfoBlock";
import Main from "./Containers/Main/Main";
import Footer from "./Containers/Footer/Footer";
import Carousel from "./Components/Carousel/Carousel";

function App() {
    useEffect(() => {
        Aos.init({});
    }, []);
    return (
        <ThemeProvider theme={theme}>
            <Main />

            {/* <InfoBlock
                title="想了解更多？"
                subtitle="點選連結進入聊天室，由幹部為您解惑！"
            ></InfoBlock>
            <InfoBlock left>
                <Carousel />
            </InfoBlock>
            <InfoBlock />
            <InfoBlock left />*/}
            <Footer />
        </ThemeProvider>
    );
}

export default App;
