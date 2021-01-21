import React, {useContext, useEffect} from 'react'
import WeatherContext from '../contex/contex'
import './temperature.css'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faCloudSun, faSun, faSmog, faSnowflake, faCloudRain, faTemperatureLow} from '@fortawesome/free-solid-svg-icons'


const Temperature = () => {
    const {weather, stats} = useContext(WeatherContext)
    const {temp} = weather
    const description = stats.weather[0].description
    console.log(stats)
    console.log(description)

    const Capitalize = (description) => {
        return description.charAt(0).toUpperCase() + description.slice(1)
    }

    const icon = () => {
        switch (description) {
            case 'ясно':
                return <FontAwesomeIcon
                    className='temp-icon'
                    icon={faSun}/>
                break
            case 'небольшая облачность':
                return <FontAwesomeIcon
                    className='temp-icon'
                    icon={faSun}/>
                break
            case 'облачно с прояснениями':
                return <FontAwesomeIcon
                    className='temp-icon'
                    icon={faCloudSun}/>
                break
            case 'переменная облачность':
                return <FontAwesomeIcon
                    className='temp-icon'
                    icon={faCloudSun}/>
                break
            case 'туман':
                return <FontAwesomeIcon
                    className='temp-icon'
                    icon={faSmog}/>
                break
            case 'снег':
                return <FontAwesomeIcon
                    className='temp-icon'
                    icon={faSnowflake}/>
                break
            case 'небольшой снег':
                return <FontAwesomeIcon
                    className='temp-icon'
                    icon={faSnowflake}/>
                break
            case 'пасмурно':
                return <FontAwesomeIcon
                    className='temp-icon'
                    icon={faCloudRain}/>
                break
            case 'дождь':
                return <FontAwesomeIcon
                    className='temp-icon'
                    icon={faCloudRain}/>
            case 'гроза':
                return <FontAwesomeIcon
                    className='temp-icon'
                    icon={faCloudRain}/>
                break
            default:
                return <FontAwesomeIcon
                    className='temp-icon'
                    icon={faTemperatureLow}/>
        }

    }

    return (
        <>
            <div className='temp-wraper'>
                <div
                    className='temp-img'
                >
                    {icon()}
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