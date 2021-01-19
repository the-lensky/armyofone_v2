import React, {useEffect, useRef, useState} from 'react'
import TodoItem from '../todo-item'
import './todo-list.css'
import {Tooltip, Overlay, Button, Container, Form} from 'react-bootstrap'
import {v4 as uuidv4} from 'uuid'


const TodoList = () => {

    const localTodos = JSON.parse(localStorage.getItem('todos')) || {}

    const [todos, setTodos] = useState(localTodos || [])
    const [inputValue, setInputValue] = useState('')
    const [unCompletedTodos, setUncompletedTodos] = useState(() => {
        const filtred = todos.filter(todo => !todo.isComlete)
        return filtred.length
    })
    const [showToolTip, setShowToolTip] = useState(false)
    const [disableBtn, setDisableBtn] = useState(true)

    localStorage.setItem('todos', JSON.stringify(todos))

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
                id: uuidv4(),
                text: inputValue,
                isComlete: false
            }
        ])
    }


    const deleteTodoHandler = (id) => {
        const filtred = todos.filter(todo => todo.id !== id)
        setTodos(filtred)
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
            <h3 className='todo-header'>I have <span style={{color:'#f48fb1'}}>{unCompletedTodos} </span> uncompleted todos of {todos.length}</h3>
            {todos.map((todo, idx) => {
                return (
                    <TodoItem
                        key={idx}
                        todo={todo}
                        toogleCompletedHandler={toogleCompletedHandler}
                        deleteTodoHandler={deleteTodoHandler}
                        handleChangeInputValue={handleChangeInputValue}
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

export default TodoList
