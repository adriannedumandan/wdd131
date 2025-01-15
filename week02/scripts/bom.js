
const input = document.querySelector('#favchap');
const button = document.querySelector('button');
const list = document.querySelector('ul');


button.addEventListener('click', () => {

  const li = document.createElement('li');
  
  const deleteButton = document.createElement('button');

  li.textContent = input.value;

  deleteButton.textContent = '❌';

  li.append(deleteButton);

  list.append(li);

  input.value = '';

  deleteButton.addEventListener('click', () => {
    list.removeChild(li);
  });
});
