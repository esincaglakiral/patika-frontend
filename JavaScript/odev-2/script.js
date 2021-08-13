const todoForm = document.getElementById("todo-form");
const todoList = document.getElementById("list");
let tasks = JSON.parse(localStorage.getItem("tasks")) || [];

if (localStorage.getItem("tasks")) {
  tasks.map((task) => {
    createTask(task);
  });
}

// submit form
todoForm.addEventListener("submit", function (e) {
  e.preventDefault();
  let input = this.name;
  let inputValue = input.value;

  if (inputValue.trim()) {
    const task = {
      id: new Date().getTime(),
      name: inputValue,
      isCompleted: false,
    };

    tasks.push(task);
    localStorage.setItem("tasks", JSON.stringify(tasks));
    createTask(task);
    todoForm.reset();
    alert("listeye eklendi");
  } else {
    alert("geçersiz giriş");
  }
  input.focus();
});

// prevent new lines with Enter
todoList.addEventListener("keydown", function (e) {
  if (e.keyCode === 13) {
    e.preventDefault();
  }
});

// create task
function createTask(task) {
  const taskEl = document.createElement("li");
  taskEl.classList.add("todoItem");
  if (task.isCompleted) {
    taskEl.classList.add("checked");
  }
  taskEl.setAttribute("id", task.id);
  taskEl.addEventListener("click", checkTask);
  const taskElMarkup = `${task.name} <span onclick="removeTask(${task.id})" class="close">×</span>`;
  taskEl.innerHTML = taskElMarkup;
  todoList.appendChild(taskEl);
}

function checkTask(e) {
  e.target.classList.toggle("checked");
  let checkThisTask = tasks.find((task) => task.id === parseInt(e.target.id));
  checkThisTask.isCompleted = !checkThisTask.isCompleted;
  localStorage.setItem("tasks", JSON.stringify(tasks));
}

// remove task
function removeTask(taskId) {
  tasks = tasks.filter((task) => task.id !== parseInt(taskId));
  localStorage.setItem("tasks", JSON.stringify(tasks));
  document.getElementById(taskId).remove();
}
