import React from "react";
import './nav.scss'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMusic } from "@fortawesome/free-solid-svg-icons";

const Nav = ({ setLibraryStatus, libraryStatus }) => {
    const openLibraryHandler = () => {
        setLibraryStatus(!libraryStatus);
    };

    return (
        <nav className='music-nav'>
            <h1>Waves</h1>
            <button
                className={libraryStatus ? "library-active" : ""}
                onClick={openLibraryHandler}
            >
                Library
                <FontAwesomeIcon icon={faMusic}></FontAwesomeIcon>
            </button>
        </nav>
    );
};

export default Nav;