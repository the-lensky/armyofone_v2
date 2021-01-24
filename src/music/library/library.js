import React from 'react'
import './library.scss'
import LibrarySong from '../library-song/library-song'

const Library = ({songs, setSongs, setCurrentSong, audioRef, isPlaying, libraryStatus}) => {
    return (
        <div className={`library ${libraryStatus ? 'active-library' : ''}`}>
            <h2>Library</h2>
            <div className='library-songs'>
                {
                    songs.map((song => {
                        return (
                            <LibrarySong
                                songs={songs}
                                setSongs={setSongs}
                                setCurrentSong={setCurrentSong}
                                song={song}
                                key={song.id}
                                id={song.id}
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