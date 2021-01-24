import React, {useRef, useState} from 'react'
import './music.scss'
import {getMusic} from './data'
import Player from './player/player'
import Song from './song/song'
import Library from './library/library'
import Nav from './nav/nav'

const Music = () => {
    const audioRef = useRef(null)

    const [songs, setSongs] = useState(getMusic())
    const [currentSong, setCurrentSong] = useState(songs[1])
    const [isPlaying, setIsPlaying] = useState(false)
    const [songInfo, setSongInfo] = useState({
        currentTime: 0,
        duration: 0
    })
    const [libraryStatus, setLibraryStatus] = useState(false)



    const timeUpdateHandler = (e) => {
        const currentTime = e.target.currentTime
        const duration = e.target.duration
        setSongInfo({...songInfo, currentTime: currentTime, duration: duration})
    }

    const songEndHandler = async () => {
        const currentIndex = songs.findIndex((song) => song.id === currentSong.id)
        await setCurrentSong(songs[currentIndex + 1 % songs.length])
        if (isPlaying) audioRef.current.play()

    }


    return (
        <div className='music-wrap'>
            <Nav
                libraryStatus={libraryStatus}
                setLibraryStatus={setLibraryStatus}
            />
            <Library
                songs={songs}
                setSongs={setSongs}
                setCurrentSong={setCurrentSong}
                audioRef={audioRef}
                isPlaying={isPlaying}
                libraryStatus={libraryStatus}

            />
            <Song currentSong={currentSong}/>
            <Player
                songs={songs}
                setCurrentSong={setCurrentSong}
                songInfo={songInfo}
                setSongInfo={setSongInfo}
                audioRef={audioRef}
                currentSong={currentSong}
                setIsPlaying={setIsPlaying}
                isPlaying={isPlaying}
                setSongs={setSongs}
            />
            <audio
                src={currentSong.audio}
                ref={audioRef}
                onTimeUpdate={timeUpdateHandler}
                onLoadedMetadata={timeUpdateHandler}
                onEnded={songEndHandler}
            >
            </audio>
        </div>
    )
}

export default Music