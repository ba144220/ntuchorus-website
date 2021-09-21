import React from "react";
import "./Footer.css";
const Footer = () => {
    return (
        <div className="FootPage">
            <div className="TagContainer">
                <a href="https://www.facebook.com/NTUChorus/">
                    <i className="fa fa-facebook-square" style={{ fontSize: "24px" }}></i>
                </a>
                <a href="https://www.instagram.com/ntuchorus/">
                    <i className="fa fa-instagram" style={{ fontSize: "24px" }}></i>
                </a>
                <a href="https://www.youtube.com/user/ntuchorus">
                    <i className="fa fa-youtube-play" style={{ fontSize: "24px" }}></i>
                </a>
            </div>
            <p>Copyright © 2021 NTUChorus</p>
        </div>
    );
};

export default Footer;
