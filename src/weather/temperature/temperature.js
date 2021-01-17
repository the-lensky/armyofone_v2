import React, {useContext} from 'react'
import WeatherContext from '../contex/contex'

const Temperature = () => {
    const {weather, city} = useContext(WeatherContext)
    const {temp, humidity, pressure} = weather

    return (
        <>
            <div>
                <p>Weather forecast fo {city}</p>
            </div>

            <div>
                <p>Temperature {temp}</p>
            </div>
            <div>
                <p>Humidity {humidity}</p>
            </div>
            <div>
                <p>pressure {pressure}</p>
            </div>

        </>
    )
}

export default Temperature