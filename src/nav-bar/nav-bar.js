import React from 'react'
import './nav-bar.css'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'
import ListAltIcon from '@material-ui/icons/ListAlt'
import InfoIcon from '@material-ui/icons/Info'
import WbSunnyIcon from '@material-ui/icons/WbSunny'

import {Link} from 'react-router-dom'

const NavBar = () => {

    return (
        <div>
            <AppBar position="static">
                <Toolbar>
                    <Typography variant="h5">
                        ARMYOFONE_v2
                    </Typography>
                    <Link
                        className='main'
                        to='usertable'>
                        <Button
                            endIcon={<ListAltIcon/>}
                        >USER TABLE
                        </Button>
                    </Link>

                    <Link
                        to=''
                        className='main'
                    >
                        <Button
                            endIcon={<InfoIcon/>}
                        > ABOUT ME </Button>
                    </Link>
                    <Link
                        to='weather'
                        className='main'
                    >
                        <Button
                            endIcon={<WbSunnyIcon/>}
                        >WEATHER</Button>
                    </Link>
                </Toolbar>
            </AppBar>
        </div>
    )
}

export default NavBar
