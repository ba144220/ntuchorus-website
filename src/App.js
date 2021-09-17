import About from "./Containers/About/About";
import Activities from "./Containers/Activities/Activities";
import ContactUs from "./Containers/ContactUs/ContactUs";
import Game from "./Containers/Game/Game";
import Main from "./Containers/Main/Main";
import Videos from "./Containers/Videos/Videos";

function App() {
    return (
        <div className="App">
            <Main />
            <ContactUs />
            <About />
            <Videos />
            <Activities />
            <Game />
        </div>
    );
}

export default App;
