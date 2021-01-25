import React from 'react'
import './forecast-item.scss'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faCloudRain, faCloudSun, faSmog, faSnowflake, faSun, faTemperatureLow} from '@fortawesome/free-solid-svg-icons'

const ForecastItem = ({unit, dataIs}) => {
    console.log(unit.dt_txt)
    const description = unit.weather[0].description
    const data = (unit) => {
        let date = new Date(unit.dt * 1000);
        return  date
    }



    const icon = () => {
        switch (description) {
            case 'ясно':
                return <FontAwesomeIcon
                    className='forecast-icon'
                    icon={faSun}/>
                break
            case 'небольшая облачность':
                return <FontAwesomeIcon
                    className='forecast-icon'
                    icon={faSun}/>
                break
            case 'облачно с прояснениями':
                return <FontAwesomeIcon
                    className='forecast-icon'
                    icon={faCloudSun}/>
                break
            case 'переменная облачность':
                return <FontAwesomeIcon
                    className='forecast-icon'
                    icon={faCloudSun}/>
                break
            case 'туман':
                return <FontAwesomeIcon
                    className='forecast-icon'
                    icon={faSmog}/>
                break
            case 'плотный туман':
                return <FontAwesomeIcon
                    className='forecast-icon'
                    icon={faSmog}/>
                break
            case 'снег':
                return <FontAwesomeIcon
                    className='forecast-icon'
                    icon={faSnowflake}/>
                break
            case 'небольшой снег':
                return <FontAwesomeIcon
                    className='forecast-icon'
                    icon={faSnowflake}/>
                break
            case 'пасмурно':
                return <FontAwesomeIcon
                    className='forecast-icon'
                    icon={faCloudRain}/>
                break
            case 'дождь':
                return <FontAwesomeIcon
                    className='forecast-icon'
                    icon={faCloudRain}/>
            case 'небольшой дождь':
                return <FontAwesomeIcon
                    className='forecast-icon'
                    icon={faCloudRain}/>
            case 'гроза':
                return <FontAwesomeIcon
                    className='forecast-icon'
                    icon={faCloudRain}/>
                break
            default:
                return <FontAwesomeIcon
                    className='forecast-icon'
                    icon={faTemperatureLow}/>
        }

    }

    return (
        <div
            className='forecast-item'
        >
            <div>
                <p> {dataIs(unit.dt)} </p>
                <p className='forecast-stats-description'> Дата </p>
                <p className='forecast-stats-description'>asd {data}</p>
            </div>
            <div
                className='forecast-item-icon'>
                {icon()}
            </div>
            <div>
                <p> {unit.main.temp} </p>
                <p className='forecast-stats-description'>℃ </p>
            </div>
            <div>
                <p> {unit.main.humidity} % </p>
                <p className='forecast-stats-description'> Влажность </p>
            </div>
            <div>
                <p> {unit.main.pressure} гПа </p>
                <p className='forecast-stats-description'> Давление </p>
            </div>
            <div>
                <p> {unit.wind.speed} м/с</p>
                <p className='forecast-stats-description'> Ветер </p>
            </div>
        </div>
    )
}

export default ForecastItem
