import React, {useState} from 'react'
import {ListGroup} from 'react-bootstrap'
import './todo-item.css'
import {XCircle} from 'react-bootstrap-icons'

const TodoItem = ({todo, toogleCompletedHandler}) => {
    const [size, setSize] = useState(18)
    return (
        <ListGroup className={'list-group'}>
            <ListGroup.Item
                variant={todo.isComlete ? 'secondary' : 'primary'}
                className={'item'}
            >
                <input
                    checked={todo.isComlete ? 1 : 0}
                    type="checkbox"
                    onClick={() => toogleCompletedHandler(todo.id)}
                />
                <p className={`todoItem ${todo.isComlete ? 'line-through' : null}`}>{todo.text}</p>
                <div
                    className='icon'
                >
                    {/*<XCircle*/}
                    {/*    size={size}*/}
                    {/*    onMouseEnter={() => setSize(25)}*/}
                    {/*    onMouseLeave={() => setSize(18)}*/}
                    {/*/>  */}
                    <XCircle   className='xcircle' />
                </div>
            </ListGroup.Item>
        </ListGroup>

    )
}

export default TodoItem
