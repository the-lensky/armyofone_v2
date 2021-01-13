import React from 'react'
import {FormControl, InputGroup} from 'react-bootstrap'
import './user-edit.css'

const UserEdit = ({users}) => {
console.log(users)
    return (
        <div className='container'>
            <InputGroup className="mb-3 input">
                <InputGroup.Prepend>
                    <InputGroup.Text id="basic-addon1">Name</InputGroup.Text>
                </InputGroup.Prepend>
                <FormControl

                    placeholder="Username"
                    aria-label="Name"
                    aria-describedby="basic-addon1"
                />
            </InputGroup>
            <InputGroup className="mb-3 input">
                <InputGroup.Prepend>
                    <InputGroup.Text id="basic-addon1">City</InputGroup.Text>
                </InputGroup.Prepend>
                <FormControl
                    placeholder="Username"
                    aria-label="Name"
                    aria-describedby="basic-addon1"
                />
            </InputGroup>
            <InputGroup className="mb-3 input">
                <InputGroup.Prepend>
                    <InputGroup.Text id="basic-addon1">Phone</InputGroup.Text>
                </InputGroup.Prepend>
                <FormControl
                    placeholder="Username"
                    aria-label="Name"
                    aria-describedby="basic-addon1"
                />
            </InputGroup>
            <InputGroup className="mb-3 input">
                <InputGroup.Prepend>
                    <InputGroup.Text id="basic-addon1">Company</InputGroup.Text>
                </InputGroup.Prepend>
                <FormControl
                    placeholder="Username"
                    aria-label="Name"
                    aria-describedby="basic-addon1"
                />
            </InputGroup>
            <InputGroup className="mb-3 input">
                <InputGroup.Prepend>
                    <InputGroup.Text id="basic-addon1">Website</InputGroup.Text>
                </InputGroup.Prepend>
                <FormControl
                    placeholder="Username"
                    aria-label="Name"
                    aria-describedby="basic-addon1"
                />
            </InputGroup>

        </div>
    )
}

export default UserEdit
