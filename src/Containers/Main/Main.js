import React from "react";
import "./Main.css";

import "./ButtonScript";

const Main = () => {
    return (
        <div class="MainPage" id="MainPage">
            {/* <div class="Logo" id="Logo"></div> */}
            <h1 id="Header">尚未開放，敬請期待</h1>
            <p id="Text"></p>
            <div class="ButtonContainer1" id="ButtonContainer1">
                <button class="Join" onclick="ClickJoin()">
                    試音資訊
                </button>
                <button class="Ask" onclick="ClickAsk()">
                    線上諮詢
                </button>
            </div>
            <div class="AskBoxContainer" id="AskBoxContainer">
                <div class="AskCover"></div>
                <div class="AskBack">
                    <div class="AskBox">
                        <div class="Text">
                            <div class="TextBox1">
                                <p>營業時間</p>
                                <p>9/22Wed~9/26Sat</p>
                                <p>19:00~22:00</p>
                                <p>-9/24Fri不營業</p>
                                <p>-建議使用電腦</p>
                            </div>
                            <div class="TextBox2">
                                <p>現在時間</p>
                                <p id="Time"></p>
                                <p id="Service"></p>
                                <a id="Gather">諮詢服務</a>
                            </div>
                        </div>
                        <button onclick="AskBack()">返回</button>
                    </div>
                </div>
            </div>
            <div class="JoinBoxContainer" id="JoinBoxContainer">
                <div class="JoinCover"></div>
                <div class="JoinBack">
                    <div class="JoinBox">
                        <div class="TextBox">
                            <p class="Left">【招生說明會】</p>
                            <p class="Center">9/26 Sun 18:30 第二活動中心 6F 603</p>
                            <p class="Left">【試音日期及地點】</p>
                            <p class="Center">9/25 Sat 18:30~19:30 第二活動中心 6F 604</p>
                            <p class="Center">9/26 Sun 18:30~19:30 第二活動中心 6F 603</p>
                            <p class="Center">9/29 Wed 18:30~19:30 第二活動中心 6F 704</p>
                            <p class="Left">【試音內容】</p>
                            <p class="Left">1.一分鐘內自選曲清唱</p>
                            <p class="Left">-建議為合唱曲主旋律/流行歌/校歌</p>
                            <p class="Left">2.視譜</p>
                            <p class="Left">3.聽唱</p>
                            <p class="Left">＊採現場報名</p>
                        </div>
                        <button onclick="JoinBack()">返回</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Main;
