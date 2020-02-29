$.getJSON("http://api.openweathermap.org/data/2.5/weather?q=London,uk&units=imperial&APPID=fe3c35255b52ef32f71ab4c37b4c5acc",
  function (data) {
    console.log(data);
  });
var todoInput = document.querySelector("#todo-text");
var todoForm = document.querySelector("#todo-form");
var todoList = document.querySelector("#todo-list");
var todoCountSpan = document.querySelector("#todo-count");

var todos = ["Portland", "Boston", "Los Angeles"];

renderTodos();

function renderTodos() {

  todoList.innerHTML = "rendertodos";
  todoCountSpan.textContent = todos.length;

  for (var i = 0; i < todos.length; i++) {
    var todo = todos[i];

    var li = document.createElement("li");
    li.textContent = todo;
    todoList.appendChild(li);
  }
}

todoForm.addEventListener("submit", function (event) {
  event.preventDefault();

  var todoText = todoInput.value.trim();


  if (todoText === "") {
    return;
  }

  todos.push(todoText);
  todoInput.value = "";
  renderTodos();
});

//$(document).ready(function ()
//$("#getWeatherForecast").click(function () {






