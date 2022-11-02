const todoInput = document.querySelector(".works");
const todoButton = document.querySelector(".todo-button");
const todoList = document.querySelector(".todo-container");
const filterOption = document.querySelector(".filter-todos");
todoButton.addEventListener("click", addToDo);
todoList.addEventListener("click", checkremove);
filterOption.addEventListener("click", filterTodos);
function addToDo(_e) {
  _e.preventDefault();
  console.log(_e);
  // get to do value
  // creat nea to do
  // add to dom
  // reset input
  const todoDiv = document.createElement("div");

  todoDiv.classList.add("todo");
  const newTodo = `
    <li>${todoInput.value}</li>
    <span><i class="fa-solid fa-square-check"></i></span>
    <span><i class="fa-solid fa-trash"></i></span>
    <span><i class="fa-solid fa-pen-to-square"></i></span>
  `;
  todoDiv.innerHTML = newTodo;
  //   append to dom
  todoList.appendChild(todoDiv);
  todoInput.value = "";
}
function checkremove(e) {
  const classList = [...e.target.classList];
  const item = e.target;
  console.log(item.parentElement.parentElement);
  if (classList[1] === "fa-square-check") {
    const todo = item.parentElement.parentElement;
    todo.classList.toggle("completed");
  } else if (classList[1] === "fa-trash") {
    const todo = item.parentElement.parentElement;
    todo.remove();
  }
}
function filterTodos(e) {
  console.log(e.target.value);
  console.log(todoList.childNodes);
  const todos = [...todoList.childNodes];

  todos.forEach((todo) => {
    console.log(todo, e.target.value);
    switch (e.target.value) {
      case "all":
        todo.style.display = "flex";
        break;
      case "complited":
        if (todo.classList.contains("completed")) {
          todo.style.display = "flex";
        } else {
          todo.style.display = "none";
        }
        break;
      case "uncomplited":
        if (!todo.classList.contains("completed")) {
          todo.style.display = "flex";
        } else {
          todo.style.display = "none";
        }
        break;
    }
  });
}
