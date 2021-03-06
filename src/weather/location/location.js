import React, {useContext} from 'react'
import WeatherContext from '../contex/contex'
import'./location.css'

const Location = () => {
    let options = {  weekday: 'long', month: 'long',day: 'numeric'};
    let date = new Date().toLocaleDateString('ru', options);
    const {weatherData} = useContext(WeatherContext)
    if(!Object.keys(weatherData).length) {
        return null
    }
    const city = weatherData.name
    const country = weatherData.sys.country

    return (
        <div className='location-wrapper'>
            <p className='location-city'>{city}, {country}</p>
            <p className='location-date'>{date}</p>
        </div>
    )
}

export default Location