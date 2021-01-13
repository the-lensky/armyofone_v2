import React, {useState, useEffect} from 'react'
import axios from 'axios'
import {useHistory, useParams} from 'react-router-dom'

const API_URL = 'https://jsonplaceholder.typicode.com/users'

const EditUserTEST = ({users}) => {
    console.log(users)

    let history = useHistory()
    const {id} = useParams()
    const [editUser, setEditUser] = useState({
        name: '',
        phone: '',
        email: ''
    })
    const {name, phone, email} = editUser

    const onInputChange = e => {
        setEditUser({...editUser, [e.target.name]: e.target.value})
    }

    useEffect(() => {
        loadUser()
    }, [])

    const loadUser = async () => {
        const result = await axios.get(`${API_URL}/${id}`)
        setEditUser(result.data)
    }

    const onSubmit = async e => {
        e.preventDefault()
        await axios.put(`${API_URL}/${id}`, editUser)
        history.push('/usertable')
    }
    console.log(editUser)
    //
    return (
        <div className="container">
            <div className="w-75 mx-auto">
                <h2 className="text-center mb-4">Edit A User</h2>
                <form onSubmit={e => onSubmit(e)}>
                    <div className="form-group">
                        <input
                            type="text"
                            className="form-control form-control-lg"
                            placeholder="name"
                            name="name"
                            value={name}
                            onChange={e => onInputChange(e)}
                        />
                    </div>
                    {/*<div className="form-group">*/}
                    {/*    <input*/}
                    {/*        type="text"*/}
                    {/*        className="form-control form-control-lg"*/}
                    {/*        placeholder="city"*/}
                    {/*        name="city"*/}
                    {/*        value={editUser.address.city}*/}
                    {/*        onChange={e => onInputChange(e)}*/}
                    {/*    />*/}
                    {/*</div>*/}
                    <div className="form-group">
                        <input
                            type="text"
                            className="form-control form-control-lg"
                            placeholder="Phone"
                            name="phone"
                            value={phone}
                            onChange={e => onInputChange(e)}
                        />
                    </div>
                    {/*<div className="form-group">*/}
                    {/*    <input*/}
                    {/*        type="text"*/}
                    {/*        className="form-control form-control-lg"*/}
                    {/*        placeholder="Company"*/}
                    {/*        name=" company"*/}
                    {/*        value={editUser.company.bs}*/}
                    {/*        onChange={e => onInputChange(e)}*/}
                    {/*    />*/}
                    {/*</div>*/}
                    <div className="form-group">
                        <input
                            type="text"
                            className=" form-control form-control-lg"
                            placeholder="email"
                            name=" email"
                            value={email}
                            onChange={e => onInputChange(e)}
                        />
                    </div>
                    <button className=" btn btn-warning btn-block">Update User</button>
                </form>
            </div>
        </div>
    )
}

export default EditUserTEST