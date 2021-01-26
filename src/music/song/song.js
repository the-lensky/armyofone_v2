import React from "react";
import './song.scss'

const Song = ({ currentSong, isPlaying }) => {
    return (
        <div className="song-container">
            <img
                className={isPlaying ? "rotateSong" : ""}
                src={currentSong.cover}
                alt=""
            />
            <h2>{currentSong.name}</h2>
            <h3>{currentSong.artist}</h3>
        </div>
    );
};

export default Song;