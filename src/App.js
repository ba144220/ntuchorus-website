import React from "react";
import theme from "./theme";
import { ThemeProvider } from "@material-ui/core";

import InfoBlock from "./Components/InfoBlock/InfoBlock";
import About from "./Containers/About/About";
import Activities from "./Containers/Activities/Activities";
import ContactUs from "./Containers/ContactUs/ContactUs";
import Game from "./Containers/Game/Game";
import Main from "./Containers/Main/Main";
import Videos from "./Containers/Videos/Videos";

function App() {
    return (
        <ThemeProvider theme={theme}>
            <Main />
            <InfoBlock />
            <ContactUs />
            <About />
            <Videos />
            <Activities />
            <Game />
        </ThemeProvider>
    );
}

export default App;
