import React, {useContext} from 'react'
import WeatherContext from '../contex/contex'
import './temperature.css'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faCloudSun} from '@fortawesome/free-solid-svg-icons'


const Temperature = () => {

    const {weather} = useContext(WeatherContext)
    const {temp} = weather
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
                <div>
                    <p
                        className='temp-degree'
                    >{temp}<span>&deg;</span>
                    </p>
                </div>
            </div>
        </>
    )
}

export default Temperature