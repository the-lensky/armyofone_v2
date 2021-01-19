import React, {useEffect, useState} from 'react'
import axios from 'axios'

import './weather.css'

import WeatherContext from './contex/contex'
import {Col, Row,Container} from 'react-bootstrap'

import Temperature from './temperature'
import WeatherSearch from './weather-search'
import Location from './location/location'



const Weather = () => {

    const [weather, setWeather] = useState('')
    const [city, setCity] = useState('')
    const [error, setError] = useState(false)
    const [country, setCountry] = useState('')

    const fetchWeather = async (e) => {

        try {
            e.preventDefault()
            const location = e.target.elements.city.value
            if (!location) {
                return (
                    setError('Please enter the name of the city'),
                        setWeather(null)
                )
            }
            const API_KEY = 'c4c2799d2e1ee7be23a5edba8cb75913'
            const API_URL = `https://api.openweathermap.org/data/2.5/weather?q=${location}&units=metric&appid=${API_KEY}`
            const response = await axios.get(API_URL)
            setWeather(response.data.main)
            setCity(response.data.name)
            setCountry(response.data.sys.country)
            console.log(response.data)
            console.log(response.data.name)
        }
        catch (e) {
            setError(true)
            console.log(`City not founded ${e}`)
        }
    }

    useEffect(() => {
        fetchWeather()
    }, [])

    return (<WeatherContext.Provider value={{fetchWeather, city, weather, country}}>
            <Container className='wrapper'>
                <Row>
                    <Col>
                        <Location />
                    </Col>
                    <Col>
                        <WeatherSearch className=''/>
                    </Col>
                </Row>

                {error !== null && <p>{error}</p>}
                {weather !== null && <Temperature/>}

            </Container>
        </WeatherContext.Provider>
    )
}

export default Weather
