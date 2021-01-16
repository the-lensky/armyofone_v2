import React from 'react'
import './user-item.css'
import Table from 'react-bootstrap/Table'

const UserItem = ({users, removeUserHandler}) => {

    return (
        <>
            <Table hover>
                <thead>
                <tr>
                    <th className='text-center'>User's id</th>
                    <th>Name</th>
                    <th>City</th>
                    <th>Phone</th>
                    <th>Company</th>
                    <th>Email</th>
                    <th className='text-center'>Delete</th>
                </tr>
                </thead>
                <tbody>
                {users.map((user, idx) => {
                    return (
                        <tr key={idx}>
                            <td className='text-center'>{idx + 1}</td>
                            <td>{user.name}</td>
                            <td>{user.address.city}</td>
                            <td>{user.phone}</td>
                            <td>{user.company.name}</td>
                            <td>{user.email}</td>

                            <td
                                onClick={() => removeUserHandler(user.id)}
                                className='text-center'>
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                                     className="bi bi-trash-fill icon" viewBox="0 0 16 16">
                                    <path
                                        d="M2.5 1a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1H3v9a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V4h.5a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H10a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1H2.5zm3 4a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 .5-.5zM8 5a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7A.5.5 0 0 1 8 5zm3 .5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 1 0z"/>
                                </svg>
                            </td>
                        </tr>
                    )
                })}
                </tbody>
            </Table>
        </>
    )
}

export default UserItem
