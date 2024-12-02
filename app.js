const inputUchun = document.getElementById('input');
const addButton = document.getElementById('add');
const List = document.getElementById('list');

function addTask() {
  const Text = inputUchun.value.trim();

  if (Text == '') return;

  const Item = document.createElement('li');
  Item.textContent = Text;

  Item.addEventListener('click', () => {
    Item.style.textDecoration = Item.style.textDecoration == 'line-through' ? '' : 'line-through';
  });

  const deleteButton = document.createElement('button');
  deleteButton.textContent = "O'chirish";
  deleteButton.style.marginLeft = '10px';
  deleteButton.addEventListener('click', () => Item.remove());

  Item.appendChild(deleteButton);
  List.appendChild(Item);

  inputUchun.value = '';
}

addButton.addEventListener('click', addTask);
