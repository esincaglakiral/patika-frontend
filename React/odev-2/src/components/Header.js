import { useState } from 'react'

function Header({ addTodo }) {
  const [title, setTitle] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    addTodo(title)
    setTitle('')
  }

  return (
    <header className="header">
      <h1>todos</h1>
      <form onSubmit={handleSubmit}>
        <input 
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="new-todo" placeholder="What needs to be done?" autoFocus 
        />
      </form>
    </header>
  )
}

export default Header
