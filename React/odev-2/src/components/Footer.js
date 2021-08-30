function Footer({ todos, filter, changeFilter, clearCompleted }) {
  const itemsLeft = todos.filter((todo) => !todo.isCompleted).length

  return (
    <footer className="footer">
      <span className="todo-count">
        <strong>{itemsLeft}</strong> item{itemsLeft > 1 && 's'} left
      </span>

      <ul className="filters">
        <li>
          <a href="#/" className={filter === 'all' ? 'selected' : ''} onClick={() => changeFilter('all')}>All</a>
        </li>
        <li>
          <a href="#/" className={filter === 'active' ? 'selected' : ''} onClick={() => changeFilter('active')}>Active</a>
        </li>
        <li>
          <a href="#/" className={filter === 'completed' ? 'selected' : ''} onClick={() => changeFilter('completed')}>Completed</a>
        </li>
      </ul>

      <button onClick={clearCompleted} className="clear-completed">Clear completed</button>
    </footer>
  )
}

export default Footer
