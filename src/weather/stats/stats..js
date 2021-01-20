import React, {useContext} from 'react'
import WeatherContext from '../contex/contex'
import moment from 'moment'
import './stats.css'

const Stats = () => {
    const {stats} = useContext(WeatherContext)
    const {pressure, humidity} = stats.main
    const {sunrise, sunset} = stats.sys
    const windSpeed = stats.wind.speed
    const description = stats.weather[0].description
    console.log(description)

    let calcSunrise = moment.unix(sunrise)
    let formatSunrise = calcSunrise.format('HH.mm')

    let calcSunset = moment.unix(sunset)
    let formatSunset = calcSunset.format('HH.mm')


    return (
        <div className='stats-wrap'>
            <div className="stats-box">
                <div className='stats-item'>
                    <div>{humidity}%</div>
                    <div className='stats-desc'> Влажность </div>
                </div>
                <div className='stats-item'>
                    <div>{windSpeed} м/c</div>
                    <div className='stats-desc'> Ветер </div>
                    <div className='stats-item'>
                        <div>{formatSunrise} </div>
                        <div className='stats-desc'> Восход </div>
                    </div>
                </div>
                <div className="stats-box">
                    <div className='stats-item'>
                        <div>RATATAT</div>
                        {/*<div>{description} </div>*/}
                        <span className='stats-desc'> Сейчас </span>
                    </div>
                    <div className='stats-item'>
                        <div>{pressure} </div>
                        <div className='stats-desc'> Давление </div>
                    </div>
                    <div className='stats-item'>
                        <div>{formatSunset} </div>
                        <div className='stats-desc'> Заход </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Stats