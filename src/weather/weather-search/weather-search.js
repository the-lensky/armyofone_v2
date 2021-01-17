import React, {useContext} from 'react'
import WeatherContext from '../contex/contex'
import {Container} from 'react-bootstrap'
import './weather-search.css'

const WeatherSearch = () => {
    const { fetchWeather } = useContext(WeatherContext)
    return (
        <Container
            className='search'
        >
            <form
                className='form'
                onSubmit={fetchWeather}
            >
                <input
                    className='search'
                    type="text"
                    name='city'
                    autoComplete='off'
                />
                <button>search</button>
            </form>

        </Container>
    )
}

export default WeatherSearch