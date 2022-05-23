var input = document.querySelector('.todo_input');
var MainTodoContainer = document.getElementById('todos')
var addingButton = document.querySelector('.add-item');
var deleteAllBtn = document.querySelector('.deleteBtn');
var completedButton = document.querySelector('.completed');
var removeButton = document.querySelector('.trash');

addingButton.addEventListener('click', function(e){
    /* stoping button behaviour */
    e.preventDefault();
    
    /* Create all the elements */
    if(input.value.trim()){
        /* UL Tag */
        var ulTag = document.createElement('ul');
        ulTag.classList.add('todo-list-container');
        /* Todo list div */
        var todoList = document.createElement('div');
        todoList.classList.add('todo-list');
        /* Li Tag */
        var liTag = document.createElement('li');
        liTag.innerText = input.value;
        liTag.classList.add('todo-item');
        /* Button Div */
        var buttonDiv = document.createElement('div');
        buttonDiv.classList.add('button');
        /* completed button element 1 */
        var completeButton = document.createElement('button');
        completeButton.classList.add('completed');
        completeButton.innerHTML = '<i class="fas fa-check"></i>';
        /* Edit Button */
        var editBtn = document.createElement('button');
        editBtn.innerHTML = '<i class="far fa-edit"></i>';
        editBtn.classList.add('editBtn');
        editBtn.onclick = function(){
            editWorking(liTag);
        }
        /* trash button element 2 */
        var trashButton = document.createElement('button');
        trashButton.classList.add('trash');
        trashButton.innerHTML = '<i class="fas fa-trash"></i>';
    
        /* Appending Elements into each other */
        ulTag.appendChild(todoList);
        todoList.appendChild(liTag);
        todoList.appendChild(buttonDiv);
        buttonDiv.appendChild(completeButton);
        buttonDiv.appendChild(editBtn);
        buttonDiv.appendChild(trashButton);
        /*append all the elements in main div*/
        MainTodoContainer.appendChild(ulTag);
        
        /*clearing the input value after adding */
        input.value='';

        /* complete and trash button working */
        todoList.addEventListener('click', function(e){
            var items = e.target;
            if(items.classList[0] === 'completed'){
                var todo = items.parentElement;
                var todo2 = todo.parentElement;
                todo2.classList.add('line_through')
            }
            else if(items.classList[0] === 'trash'){
                var todo = items.parentElement;
                var todo2 = todo.parentElement;
                todo2.classList.add('fall');
                todo2.addEventListener('transitionend', function(){
                    var todo3 = todo2.parentElement;
                    todo3.remove();
                });
            }
        });
    }else if(input.value === ''){
        alert('please fill the input field');
    }
});
function editWorking(e){
    var editValue = prompt('edit the select item', e.firstChild.nodeValue);
    e.firstChild.nodeValue = editValue;
}
function deleteAllElements(){

    var gettingUlTag = document.querySelectorAll('.todo-list-container');
    for(var i = 0; i < gettingUlTag.length; i++){
        gettingUlTag[i].remove();
    }
    input.value = '';
}

   