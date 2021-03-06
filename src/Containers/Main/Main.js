import React from "react";
import "./Main.css";
import { ClickJoin, ClickAsk, JoinBack, AskBack } from "./ButtonScript";

const Main = () => {
    return (
        <>
            <div className="MainPage" id="MainPage">
                <div className="Logo" id="Logo"></div>

                <h1 id="Header">口唱心合，快樂高歌</h1>
                <p id="Text">台大合唱團，熱情招聲中</p>
                <div className="ButtonContainer1" id="ButtonContainer1">
                    <button className="Join" onClick={ClickJoin}>
                        試音資訊
                    </button>
                    <button className="Ask" onClick={ClickAsk}>
                        線上諮詢
                    </button>
                </div>
                <div className="AskBoxContainer" id="AskBoxContainer">
                    <div className="AskCover"></div>
                    <div className="AskBack">
                        <div className="AskBox">
                            <div className="Text">
                                <div className="TextBox1">
                                    <p>營業時間</p>
                                    <p>9/22Wed~9/26Sat</p>
                                    <p>19:00~22:00</p>
                                    <p>-9/24Fri不營業</p>
                                    <p>-建議使用電腦</p>
                                </div>
                                <div className="TextBox2">
                                    <p>現在時間</p>
                                    <p id="Time"></p>
                                    <p id="Service"></p>

                                    <a
                                        id="Gather"
                                        href="https://gather.town/app/UymIyY1JY0kJXkve/Welcome_to_NTUChorus"
                                        style={{ textDecoration: "none", color: "black" }}
                                    >
                                        諮詢服務
                                    </a>
                                </div>
                            </div>
                            <button onClick={() => AskBack()}>返回</button>
                        </div>
                    </div>
                </div>
                <div className="JoinBoxContainer" id="JoinBoxContainer">
                    <div className="JoinCover"></div>
                    <div className="JoinBack">
                        <div className="JoinBox">
                            <div className="TextBox">
                                <p className="Left">【招生說明會】</p>
                                <p className="Center">9/26 Sun 18:30 第二活動中心 6F 603</p>
                                <p className="Left">【試音日期及地點】</p>
                                <p className="Center">9/25 Sat 18:30~19:30 第二活動中心 6F 604</p>
                                <p className="Center">9/26 Sun 18:30~19:30 第二活動中心 6F 603</p>
                                <p className="Center">9/29 Wed 18:30~19:30 第二活動中心 6F 704</p>
                                <p className="Left">【試音內容】</p>
                                <p className="Left">1.一分鐘內自選曲清唱</p>
                                <p className="Left">-建議為合唱曲主旋律/流行歌/校歌</p>
                                <p className="Left">2.視譜</p>
                                <p className="Left">3.聽唱</p>
                                <p className="Left">＊採現場報名</p>
                            </div>
                            <button onClick={() => JoinBack()}>返回</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Main;
