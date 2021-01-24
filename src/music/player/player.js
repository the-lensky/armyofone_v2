import React, {useState} from 'react'
import './player.scss'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faPlay, faAngleLeft, faAngleRight, faPause} from '@fortawesome/free-solid-svg-icons'

const Player = ({audioRef, currentSong, isPlaying, setIsPlaying, setsongInfo, songInfo}) => {



    const playSongHandler = () => {
        if (isPlaying) {
            audioRef.current.pause()
            setIsPlaying(!isPlaying)
        } else {
            audioRef.current.play()
            setIsPlaying(!isPlaying)
        }
    }


    const dragHandler = (e) => {
        audioRef.current.currentTime = e.target.value
        setsongInfo({...songInfo, currentTime: e.target.value})
    }

    const formatTime = (time) => {
        return (
            Math.floor(time / 60) + ':' + ('0' + Math.floor(time % 60)).slice(-2)
        )
    }




    return (
        <div className="player">
            <div className="time-control">
                <p>{formatTime(songInfo.currentTime)}</p>
                <input
                    type="range"
                    min={0}
                    max={songInfo.duration}
                    value={songInfo.currentTime}
                    onChange={dragHandler}
                />
                <p>{formatTime(songInfo.duration)}</p>
            </div>
            <div className='play-control'>
                <FontAwesomeIcon
                    className='skip-back' size='2x' icon={faAngleLeft}/>
                <FontAwesomeIcon
                    className='play' size='2x' icon={isPlaying ? faPause : faPlay}
                    onClick={playSongHandler}
                />
                <FontAwesomeIcon
                    className='skip-forward' size='2x' icon={faAngleRight}/>
            </div>
        </div>

    )
}

export default Player