const todoList = document.getElementById("list");

let todos;
if (localStorage.getItem("todos")) {
  todos = localStorage.getItem("todos");
  todos = JSON.parse(todos);
} else {
  todos = [];
}

function onLoad() {
  todos.map((todo) => {
    let newTodo = document.createElement("li");
    newTodo.setAttribute("id", todo.id);
    newTodo.setAttribute("onclick", tickTodo(todo.id));
    newTodo.innerHTML = `${todo.text} <span onclick="deleteTodo(${todo.id})" class="close">×</span>`;
    todoList.appendChild(newTodo);
  });
}

onLoad();

function newElement() {
  let todoInput = document.getElementById("task");
  let id = Date.now();
  if (todoInput.value.trim()) {
    todos.push({ id: id, text: todoInput.value, isChecked: false });
    localStorage.setItem("todos", JSON.stringify(todos));
    let newTodo = document.createElement("li");
    newTodo.setAttribute("id", id);
    newTodo.setAttribute("onclick", `tickTodo(${id})`);
    newTodo.innerHTML = `${todoInput.value} <span onclick="deleteTodo(${id})" class="close">×</span>`;
    todoList.appendChild(newTodo);
    todoInput.value = "";
    alert("listeye eklendi");
  } else {
    alert("geçersiz giriş");
  }
}

function deleteTodo(id) {
  let deleteElement = document.getElementById(id).remove();
  let deleteIndex = todos.findIndex((todo) => todo.id === id);
  todos.splice(deleteIndex, 1);
  localStorage.setItem("todos", JSON.stringify(todos));
}

function tickTodo(id) {
  let tickElement = document.getElementById(id);
  let tickIndex = todos.findIndex((todo) => todo.id === id);
  todos[tickIndex].isChecked = !todos[tickIndex].isChecked;
  localStorage.setItem("todos", JSON.stringify(todos));

  tickElement.classList.toggle("checked");

  console.log("checklendi");
}
