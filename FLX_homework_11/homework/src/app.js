let rootNode = document.getElementById('root');

function addNewListItem(text) {
    let newDiv = document.createElement('div');
    newDiv.setAttribute('draggable', 'true');
    newDiv.setAttribute('ondragover', 'allowDrop(event)');
    newDiv.innerHTML = `<input type="checkbox", onchange = "disableCheckbox(this)")> 
    ${document.getElementsByName('Add New Action')[0].value} <button onclick='deleteListItem(this.parentNode)'>Action</button>`
    document.getElementsByTagName('table')[0].appendChild(newDiv);
    document.getElementsByName('Add New Action')[0].value = '';
}

function deleteListItem(element) {
    let prev = element.previousSibling;
    if (prev) {
        document.getElementById('list').removeChild(prev.nextSibling);
    } else {
        document.getElementById('list').removeChild;
    }
}
function disableCheckbox(me) {
    me.disabled = true;
}
function allowDrop(ev) {
    ev.preventDefault();
}
document.getElementById('addButton').addEventListener('click', addNewListItem);
