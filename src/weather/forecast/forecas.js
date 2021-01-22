import "./styles.css";
import axios from 'axios'
import React, { useState } from 'react'

function Forecast () {

    const [forecast, setForecast] = useState([])

    let options = {
        weekday: 'short'
    }
    const dateObj = new Date(1611306000 * 1000);
    const utcString = dateObj.toLocaleDateString(`ru-Ru`, options);
    console.log(utcString)

    const dateObjT = new Date(1611306000 * 1000);
    const utcStringT = dateObjT.toLocaleDateString(`ru-Ru`);
    const timeT = utcStringT.slice(-11, -4)
    console.log((timeT))

    const dataIs = (weekDay) =>{
        let options = {
            weekday: 'short'
        }
        const dateObj = new Date(weekDay * 1000);
        const utcWeekDayString = dateObj.toLocaleDateString(`ru-Ru`, options);
        return utcWeekDayString
    }

    const fetch5 = async () => {
        try {
            const API_KEY = 'c4c2799d2e1ee7be23a5edba8cb75913'
            const API_URL = `https://api.openweathermap.org/data/2.5/forecast?q=Minsk&units=metric&appid=${API_KEY}&lang=ru`
            const response = await axios.get(API_URL)
            console.log(response.data.list)
            setForecast(response.data.list)

        } catch (e) {
            console.log(e)
        }
    }

    return (
        <div className="App">
            <h1>Hello CodeSandbox</h1>
            <button onClick={fetch5}>sdfsfd </button>
            {/* <div>{utcString}</div>
             <div>{timeT}</div> */}
            <div>{
                forecast.map((unit, idx)=> {
                    return (
                        <div key={unit.dt}>
                            {/* <p> { unit.dt} </p> */}
                            <p> { dataIs(unit.dt)} </p>
                            <p> { unit.weather[0].description} </p>
                            <p> { unit.main.temp} ℃ </p>
                            <p> { unit.main.humidity} % </p>
                            <p> { unit.main.pressure} гПа </p>
                            <p> { unit.wind.speed} м/с </p>
                        </div>
                    )
                })
            }</div>
        </div>
    );
}

export default Forecast