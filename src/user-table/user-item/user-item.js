import React from 'react'
import './user-item.css'
import {Link} from 'react-router-dom'
import TableContainer from '@material-ui/core/TableContainer'
import Paper from '@material-ui/core/Paper'
import Table from '@material-ui/core/Table'
import TableHead from '@material-ui/core/TableHead'
import TableRow from '@material-ui/core/TableRow'
import TableCell from '@material-ui/core/TableCell'
import TableBody from '@material-ui/core/TableBody'
import DeleteForeverIcon from '@material-ui/icons/DeleteForever'
import PermIdentityIcon from '@material-ui/icons/PermIdentity'


const UserItem = ({users, removeUserHandler}) => {
    console.log(users)
    return (
        <TableContainer>
            <TableContainer component={Paper}>
                <Table size="medium" aria-label="a dense table">
                    <TableHead>
                        <TableRow>
                            <TableCell align="center">User's id</TableCell>
                            <TableCell align="center">Name</TableCell>
                            <TableCell align="center">City</TableCell>
                            <TableCell align="center">Phone</TableCell>
                            <TableCell align="center">Website</TableCell>
                            <TableCell align="center">More info \ Deleted</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {users.map((user, idx) => {
                            return (
                                <TableRow key={idx}>
                                    <TableCell align="center">{idx + 1} </TableCell>
                                    <TableCell align="center">{user.name}</TableCell>
                                    <TableCell align="center">{user.address.city}</TableCell>
                                    <TableCell align="center">{user.phone}</TableCell>
                                    <TableCell align="center">{user.website}</TableCell>
                                    <TableCell align="center" className='main'>
                                        <div className='miniflex'>
                                            <Link
                                                to='userinfo'
                                            >
                                                <PermIdentityIcon
                                                    className='icon'
                                                    style={{color: 'rgba(31,205,55, 0.8)'}}
                                                    color='action'
                                                    fontSize='small'
                                                />
                                            </Link>
                                            <DeleteForeverIcon
                                                className='icon'
                                                color='error'
                                                fontSize='small'
                                                onClick={() => removeUserHandler(user.id)}
                                            />
                                        </div>
                                    </TableCell>
                                </TableRow>
                            )
                        })}
                    </TableBody>
                </Table>
            </TableContainer>
        </TableContainer>
    )
}

export default UserItem
