import React, {useEffect, useState} from 'react'
import axios from 'axios'
import UserItem from './user-item/user-item'
import Button from '@material-ui/core/Button'
import Container from '@material-ui/core/Container'
import {Typography} from '@material-ui/core'
import './user-table.css'


const API_URL = 'https://jsonplaceholder.typicode.com/users'


const UserTable = () => {

    const [users, getUsers] = useState([])
    const [loadingData, setLoadingData] = useState(false)
    const [showButton, setShowButton] = useState(true)

    useEffect(() => {
        if (!showButton) {
            getUsersData()
        }
    }, [showButton])

    const usersContext = React.createContext()

    console.log(users)

    const getUsersData = async () => {
        setLoadingData(true)
        try {
            const response = await axios.get(API_URL)
            getUsers(response.data)
            setLoadingData(false)
        }
        catch (e) {
            setLoadingData(false)
            console.log(`You've got error ${e}`)
        }
    }

    const removeUserHandler = (id) => {
        getUsers(users.filter(user => user.id !== id))
    }

    if (showButton) {
        return (
            <div
                className='containerForShowBtn'>
                <Button
                    variant="contained"
                    color="secondary"
                    size="large"
                    onClick={() => setShowButton(false)}>
                    Push me
                </Button>
            </div>
        )
    }

    if (loadingData) {
        return (
            <Container
                className='containerForShowBtn'
                style={{display: 'flex'}}>
                <Typography
                    variant='h1'>
                    Loading...
                </Typography>
            </Container>
        )
    }

    return (
        <usersContext.Provider value={users}>
            <div className='table-container'>
                <UserItem
                    users={users}
                    removeUserHandler={removeUserHandler}
                />
            </div>
        </usersContext.Provider>
    )

}

export default UserTable
