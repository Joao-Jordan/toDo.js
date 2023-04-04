var listElement = document.querySelector("#app ul");
var inputElement = document.querySelector("#app input");
var buttonAddElement = document.querySelector("button.add");


var todoList = JSON.parse(localStorage.getItem("storageTodos")) || [];

function renderTodos() {
  
  listElement.innerHTML = "";
  for (todo of todoList) {
    var todoElement = document.createElement("li");
    var todoElement
    var todoText = document.createTextNode(todo);

    var delButtonElement = document.createElement("button");
    delButtonElement.textContent = "Deletar";

    var index = todoList.indexOf(todo);
    delButtonElement.setAttribute("onclick", "delTodo("+ index +")");

    todoElement.appendChild(todoText);
    todoElement.appendChild(delButtonElement);
    listElement.appendChild(todoElement);
  }
}

function addTodo() {
  if (inputElement.value != "") {
    var todoText = inputElement.value;

    todoList.push(todoText);
    inputElement.value = "";

    renderTodos();
    saveTodo();
  }
}

function delTodo(index) {
  todoList.splice(index, 1);
  renderTodos();
  saveTodo();
}

function saveTodo(){
  localStorage.setItem("storageTodos", JSON.stringify(todoList));
}

renderTodos();
buttonAddElement.onclick = addTodo;
