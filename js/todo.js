const toDoForm = document.getElementById("todo-form");
const toDoInput = document.querySelector("#todo-form input");
const toDoList = document.getElementById("todo-list");

const TODOS_KEY = "todos";

let savedTodos;
let toDos = [];

function doneTodo(event) {
    const todoItem = event.target;
    let parseTodos = JSON.parse(savedTodos);
    parseTodos.forEach((obj, index) => {
      if (obj.id === parseInt(todoItem.value)) {
        if (todoItem.checked) {
          toDos[index].done = true;
        } else {
          toDos[index].done = false;
        }
      }
    });
    saveToDos();
  }

function saveToDos(){
    localStorage.setItem(TODOS_KEY, JSON.stringify(toDos));
    savedTodos = localStorage.getItem(TODOS_KEY);
}

function deleteToDo(event){
    const li = event.target.parentElement;
    li.remove();
    toDos = toDos.filter((toDo) => toDo.id !== parseInt(li.id));
    saveToDos();
}

function paintToDo(newTodo){
    const li = document.createElement("li");
    li.id = newTodo.id;
    const span = document.createElement("span");
    span.classList = "todo-span";
    const input = document.createElement("input");
    input.type= "checkbox";
    input.id = `checkbox${newTodo.id}`;
    input.classList = "items";
    input.value = newTodo.id;
    if(newTodo.done){
        input.checked = true;
    }
    const label = document.createElement("label");
    label.htmlFor = `checkbox${newTodo.id}`;
    label.textContent = newTodo.text;
    const button = document.createElement("img");
    button.src = `img/delete.png`;
    button.classList = "delete";
    button.addEventListener("click", deleteToDo);
    span.appendChild(input);
    span.appendChild(label);
    li.appendChild(span);
    li.appendChild(button);
    toDoList.appendChild(li);
    const toDoCheckbox = document.querySelectorAll(".items");
    toDoCheckbox.forEach((checkbox) => {
    checkbox.addEventListener("change", doneTodo);
    });
}

function handleToDoSubmit(event){
    event.preventDefault();
    const newTodo = toDoInput.value;
    toDoInput.value = "";
    const newTodoObj = {
        text: newTodo,
        id: Date.now(),
        done: false,
    };
    toDos.push(newTodoObj);
    paintToDo(newTodoObj);
    saveToDos();
}

toDoForm.addEventListener("submit", handleToDoSubmit);

const savedToDos = localStorage.getItem(TODOS_KEY);

if(savedToDos !== null){
    toDos = JSON.parse(savedToDos);
    toDos.forEach(paintToDo);
}