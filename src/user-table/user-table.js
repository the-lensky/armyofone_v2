import React, {useEffect, useState} from 'react'
import axios from 'axios'
import UserItem from './user-item/user-item'
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


    const getUsersData = async () => {
        setLoadingData(true)
        try {
            const response = await axios.get(API_URL)
            getUsers(response.data)
            setLoadingData(false)
        } catch (e) {
            setLoadingData(false)
            console.log(`You've got error ${e}`)
        }
    }

    const removeUserHandler = (id) => {
        getUsers(users.filter(user => user.id !== id))
    }

    if (showButton) {
        return (
            <div>
                <button
                    onClick={() => setShowButton(false)}>
                    Push me
                </button>
            </div>
        )
    }

    if (loadingData) {
        return (
            <div>
                <h1>
                    Loading...
                </h1>
            </div>
        )
    }

    return (
        <div>
            <UserItem
                users={users}
                removeUserHandler={removeUserHandler}
            />
        </div>
    )

}

export default UserTable
