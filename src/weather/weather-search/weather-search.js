import React, { useContext} from 'react'
import WeatherContext from '../contex/contex'
import './weather-search.css'

const WeatherSearch = () => {


    const { fetchWeather } = useContext(WeatherContext)
    return (
        <div className={'weather-search-wrapper'}>
            <form
                className='weather-form-search'
                onSubmit={fetchWeather}
            >
                <input
                    id='testid'
                    className='weather-search-input'
                    type="text"
                    name='city'
                    autoComplete='off'
                />
                <button
                    className='weather-search-btn'>search</button>
            </form>
        </div>
    )
}

export default WeatherSearch