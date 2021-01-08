import React, {useEffect, useState} from 'react'
import UserItem from './user-item'

const API_URL = 'https://jsonplaceholder.typicode.com/users'

const UserTable = () => {
    const [users, getUsers] = useState([])
    const [loadingData, setLoadingData] = useState(false)
    const [showButton, setShowButton] = useState(true)

    const getUsersData = async () => {
        setLoadingData(true)
        try {
            const response = await fetch(API_URL)
            const data = await response.json()
            getUsers(data)
            setLoadingData(false)
        } catch (e) {
            setLoadingData(false)
            console.log(`You've got error ${e}`)
        }
    }

    useEffect(() => {
        if (!showButton) {
            getUsersData()
        }
    })

    if (showButton) {
        return (
            <button
                onClick={() => setShowButton(false)}> Push me </button>
        )
    }

    if (loadingData) {
        return <div>Loading...</div>
    }

    return (
        <div>
            <UserItem users={users}/>
        </div>
    )

}
export default UserTable
