import React, {useContext} from 'react'
import WeatherContext from '../contex/contex'
import './forecast.css'
import ForecastItem from '../forecast-item/forecast-item'

const Forecast = () => {
    const {forecast} = useContext(WeatherContext)
        console.log(forecast)

    const dataIs = (weekDay) =>{
        let options = {
            weekday: 'short'
        }
        const dateObj = new Date(weekDay * 1000);
        const utcWeekDayString = dateObj.toLocaleDateString('ru-Ru', options);
        return utcWeekDayString
    }

    return (
        <div
            className='forecast-wrap'
        >
            {forecast.filter(({dt})=>new Date(dt * 1000).getHours() === 15).map((unit, idx) => {
                return <ForecastItem
                            key={unit.dt}
                            unit={unit}
                            dataIs={dataIs}
                        />
            })}
        </div>
    )
}

export default Forecast