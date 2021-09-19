import React from "react";
import "./Videos.css";

const Videos = () => {
    return (
        <div className="Video">
            <h1>招生影片(我先亂嵌之後補上）</h1>
            <iframe
                src="https://www.youtube.com/embed/t-ZQJFwOpjg"
                frameBorder="0"
                allow="fullscreen"
                title="vid"
            ></iframe>
        </div>
    );
};

export default Videos;
