import React, {useEffect, useState} from 'react'
import axios from 'axios'

import './weather.css'

import WeatherContext from './contex/contex'
import {Col, Row, Alert, Container} from 'react-bootstrap'

import Temperature from './temperature'
import WeatherSearch from './weather-search'
import Location from './location/location'
import Stats from './stats/stats.'
import Forecast from './forecast/forecas'


const Weather = () => {

    const [weather, setWeather] = useState(null)
    const [city, setCity] = useState('')
    const [error, setError] = useState(false)
    const [stats, setStats] = useState('')
    const [country, setCountry] = useState('')
    const [inputValue, setInputValue] = useState('')

    const fetchWeather = async (e) => {

        try {
            e.preventDefault()
            const API_KEY = 'c4c2799d2e1ee7be23a5edba8cb75913'
            const API_URL = `https://api.openweathermap.org/data/2.5/weather?q=${inputValue}&units=metric&appid=${API_KEY}&lang=ru`
            const response = await axios.get(API_URL)
            setWeather(response.data.main)
            setCity(response.data.name)
            setCountry(response.data.sys.country)
            setStats(response.data)
            if (inputValue == '') {
                return (
                    setError(true),
                        setWeather(null)
                )
            }
            console.log(error)
            setInputValue('')
            setError(false)
            console.log(response.data)
            console.log(response.data.name)
            console.log(error)
        }
        catch (e) {
            setError(true)
            console.log(`City not founded. Please, check your input field 😊`)
        }
    }

    // useEffect(() => {
    //     fetchWeather()
    // }, [])

    return (
        <WeatherContext.Provider value={{fetchWeather, city, weather, country, stats, inputValue, setInputValue}}>
            <Container className='wrapper'>
                {error && <Alert variant='secondary'> sdfsdf </Alert>}
                <Row>
                    <Col>
                        {city && country ? <Location/> : null}
                    </Col>
                    <Col>
                        {<WeatherSearch/>}
                    </Col>
                </Row>
                <Row>
                    <Col style={{borderRight: '1px solid white'}}>
                        {weather && stats ? <Temperature/> : <div></div>}
                    </Col>
                    <Col>
                        {weather && stats ? <Stats/> : <div></div>}
                    </Col>
                </Row>
                <Row>
                    {city && country ? <Forecast /> : null}
                </Row>

                {/*{error !== null && <p>{error}</p>}*/}
                {/*{weather !== null && <Temperature/>}*/}

            </Container>
        </WeatherContext.Provider>
    )
}

export default Weather
