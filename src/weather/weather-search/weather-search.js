import React, {useContext} from 'react'
import WeatherContext from '../contex/contex'

const WeatherSearch = () => {
    const { fetchWeather, city } = useContext(WeatherContext)
    return (
        <div>
            <form
                onSubmit={fetchWeather}
            >
                <input
                    type="text"
                    name='city'
                    autoComplete='off'
                />
                <button>search</button>
            </form>

        </div>
    )
}

export default WeatherSearch