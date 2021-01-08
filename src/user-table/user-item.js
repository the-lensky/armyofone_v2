import React from 'react'
import TableContainer from '@material-ui/core/TableContainer'
import Paper from '@material-ui/core/Paper'
import Table from '@material-ui/core/Table'
import TableHead from '@material-ui/core/TableHead'
import TableRow from '@material-ui/core/TableRow'
import TableCell from '@material-ui/core/TableCell'
import TableBody from '@material-ui/core/TableBody'

const UserItem = () => {
    return (
        <div>
            <TableContainer component={Paper}>
                <Table size="medium" aria-label="a dense table">
                    <TableHead>
                        <TableRow>
                            <TableCell>USER LIST id</TableCell>
                            <TableCell align="right">Name</TableCell>
                            <TableCell align="right">City</TableCell>
                            <TableCell align="right">Phone</TableCell>
                            <TableCell align="right">Website</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>

                        <TableRow>
                            <TableCell component="th">1 </TableCell>
                            <TableCell align="right">richard</TableCell>
                            <TableCell align="right">Pinks</TableCell>
                            <TableCell align="right">3dasdasdasd</TableCell>
                            <TableCell align="right">bongacams,com</TableCell>
                        </TableRow>

                    </TableBody>
                </Table>
            </TableContainer>
        </div>
    )
}

export default UserItem
