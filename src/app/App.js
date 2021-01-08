import React from 'react'
import './App.css'
//matui core
import {makeStyles} from '@material-ui/core/styles'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'
import IconButton from '@material-ui/core/IconButton'
import ListAltIcon from '@material-ui/icons/ListAlt'
import InfoIcon from '@material-ui/icons/Info'
import WbSunnyIcon from '@material-ui/icons/WbSunny'

//components
import {Route} from 'react-router-dom'
import AboutMe from '../about-me'
import NavBar from '../nav-bar'
import Weather from '../weather'
import UserTable from '../user-table'


const useStyles = makeStyles((theme) => ({
    test: {
        margin: '10px',
        fontSize: '1.5rem'
    },
    borderLeft: {
        borderLeft: '0.2rem solid',
        margin: '10px',
        fontSize: '1.5rem'
    }
}))

function App() {
    const classes = useStyles()
    return (
        <div className="App">
            <NavBar/>
            <div>
                <Route exact path='/usertable' component={UserTable}/>
                <Route exact path='/' component={AboutMe}/>
                <Route exact path='/weather' component={Weather}/>
            </div>
        </div>
    )
}

export default App
