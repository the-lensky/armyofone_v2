import React, {useContext, useState} from 'react'
import WeatherContext from '../contex/contex'
import './weather-search.css'

const WeatherSearch = () => {
    const {fetchWeather, inputValue, setInputValue} = useContext(WeatherContext)
    return (
        <div
            className='weather-search-wrapper'
        >
            <form
                autoComplete="new-password"
                className='weather-form-search'
                onSubmit={fetchWeather}
            >
                <input
                    onChange={(e) => setInputValue(e.target.value)}
                    value={inputValue}

                    className='weather-search-input'
                    type="text"
                    name='city'
                    autoComplete="new-password"
                />
                <button
                    className='weather-search-btn'
                >Поиск
                </button>
            </form>
        </div>
    )
}

export default WeatherSearch