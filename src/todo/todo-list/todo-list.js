import React, {useEffect, useRef, useState} from 'react'
import TodoItem from '../todo-item'
import './todo-list.css'
import {Container, Alert} from 'react-bootstrap'
import {v4 as uuidv4} from 'uuid'
import TodoInput from '../todo-input/todo-input'


const TodoList = () => {

    const localTodos = JSON.parse(localStorage.getItem('todos'))

    const [todos, setTodos] = useState(localTodos || [])
    const [inputValue, setInputValue] = useState('')
    const [unCompletedTodos, setUncompletedTodos] = useState(() => {
        const filtred = todos.filter(todo => !todo.isComlete)
        return filtred.length
    })
    // const [showToolTip, setShowToolTip] = useState(false)
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
        <>
            {
                !todos.length
                    ?
                    <Container
                        className='wrap'
                    >
                        <Alert
                            className='alert'
                            variant='danger'>
                            Wow, you have no todos! :)
                        </Alert>
                    </Container>
                    :
                    <Container
                        className='wrap'
                    >
                        <h3 className='todo-header'>I have <span
                            style={{color: '#f48fb1'}}> {unCompletedTodos} </span> uncompleted
                            todos of {todos.length}</h3>
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
                    </Container>
            }
            <TodoInput
                onSubmitHandler={onSubmitHandler}
                handleChangeInputValue={handleChangeInputValue}
                addTodoHandler={addTodoHandler}
                inputValue={inputValue}
            />
        </>
    )
}

export default TodoList
