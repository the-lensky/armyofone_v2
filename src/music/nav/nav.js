import React from 'react'
import './nav.scss'
import { FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import { faMusic } from '@fortawesome/free-solid-svg-icons'

const Nav = ({setLibraryStatus, libraryStatus}) => {
    return (
        <nav className='nav'>
            <h1>WAWES</h1>
            <button
                onClick={() => setLibraryStatus(!libraryStatus)}
            >
                Library
                <FontAwesomeIcon icon={faMusic} />
            </button>
        </nav>
    )
}

export default Nav