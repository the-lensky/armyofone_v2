import React from 'react'
import './App.css'
import {Route} from 'react-router-dom'
import AboutMe from '../about-me'
import NavBar from '../nav-bar'
import Weather from '../weather'
import UserTable from '../user-table'
import TodoList from '../todo/todo-list'
// import Music from '../music'

function App() {
    return (
        <div className="App">
            <NavBar/>
            <div>
                <Route exact path='/usertable' component={UserTable}/>
                <Route exact path='/weather' component={Weather}/>
                <Route exact path='/todolist' component={TodoList}/>
                <Route exact path='/' component={AboutMe}/>
                {/*<Route exact path='/music' component={Music}/>*/}
            </div>
        </div>
    )
}

export default App
