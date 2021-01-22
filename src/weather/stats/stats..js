import React, {useContext} from 'react'
import WeatherContext from '../contex/contex'
import moment from 'moment'
import './stats.css'

const Stats = () => {
    const {weatherData} = useContext(WeatherContext)
    if(!Object.keys(weatherData).length) {
        return null
    }

    const {pressure, humidity} = weatherData.main
    const {sunrise, sunset} = weatherData.sys
    const windSpeed = weatherData.wind.speed
    const clouds = weatherData.clouds.all


    let calcSunrise = moment.unix(sunrise)
    let formatSunrise = calcSunrise.format('HH.mm')

    let calcSunset = moment.unix(sunset)
    let formatSunset = calcSunset.format('HH.mm')


    return (
        <div className='stats-wrap'>
            <div className="stats-box">
                <div className='stats-item'>
                    <div>{humidity}%</div>
                    <div className='stats-desc'> Влажность</div>
                </div>
                <div className='stats-item'>
                    <div>{windSpeed} м/c</div>
                    <div className='stats-desc'> Ветер</div>
                </div>
                <div className='stats-item'>
                    <div>{formatSunrise} </div>
                    <div className='stats-desc'> Восход</div>
                </div>
            </div>
            <div className="stats-box">
                <div className='stats-item'>
                    <div> {clouds} %</div>
                    <div className='stats-desc'> Облачность </div>
                </div>
                <div className='stats-item'>
                    <div>{pressure} гПа</div>
                    <div className='stats-desc'> Давление</div>
                </div>
                <div className='stats-item'>
                    <div>{formatSunset} </div>
                    <div className='stats-desc'> Заход</div>
                </div>
            </div>
        </div>
    )
}

export default Stats