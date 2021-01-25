import React from 'react'
import './player.scss'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faPlay, faAngleLeft, faAngleRight, faPause} from '@fortawesome/free-solid-svg-icons'

const Player = ({setSongs, setCurrentSong, songs, audioRef, currentSong, isPlaying, setIsPlaying, setSongInfo, songInfo}) => {


    const playSongHandler = () => {
        if (isPlaying) {
            audioRef.current.pause()
            setIsPlaying(!isPlaying)
        } else {
            audioRef.current.play()
            setIsPlaying(!isPlaying)
        }
    }

    const skipTrackHandler = async (direction) => {
        const currentIndex = songs.findIndex((song) => song.id === currentSong.id)
        if (direction === 'skip-forward') {
            await setCurrentSong(songs[currentIndex + 1 % songs.length])
            activeLibraryHandler(songs[currentIndex + 1 % songs.length])

        }
        if (direction === 'skip-back') {
            if ((currentIndex - 1) % songs.length === -1) {
                await setCurrentSong(songs[songs.length - 1])
                activeLibraryHandler(songs[songs.length - 1])
                if (isPlaying) audioRef.current.play()
                return
            }
            await setCurrentSong(songs[currentIndex - 1 % songs.length])
            activeLibraryHandler(songs[currentIndex - 1 % songs.length])

        }
        if (isPlaying) audioRef.current.play()

    }


    const dragHandler = (e) => {
        audioRef.current.currentTime = e.target.value
        setSongInfo({...songInfo, currentTime: e.target.value})
    }


    const formatTime = (time) => {
        return (
            Math.floor(time / 60) + ':' + ('0' + Math.floor(time % 60)).slice(-2)
        )
    }

    const activeLibraryHandler = (nextPrev) => {
        const newSongs = songs.map((song) => {
            if (song.id === nextPrev.id) {
                return (
                    {
                        ...song,
                        active: true
                    }
                )
            } else {
                return (
                    {
                        ...song,
                        active: false
                    }
                )
            }
        })
        setSongs(newSongs)
    }


    return (
        <div className="player">
            <div className="time-control">
                <p>{formatTime(songInfo.currentTime)}</p>
                <input
                    type="range"
                    min={0}
                    max={songInfo.duration || 0}
                    value={songInfo.currentTime}
                    onChange={dragHandler}
                />
                <p>{songInfo.duration ? formatTime(songInfo.duration) : '0:00'}</p>
            </div>
            <div className='play-control'>
                <FontAwesomeIcon
                    onClick={() => skipTrackHandler('skip-back')}
                    className='skip-back'
                    size='2x'
                    icon={faAngleLeft}/>
                <FontAwesomeIcon
                    className='play' size='2x' icon={isPlaying ? faPause : faPlay}
                    onClick={playSongHandler}
                />
                <FontAwesomeIcon
                    onClick={() => skipTrackHandler('skip-forward')}
                    className='skip-forward'
                    size='2x'
                    icon={faAngleRight}/>
            </div>
        </div>

    )
}

export default Player