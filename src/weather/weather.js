import React, {useEffect, useState} from 'react'
import axios from 'axios'

import './weather.css'

import WeatherContext from './contex/contex'
import {Col, Row, Alert, Container} from 'react-bootstrap'

import Temperature from './temperature'
import WeatherSearch from './weather-search'
import Location from './location/location'
import Stats from './stats/stats.'
import Forecast from './forecast/forecast'


const Weather = () => {

    const [weatherData, setWeatherData] = useState({})
    const [forecast, setForecast] = useState([])
    const [error, setError] = useState(false)
    const [inputValue, setInputValue] = useState('')


    const fetchWeather = async (e) => {
        try {
            e.preventDefault()
            if (!inputValue) {
                return (
                    setError(true),
                        setWeatherData(null)
                )
            }
            const API_KEY = 'c4c2799d2e1ee7be23a5edba8cb75913'
            const API_URL_W = `https://api.openweathermap.org/data/2.5/weather?q=${inputValue}&units=metric&appid=${API_KEY}&lang=ru`
            const API_URL_F = `https://api.openweathermap.org/data/2.5/forecast?q=${inputValue}&units=metric&appid=${API_KEY}&lang=ru`
            const responseW = await axios.get(API_URL_W)
            const responseF = await axios.get(API_URL_F)
            setWeatherData(responseW.data)
            setForecast(responseF.data.list)
            setInputValue('')
        }
        catch (e) {
            setError(true)
            console.log(`City not founded. Please, check your input field 😊`)
        }
    }



    return (
        <WeatherContext.Provider value={{fetchWeather, weatherData, inputValue, setInputValue,forecast }}>
            <Container className='wrapper'>
                {error && <Alert variant='secondary'> sdfsdf </Alert>}
                <Row>
                    <Col>
                        {weatherData ? <Location /> : null}
                    </Col>
                    <Col>
                        <WeatherSearch />
                    </Col>
                </Row>
                <Row>
                    <Col style={{borderRight: '1px solid white'}}>
                        {weatherData ? <Temperature/> : null}
                    </Col>
                    <Col>
                        {weatherData ? <Stats/> : null}
                    </Col>
                </Row>
                <Row>
                    <Forecast />
                </Row>

                {/*{error !== null && <p>{error}</p>}*/}
                {/*{weather !== null && <Temperature/>}*/}

            </Container>
        </WeatherContext.Provider>
    )
}

export default Weather
