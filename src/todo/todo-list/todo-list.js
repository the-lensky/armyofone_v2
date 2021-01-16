import React, {useEffect, useState} from 'react'
import TodoItem from '../todo-item'
import './todo-list.css'
import {FormGroup, Button, Container, FormControl, InputGroup, Form} from 'react-bootstrap'


const API_URL = 'https://jsonplaceholder.typicode.com/todos'

const TodoList = () => {

    const [todos, setTodos] = useState([
        {id: 1, text: 'Позвонить Ленке', isComlete: false},
        {id: 2, text: 'Написать Ксюше', isComlete: true},
        {id: 3, text: 'Пригласить Катю', isComlete: false}
    ])
    const [inputValue, setInputValue] = useState('')
    const [btnDisable, setBtnDisable] = useState(true)


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
        if (inputValue.trim() && inputValue.length >5) {
            addTodoHandler(inputValue)
            setInputValue('')
        }
    }

    // if(inputValue.length>5){
    //     setBtnDisable(false)
    // }

    return (
        <Container style={{margin: '0 auto', width: '600px'}}>
            <h3 className='todo-header'>TODO LIST</h3>
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
                <Button
                    style={{height: 'fit-content',width:'100px'}}
                    variant="primary"
                    type="submit"
                    disabled={inputValue.length > 5 ? false : true}
                >
                    Submit
                </Button>
            </Form>
        </Container>
    )
}

export default TodoList
