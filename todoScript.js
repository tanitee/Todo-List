let array = [];
            
const todoList = JSON.parse(localStorage.getItem('todolist')) || [{name : 'wash plates',
    dueDate:'2022-12-22'},
    {name:'sleep',
    dueDate:'2022-12-23'}
];


renderTodoList();  

function renderTodoList(){
    let todoListHtml = '';
    for(let i = 0; i <todoList.length ; i++){
        const todoObject = todoList[i];
        //destructuring
        const { name,dueDate} = todoObject;
        
        const html = `<div>${name}</div> <div>${dueDate}</div> <button class = delete-button onclick="todoList.splice(${i},1);renderTodoList(); savetostorage();">Delete</button> `;
        todoListHtml += html;
        
    }
document.querySelector('.todo-grid').innerHTML = todoListHtml;

}


function savetostorage(){
    localStorage.setItem('todolist', JSON.stringify(todoList));
}

function addTodo(){
    const inputElement = document.querySelector('.js-name-input');
    const name = inputElement.value;

    const date = document.querySelector('.js-date-input');
    const dueDate = date.value;

    todoList.push({/*name:name , dueDate:dueDate*/
        name, dueDate
    });
    
    
    inputElement.value = '';
    renderTodoList();

    savetostorage();
}

