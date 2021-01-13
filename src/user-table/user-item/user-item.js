import React from 'react'
import './user-item.css'

const UserItem = ({users, removeUserHandler}) => {
    return (
        <h1>ghbdtn</h1>
        // <TableContainer>
        //     <TableContainer component={Paper}>
        //         <Table size="medium" aria-label="a dense table">
        //             <TableHead>
        //                 <TableRow>
        //                     <TableCell align="center">User's id</TableCell>
        //                     <TableCell align="center">Name</TableCell>
        //                     <TableCell align="center">City</TableCell>
        //                     <TableCell align="center">Phone</TableCell>
        //                     <TableCell align="center">Website</TableCell>
        //                     <TableCell align="center">Deleted</TableCell>
        //                 </TableRow>
        //             </TableHead>
        //             <TableBody>
        //                 {users.map((user, idx) => {
        //                     return (
        //                         <TableRow key={idx}>
        //                             <TableCell align="center">{idx + 1} </TableCell>
        //                             <TableCell align="center">{user.name}</TableCell>
        //                             <TableCell align="center">{user.address.city}</TableCell>
        //                             <TableCell align="center">{user.phone}</TableCell>
        //                             <TableCell align="center">{user.website}</TableCell>
        //                             <TableCell align="center" className='main'>
        //                                 <div className='miniflex'>
        //                                     <DeleteForeverIcon
        //                                         style={{color:'#f50057'}}
        //                                         className='icon'
        //                                         fontSize='small'
        //                                         onClick={() => removeUserHandler(user.id)}
        //                                     />
        //                                 </div>
        //                             </TableCell>
        //                         </TableRow>
        //                     )
        //                 })}
        //             </TableBody>
        //         </Table>
        //     </TableContainer>
        // </TableContainer>
    )
}

export default UserItem
