import React from "react";
import "./Main.css";

const Main = () => {
    return (
        <div className="MainPage">
            <div className="Logo"></div>
            <h1>喜歡唱歌、交朋友嗎？</h1>
            <p>那你可以加入台大合唱團</p>
            <div className="ButtonContainer">
                <button className="Join">手刀加入</button>
                <button className="AboutUs">關於我們</button>
            </div>
        </div>
    );
};

export default Main;
