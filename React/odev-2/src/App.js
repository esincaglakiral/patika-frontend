import { useState } from 'react'

import Header from './components/Header'
import Main from './components/Main'
import Footer from './components/Footer'

function App() {
  const [todos, setTodos] = useState([])

  const [filter, setFilter] = useState('all')

  const addTodo = (title) => {
    setTodos((prevState) => [ ...prevState, { id: Date.now(), title, isCompleted: false } ])
  }

  const checkTodo = (id) => {
    const index = todos.findIndex((todo) => todo.id === id)
    const newTodos = [...todos]
    newTodos[index].isCompleted = !newTodos[index].isCompleted
    setTodos(newTodos)
  }

  const checkAllTodos = () => {
    const newTodos =  [...todos]
    newTodos.forEach((todo) => {
      todo.isCompleted = true
    })
    setTodos(newTodos)
  }

  const destroyTodo = (id) => {
    const newTodos = todos.filter((todo) => todo.id !== id)
    setTodos(newTodos)
  }

  const clearCompleted = () => {
    console.log('cleared')
    setTodos([])
  }

  const changeFilter = (filterTitle) => {
    setFilter(filterTitle)
  }


  return (
    <section className="todoapp">
      <Header addTodo={addTodo} />
      <Main todos={todos} filter={filter} checkTodo={checkTodo} checkAllTodos={checkAllTodos} destroyTodo={destroyTodo} />
      <Footer todos={todos} filter={filter} changeFilter={changeFilter} clearCompleted={clearCompleted} />
    </section>
  )
}

export default App
