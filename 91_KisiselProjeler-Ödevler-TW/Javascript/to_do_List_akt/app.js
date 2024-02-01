
window.addEventListener('load', ()=>{
    const form = document.querySelector('#new-todo-form');
    const input = document.querySelector('#new-todo-input');
    const listElement = document.querySelector('#todos');

    form.addEventListener('submit', (e) =>{
        e.preventDefault();
        
        const todo = input.value;

        if(!todo) {
            alert(`Please fill out something`); 
            return;
        }
        
        const todoElement = document.createElement('div');
        todoElement.classList.add('todo');

        const todoContentElement = document.createElement('div');
        todoContentElement.classList.add('content');

        todoElement.appendChild(todoContentElement);

        const todoInputElement = document.createElement('input');
        todoInputElement.classList.add('text');
        todoInputElement.type= 'text'
        todoInputElement.value= todo
        todoInputElement.setAttribute('readonly', 'readonly'); 

        todoContentElement.appendChild(todoInputElement);
        listElement.appendChild(todoElement);

        const todoActions = document.createElement('div');
        todoActions.classList.add('actions');

        const todoEdit = document.createElement('button');
        todoEdit.classList.add('edit');
        todoEdit.innerHTML = 'Edit';

        const todoDelete = document.createElement('button')
        todoDelete.classList.add('delete');
        todoDelete.innerHTML= 'Delete'

        todoActions.appendChild(todoEdit)
        todoActions.appendChild(todoDelete)

        todoElement.appendChild(todoActions)


        listElement.appendChild(todoElement)
        input.value= '';

            todoElement.addEventListener('click', (event) => {
              if(event.target === todoEdit) {
                if (todoEdit.textContent.toLowerCase() === 'edit') {
                    todoInputElement.removeAttribute('readonly');
                    todoInputElement.focus();
                    todoEdit.textContent = 'Save';
                    todoInputElement.style.color = 'gray'
                } else {
                    todoInputElement.setAttribute('readonly', 'readonly');
                    todoEdit.textContent = 'Edit';
                    todoInputElement.style.color = 'white'
                }
              }
            });
            

        todoDelete.addEventListener('click', ()=>{
            listElement.removeChild(todoElement)
        });


    });
});

