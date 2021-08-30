function Main({ todos, filter, checkTodo, checkAllTodos, destroyTodo }) {
  let filtered = [...todos]

  if (filter !== 'all') {
    filtered = todos.filter((todo) => (
      filter === 'active' ? todo.isCompleted === false : todo.isCompleted === true
    ))
    console.log(filtered)
  }

  return (
    <section className="main">
      <input className="toggle-all" type="checkbox" />
      <label onClick={checkAllTodos} htmlFor="toggle-all">Mark all as complete</label>

      <ul className="todo-list">
        {
          filtered.map((todo) => (
            <li key={todo.id} className={todo.isCompleted ? 'completed' : ''}>
              <div className="view">
                <input onClick={() => checkTodo(todo.id)} className="toggle" type="checkbox" checked={todo.isCompleted} onChange={() => {}} />
                <label>{todo.title}</label>
                <button onClick={() => destroyTodo(todo.id)} className="destroy"></button>
              </div>
            </li>
          ))
        }
      </ul>
    </section>
  )
}

export default Main
