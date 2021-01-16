import React, {useEffect, useRef, useState} from 'react'
import TodoItem from '../todo-item'
import './todo-list.css'
import {Tooltip, Overlay, Button, Container, Form} from 'react-bootstrap'


const TodoList = () => {

    const [todos, setTodos] = useState([
        {id: 1, text: 'Позвонить Ленке', isComlete: false},
        {id: 2, text: 'Написать Ксюше', isComlete: true},
        {id: 3, text: 'Пригласить Катю', isComlete: false}
    ])
    const [inputValue, setInputValue] = useState('')
    const [unCompletedTodos, setUncompletedTodos] = useState(() => {
        const filtred = todos.filter(todo => !todo.isComlete)
        return filtred.length
    })
    const [showToolTip, setShowToolTip] = useState(false)
    const [disableBtn, setDisableBtn] = useState(true)

    const calculateUnCompletedTodos = () => {
        const filtredTodos = todos.filter(todo => !todo.isComlete)
        console.log(filtredTodos.length)
        setUncompletedTodos(filtredTodos.length)
    }

    useEffect(() => {
        calculateUnCompletedTodos()
    }, [todos])

    const btn = useRef(null)

    useEffect(() => {
        if (inputValue > 5) {
            setDisableBtn(false)
        }
    }, [inputValue])

    const toogleCompletedHandler = (id) => {
        setTodos(todos.map((todo) => {
            if (todo.id === id) {
                return {...todo, isComlete: !todo.isComlete}
            }
            return todo
        }))
    }

    const addTodoHandler = (inputValue) => {
        setTodos([
            ...todos,
            {
                id: todos.length + 1,
                text: inputValue,
                isComlete: false
            }
        ])
    }

    const handleChangeInputValue = e => {
        setInputValue(e.target.value)
    }

    const onSubmitHandler = (e) => {
        e.preventDefault()
        if (inputValue.trim() && inputValue.length > 5) {
            addTodoHandler(inputValue)
            setDisableBtn(true)
            setInputValue('')
        }
    }

    return (
        <Container style={{margin: '0 auto', width: '600px'}}>
            <h3 className='todo-header'>I have {unCompletedTodos} uncompleted todos..</h3>
            {todos.map((todo, id) => {
                return (
                    <TodoItem
                        key={id}
                        todo={todo}
                        toogleCompletedHandler={toogleCompletedHandler}
                    />
                )
            })}
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
                    onMouseEnter={() => setShowToolTip(true)}
                    onMouseLeave={() => setShowToolTip(false)}>
                    <Button
                        className='btn'
                        style={{}}
                        variant="primary"
                        type="submit"
                        disabled={inputValue.length < 5}
                        ref={btn}
                    >
                        Submit
                    </Button>
                    {
                        disableBtn
                            ? <Overlay target={btn.current} show={showToolTip} placement="bottom">
                                {(props) => (
                                    <Tooltip
                                        className="tooltip"
                                        {...props}
                                    >
                                        Minimum lenth of todos is 5 simbols..
                                    </Tooltip>
                                )}
                            </Overlay>
                            : <p> dasasddas </p>
                    }

                </div>

            </Form>
        </Container>
    )
}

export default TodoList
