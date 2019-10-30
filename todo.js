const addTodo = document.querySelector(".addTodo");
const todoList = document.querySelector(".todos");
const search = document.querySelector(".search input");

// ADD TODOs
const generateTemplate = (newToDo) => {
    const template = '<li class="list-group-item d-flex justify-content-between align-item-center"><span>'+newToDo+'</span><i class="far fa-trash-alt delete"></i></li>';
    todoList.innerHTML = todoList.innerHTML + template;
};

addTodo.addEventListener('submit',(event)=>{
    event.preventDefault();
    const newToDo = addTodo.add.value.trim().toLowerCase();
    if (newToDo.length > 0) {
        generateTemplate(newToDo); 
        addTodo.reset();
    }
});

// REMOVE TODOs

todoList.addEventListener('click',(event)=>{
    if(event.target.classList.contains('delete')){
        event.target.parentElement.remove();
    }
});

// SEARCH TODOs

const filterSearch = (keyword) =>{
    Array.from(todoList.children).filter((todos)=>{
        return !todos.textContent.includes(keyword)}).forEach((todos)=>{
            todos.classList.add('filtered')
    });  
    
    Array.from(todoList.children).filter((todos)=>{
        return todos.textContent.includes(keyword)}).forEach((todos)=>{
            todos.classList.remove('filtered')
    });
};

search.addEventListener('keyup',()=>{
    const keyword = search.value.trim().toLowerCase();
    filterSearch(keyword);
});
