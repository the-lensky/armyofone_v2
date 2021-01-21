import React, {useContext, useEffect} from 'react'
import WeatherContext from '../contex/contex'
import './temperature.css'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faCloudSun} from '@fortawesome/free-solid-svg-icons'


const Temperature = () => {
    const {weather, stats} = useContext(WeatherContext)
    const {temp} = weather
    const description = stats.weather[0].description
    console.log(stats)

    const Capitalize = (description) => {
        return description.charAt(0).toUpperCase() + description.slice(1);
    }

    return (
        <>
            <div className='temp-wraper'>
                <div
                    className='temp-img'
                >
                    <FontAwesomeIcon
                        className='temp-icon'
                        icon={faCloudSun}/>
                </div>
                <div
                    className='temp-img '
                >
                    <p
                        className='temp-degree temp-text'
                    >{Math.round(temp)}<span>&deg;</span>
                    </p>
                    <p
                        className='temp-text'>
                        {Capitalize(description)}
                    </p>
                </div>
            </div>
        </>
    )
}

export default Temperature