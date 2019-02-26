const rootNode = document.getElementById('root');
const zero = 0;
const nine = 9;
let taskId = localStorage.getItem('id') ? parseInt(localStorage.getItem('id')) : zero;
const todoItems = [];

setTodoItems();


//{isDone: false, id: 12345, description: 'Todo 1'}


// Your code goes here

function setTodoItems() {
    for (let key in localStorage) {
        if (localStorage.hasOwnProperty(key)) {
            let item = JSON.parse(localStorage[key]);
            if (item.hasOwnProperty('isDone')) {
                todoItems.push(JSON.parse(localStorage.getItem(key)));
            }
        }
    
    }
}
function createAddPage() {
    let page = `<div id="add">
    <h2>Add task</h2>
    <div class="action-area">
      <input type="text" id="task-input" placeholder="Add new task"><br>
      <a  href=" ">Cancel</a>
      <button onclick="addTask()">Save changes</button>
    </div>
  </div>`
    rootNode.innerHTML = page;
}

function createModifyPage() {
    let page = `<div id="modify">
    <h2>Modify item</h2>
    <div class="action-area">
      <input type="text" id="modify-input" placeholder="Modify task description"><br>
      <a  href=" ">Cancel</a>
      <button onclick="changeDescription()">Save changes</button>
    </div>
  </div>`
  rootNode.innerHTML = page;
}

function createPage() {
if (location.hash === '#/add') {
    createAddPage();
}

}

function createList(arr) {
    //window.location.href = ' ';
    if (arr.length > zero) {
        document.getElementById('is-empty').classList.add('hidden');
        let list = document.getElementById('tasks-list');
        list.innerHTML = '';
        let len = arr.length;
        for (let i = 0; i < len; i++) {
            if (arr[i].hasOwnProperty('description')) {
                let li = document.createElement('li');
                let src = arr[i] ? './assets/img/done-s.png' :'./assets/img/todo-s.png';
                li.innerHTML = `<img src=${arr[i].isDone ? './assets/img/done-s.png' :'./assets/img/todo-s.png'} 
                onclick="checkDone(this)"><a name = ${arr[i].id} class="description" 
                onclick = "modifyTask(this.name, this.innerText)">${arr[i].description}</a>
                <img src="./assets/img/remove-s.jpg" onclick="deleteTask(this.previousElementSibling.name)">`;
                list.appendChild(li);
            }
        }
    } else {
        document.getElementById('is-empty').classList.remove('hidden');
    }

}

function modifyTask(id, text) {
    
    location.hash = `#/modify/${id}`;
    createModifyPage();
    document.getElementById('modify-input').value = text;
    //alert(id+text);
}
function changeDescription() {
    let id = location.hash.substring(nine);
    let input = document.getElementById('modify-input').value;
    localStorage.setItem(`todo-${id}`, JSON.stringify({ isDone: false, id: id, description: input }));
    todoItems.length = 0;
    window.location.href = ' ';
    //alert(input);
}

function deleteTask(task) {
    localStorage.removeItem(`todo-${task}`)
    document.getElementById('tasks-list').innerHTML='';
    todoItems.length = 0;
    setTodoItems()
    createList(todoItems);
    //alert(task);
}

function checkDone(img) {
    img.src = './assets/img/done-s.png';
    img.classList.add('disabled');
    localStorage.setItem(`todo-${img.nextElementSibling.name}`, 
    JSON.stringify({isDone: true, id: img.nextElementSibling.name, description: img.nextElementSibling.innerText }));
}
function addTask() {
    let input = document.getElementById('task-input').value;
    //todoItems.push({isDone: false, id: taskId, description: input});
    if (input.length > zero) {
        localStorage.setItem(`todo-${taskId}`, JSON.stringify({ isDone: false, id: taskId, description: input }));
        localStorage.setItem('id', ++taskId);
        window.location.href = ' ';
    }
    //createList(todoItems);

}

//rootNode.appendChild(/* Append your list item node*/);
window.addEventListener('hashchange', createPage);
document.onload = createList(todoItems);
