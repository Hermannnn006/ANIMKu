"use client"

import { useState } from "react";
import YouTube from "react-youtube";

const Player = ({ videoId }) => {
    const [isOpen, setIsOpen] = useState(true);
    
    const toggleTrailer = () => {
        setIsOpen((prevState) => !prevState);
    };

    const option = {
        width: "300",
        height: "250",
    };

    return isOpen ? (
        <div className="fixed bottom-2 right-2">
            <button
                onClick={toggleTrailer}
                className="font-bold text-color-primary bg-red-600 float-right px-3 mb-1"
            >
                X
            </button>
            <YouTube
                videoId={videoId}
                onReady={(event) => event.target.pauseVideo()}
                opts={option}
            />
        </div>
    ) : (
        <button
            onClick={toggleTrailer}
            className="fixed bottom-5 text-lg right-5 w-32 bg-indigo-700 hover:bg-indigo-800 text-color-primary rounded py-0.5 shadow-xl transition-all"
        >
            Lihat Trailer
        </button>
    );
};

const VideoPlayer = ({ youtubeId }) => {
    return <Player videoId={youtubeId} />;
};

export default VideoPlayer;
