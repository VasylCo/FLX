const zero = 0;
const maxListNumber = 10;
let listItems = 0;
let dragEl = null;

function allowDrop(e) {
    e.preventDefault();
}

function dragStart(e) {
    dragEl = this;
    e.dataTransfer.effectAllowed = 'move';
    e.dataTransfer.setData('text/html', this.innerHTML);
}

function dragDrop(e) {
    if (e.stopPropagation) {
        e.stopPropagation();
    }
    if (dragEl !== this) {
        dragEl.innerHTML = this.innerHTML;
        this.innerHTML = e.dataTransfer.getData('text/html');
    }
    let labels = document.querySelectorAll('.container');
    for (let i = 0; i< labels.length; i++) {
        labels[i].classList.remove('over');
    }
    return false;
}

function dragEnter(e) {
    this.classList.add('over');
}

function dragLeave(e) {
    this.classList.remove('over');
}

function inputChange() {
    let input = document.getElementById('new-task').value;
    let addButton = document.getElementById('add-button');
    input.length > zero ? addButton.className = 'material-icons md-33 add-button-enabled' :
        addButton.className = 'material-icons md-33 add-button-disabled';
}

function listControl(action) {
    action ? listItems++ : listItems--;
    if (listItems >= maxListNumber) {
        document.getElementById('new-task').setAttribute('disabled', 'true');
        document.getElementById('new-task').value = '';
        inputChange();
        document.getElementById('message').style.display = 'block';
    } else {
        document.getElementById('new-task').removeAttribute('disabled');
        document.getElementById('message').style.display = 'none';

    }
}

function addNewListItem(text) {
    let newLabel = document.createElement('label');
    newLabel.setAttribute('draggable', 'true');
    newLabel.setAttribute('class', 'container');
    newLabel.addEventListener('dragover', allowDrop, false);
    newLabel.addEventListener('dragstart', dragStart, false);
    newLabel.addEventListener('drop', dragDrop, false);
    newLabel.addEventListener('dragover', dragEnter, false);
    newLabel.addEventListener('dragleave', dragLeave, false);
    newLabel.innerHTML = `<input type="checkbox" onchange = "disableCheckbox(this)")>
    <i class="material-icons checkmark">check_box</i><i class="material-icons uncheckmark">
    check_box_outline_blank
    </i>${document.getElementById('new-task').value} 
    <a class="delete" onclick='deleteListItem(this.parentNode)'><i class="material-icons">delete</i></a>`
    document.getElementsByTagName('table')[zero].appendChild(newLabel);
    document.getElementById('new-task').value = '';
    inputChange();
    listControl(true);
}

function deleteListItem(element) {
    let prev = element.previousSibling;
    if (prev) {
        document.getElementById('list').removeChild(prev.nextSibling);
    } else {
        document.getElementById('list').removeChild;
    }
    listControl(false);
}

function disableCheckbox(me) {
    me.disabled = true;
    me.nextElementSibling.style.display = 'block';
}

document.getElementById('add-button').addEventListener('click', addNewListItem);
document.getElementById('new-task').addEventListener('input', inputChange);
