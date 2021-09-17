import React from "react";
import "./Activities.css";

const Activities = () => {
    return (
        <div className="Activities">
            <div className="ImgContainer"></div>
            <h1>活動照片</h1>
            <table>
                <tr>
                    <td>杜鵑排花</td>
                    <td>工作坊</td>
                    <td>風格日</td>
                </tr>
                <tr>
                    <td>慶生會</td>
                    <td>大出遊</td>
                    <td>小出遊</td>
                </tr>
            </table>
        </div>
    );
};

export default Activities;
