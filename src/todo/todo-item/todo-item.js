import React from 'react'
import {ListGroup} from 'react-bootstrap'
import './todo-item.css'

const TodoItem = ({todo , toogleCompletedHandler}) => {
    return (
            <ListGroup className={'list-group'}>
                <ListGroup.Item
                    variant={todo.isComlete ? 'secondary' : 'primary'}
                    className={'item'}
                >
                    <input
                        checked={todo.isComlete ? 1 : 0}
                        type="checkbox"
                        onClick={() =>toogleCompletedHandler(todo.id)}
                    />
                   <p className={`todoItem ${todo.isComlete ? 'line-through' : null}`}>{todo.text}</p>
                </ListGroup.Item>
            </ListGroup>

    )
}

export default TodoItem
