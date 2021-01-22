import React, {useContext} from 'react'
import WeatherContext from '../contex/contex'

const Forecast = () => {
    const {forecast} = useContext(WeatherContext)

    const dataIs = (weekDay) =>{
        let options = {
            weekday: 'short'
        }
        const dateObj = new Date(weekDay * 1000);
        console.log(dateObj.getHours())
        const utcWeekDayString = dateObj.toLocaleDateString('ru-Ru', options);
        return utcWeekDayString
    }

    return (
        <div>
            {forecast.filter(({dt})=>new Date(dt * 1000).getHours() === 15).map((unit, idx) => {
                return (
                    <div key={unit.dt}>
                        <p> { dataIs(unit.dt)} </p>
                        <p> { unit.weather[0].description} </p>
                        <p> { unit.main.temp} ℃ </p>
                        <p> { unit.main.humidity} % </p>
                        <p> { unit.main.pressure} гПа </p>
                        <p> { unit.wind.speed} м/с </p>
                    </div>
                )
            })}
        </div>
    )
}

export default Forecast