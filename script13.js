const todoForm = document.querySelector(".form-todo");
const todoFormInput = document.querySelector(".form-todo input[type='text']");
const todoList = document.querySelector(".todo-list");

todoForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const todoVal = todoFormInput.value;
  const newLi = document.createElement("li");
  const newLiInnerHTML = `
    <span class="text">${todoVal}</span>
    <div class="todo-button">
      <button class="todo-btn done">Done</button>
      <button class="todo-btn remove">Remove</button>
    </div>
    `;
  newLi.innerHTML = newLiInnerHTML;
  todoList.append(newLi);
  todoFormInput.value = "";
});

todoList.addEventListener("click", (e) => {
   if(e.target.classList.contains('done')){
     const selectTodoVal = e.target.parentNode.previousElementSibling;
     selectTodoVal.style.textDecoration = "line-through";
   }
   if(e.target.classList.contains('remove')){
    const parentNode = e.target.parentNode.parentNode
        parentNode.remove()
   }
});
