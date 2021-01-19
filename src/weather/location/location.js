import React, {useContext} from 'react'
import WeatherContext from '../contex/contex'
import'./location.css'

const Location = () => {
    const { city, country } = useContext(WeatherContext)
    return (
        <div className='location-wrapper'>
            <p className='location-city'>{city}, {country}</p>
            <p className='location-date'>{new Date().toLocaleDateString()}</p>
        </div>
    )
}

export default Location