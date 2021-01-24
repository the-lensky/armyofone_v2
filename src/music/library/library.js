import React from 'react'
import './library.scss'
import LibrarySong from '../library-song/library-song'

const Library = ({songs, setCurrentSong , audioRef, isPlaying}) => {
    return (
        <div className='library'>
            <h2>Library</h2>
            <div className='library-songs'>
                {
                    songs.map((song => {
                        return (
                            <LibrarySong
                                songs={songs}
                                setCurrentSong={setCurrentSong}
                                song={song}
                                key={song.id}
                                audioRef={audioRef}
                                isPlaying={isPlaying}
                            />
                        )
                    }))
                }
            </div>
        </div>
    )
}

export default Library