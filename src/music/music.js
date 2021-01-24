import React, {useRef, useState} from 'react'
import './music.scss'
import {getMusic} from './util'
import Player from './player/player'
import Song from './song/song'
import Library from './library/library'

const Music = () => {

    const audioRef = useRef(null)

    const timeUpdateHandler = (e) => {
        const currentTime = e.target.currentTime
        const duration = e.target.duration
        setsongInfo({...songInfo, currentTime: currentTime, duration: duration})
    }


    const [songs, setSongs] = useState(getMusic())
    const [currentSong, setCurrentSong] = useState(songs[0])
    const [isPlaying, setIsPlaying] = useState(false)
    const [songInfo, setsongInfo] = useState({
        currentTime: 0,
        duration: 0
    })

    return (
        <div className='music-wrap'>
            <Library
                songs={songs}
                setCurrentSong={setCurrentSong}
                audioRef={audioRef}
                isPlaying={isPlaying}

            />
            <Song currentSong={currentSong}/>
            <Player
                songInfo={songInfo}
                setsongInfo={setsongInfo}
                audioRef={audioRef}
                currentSong={currentSong}
                setIsPlaying={setIsPlaying}
                isPlaying={isPlaying}
            />
            <audio
                src={currentSong.audio}
                ref={audioRef}
                onTimeUpdate={timeUpdateHandler}
                onLoadedMetadata={timeUpdateHandler}
            >
            </audio>
        </div>
    )
}

export default Music