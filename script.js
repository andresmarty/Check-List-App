const classNames = {
  TODO_ITEM: 'todo-container',
  TODO_CHECKBOX: 'todo-checkbox',
  TODO_TEXT: 'todo-text',
  TODO_DELETE: 'todo-delete',
}

const list = document.getElementById('todo-list')
const itemCountSpan = document.getElementById('item-count')
const uncheckedCountSpan = document.getElementById('unchecked-count')

let itemCount = 0;
let uncheckedCount = 0;

function updateCounter() {
  itemCountSpan.innerHTML = itemCount;
  uncheckedCountSpan.innerHTML = uncheckedCount;
}

function newTodo() {
  var task = prompt("What's your new task?", "New TODO");

  if (task.length != 0) {
    itemCount += 1;
    uncheckedCount += 1;
    updateCounter();

    const todoList =  document.createElement('li');
    todoList.className = classNames.TODO_ITEM;
    todoList.id = itemCount;
    list.appendChild(todoList);

    const todoCheck = document.createElement('INPUT');
    todoCheck.className = classNames.TODO_CHECKBOX;
    todoCheck.id = 'myCheck' + itemCount;
    todoCheck.type = "checkbox";
    todoCheck.setAttribute("onClick", "checkTodo (this.id)");
    todoList.appendChild(todoCheck);
  

    const todoText = document.createTextNode(task);
    todoList.appendChild(todoText);

    const todoDelete = document.createElement("button");
    todoDelete.className = "todo-delete btn btn-danger btn-sm";
    todoDelete.innerText = "Delete";
    todoDelete.id = "myDelete";
    todoDelete.value = itemCount;
    todoDelete.setAttribute("onClick", "deleteTodo(this.value)");
    todoList.appendChild(todoDelete)
  }
}

function checkTodo(id) {
  const checkBox = document.getElementById(id);
  if (checkBox.clicked == true || checkBox.checked == true) {
    uncheckedCount -= 1;
    updateCounter();
  } else if (checkBox.clicked == true || checkBox.checked == false) {
    uncheckedCount += 1;
    updateCounter();
  }
}

function deleteTodo(value) {
  const check = document.getElementById('myCheck' + value).checked;
  const deleteButton = document.getElementById(value);
  deleteButton.parentNode.removeChild(deleteButton);
  if (check == false) {
    uncheckedCount -= 1;
    updateCounter();
  }

  itemCount -= 1;
  updateCounter();
}