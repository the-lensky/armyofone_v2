import React, {useRef, useState} from 'react'
import {Button, Form, Overlay, Container, Tooltip} from 'react-bootstrap'
import './todo-input.css'

const TodoInput = ({onSubmitHandler, handleChangeInputValue, addTodoHandler, inputValue}) => {
    const btn = useRef(null)
    const [showToolTip, setShowToolTip] = useState(false)


    return (
        <Container className='input'>
            <Form
                className='form'
                onSubmit={onSubmitHandler}>
                <Form.Group
                    style={{width: '600px'}}
                >
                    <Form.Control
                        placeholder="Add todo.."
                        value={inputValue}
                        onChange={handleChangeInputValue}
                        type="text"/>
                </Form.Group>
                <div
                    onMouseEnter={() => setShowToolTip(inputValue.length < 5 )}
                    onMouseLeave={() => setShowToolTip(false)}>
                    <Button
                        className='btn'
                        style={{}}
                        variant="primary"
                        type="submit"
                        disabled={inputValue.length < 6}
                        ref={btn}
                    >
                        Submit
                    </Button>
                    <Overlay target={btn.current} show={showToolTip} placement="bottom">
                        {(props) => (
                            <Tooltip
                                className="tooltip"
                                {...props}
                            >
                                Minimum lenth of todos is 6 simbols..
                            </Tooltip>
                        )}
                    </Overlay>
                </div>
            </Form>
        </Container>
    )
}

export default TodoInput
