const classNames = {
  TODO_ITEM: 'todo-container',
  TODO_CHECKBOX: 'todo-checkbox',
  TODO_TEXT: 'todo-text',
  TODO_DELETE: 'todo-delete',
}

const list = document.getElementById('todo-list')
const itemCountSpan = document.getElementById('item-count')
const uncheckedCountSpan = document.getElementById('unchecked-count')
var contador = 0;
var boxCheck = 0;

function newTodo() {

  var checkbox = document.createElement("input");
  checkbox.type = "checkbox";
  checkbox.setAttribute("onclick", "numero(this)");
  var li = document.createElement("li");
  var t = document.createTextNode("New To Do");
  var text = document.createElement("label")

  text.contentEditable = true;
  text.appendChild(t);

  li.appendChild(checkbox);
  li.appendChild(text);
  list.appendChild(li);



  contador = contador + 1;
  itemCountSpan.innerHTML = contador;
  uncheckedCountSpan.innerHTML = contador - boxCheck;
};

function numero(element) {

  if (element.checked) {
    boxCheck++;
  } else {
    boxCheck--;
  }
  uncheckedCountSpan.innerHTML = contador - boxCheck;
}

function borrar() {
  var aux = contador;
  var contador2 = aux;
  var i2 = 0;
  for (var i = 0; i < contador2; i++) {
    if (document.getElementsByTagName("input")[i2].checked) {
      aux--;
      list.removeChild(document.getElementsByTagName("li")[i2]);
      contador--;

    } else {
      i2++;
    }
  }
  boxCheck = 0;

  itemCountSpan.innerHTML = contador;

  uncheckedCountSpan.innerHTML = contador - boxCheck;
}
