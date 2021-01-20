import React, {useContext} from 'react'
import WeatherContext from '../contex/contex'

const Temperature = () => {

    const {weather, city} = useContext(WeatherContext)
    const {temp, humidity, pressure} = weather
    return (
        <>
            <div className='temp-wraper'>
                <h1>img</h1>
            </div>
            <div>
                <p>{temp}</p>
            </div>
            {/*<div>*/}
            {/*    <p>Humidity {humidity}</p>*/}
            {/*</div>*/}
            {/*<div>*/}
            {/*    <p>pressure {pressure}</p>*/}
            {/*</div>*/}
        </>
    )
}

export default Temperature