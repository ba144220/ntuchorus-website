import { createTheme } from "@material-ui/core";

export default createTheme({
    typography: {
        fontFamily: "Noto+Sans+TC",
        fontWeightLight: 400,
        fontWeightRegular: 500,
        fontWeightMedium: 600,
        fontWeightBold: 700,
        h2: {
            fontWeight: 350,
        },
        h4: {
            fontWeight: 300,
        },
    },
    // mixins: {
    //     toolbar: {
    //         minHeight: "60px",
    //         height: "60px",
    //     },
    // },
    // typography: {
    //     fontFamily: "Roboto, Helvetica, Arial, PingFangTC-Semibold, PingFang TC",
    // },
    // palette: {
    //     primary: { main: "#8aae4a" },
    // },
});
