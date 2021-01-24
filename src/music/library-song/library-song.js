import React from 'react'


const LibrarySong = ({song, setSongs, setCurrentSong, songs, audioRef, isPlaying, id}) => {

    const songSelectHandler = async () => {
        await setCurrentSong(song)
        if(isPlaying) audioRef.current.play()
    }

    return (
        <div
            className={`library-song ${song.active ? ' selected' : ''}`}
            onClick={songSelectHandler}
        >
            <img
                src={song.cover}
                alt={song.name}>
            </img>
            <div className='song-description'>
                <h3>{song.name}</h3>
                <h4>{song.artist}</h4>
            </div>

        </div>
    )
}

export default LibrarySong