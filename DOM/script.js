const toDoForm = document.querySelector(".to-do-form");
const submitButton = document.querySelector(".btn-to-do");
const inputText= document.querySelector(".to-do-form input[type='text']");
const li= document.querySelector(".to-do-list li");
const ul = document.querySelector(".to-do-list");
toDoForm.addEventListener("submit",(e)=>{
    e.preventDefault();
    const newLi = document.createElement("li");
    const innerLiHTML = `<span class="text">${inputText.value}</span>
    <div class="to-do-button-section">
      <button class="done to-do-button">Done</button>
      <button class="remove to-do-button">Remove</button>
    </div>`
    newLi.innerHTML = innerLiHTML;
    ul.prepend(newLi);
    inputText.value="";
});
// const toDoDone = document.querySelector(".done");
ul.addEventListener("click",(e)=>{

  if(e.target.classList.contains("done")){
    const todoText = e.target.parentNode.previousElementSibling;
    todoText.style.textDecoration = "line-through";
  }


  if(e.target.classList.contains("remove")){
    const removeLi = e.target.parentNode.parentNode;
    removeLi.remove();
  }
});

