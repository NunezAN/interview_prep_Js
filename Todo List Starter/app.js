let todoItems= [];
const todoListquery = document.querySelector(".list");
main();

function main(){
    todoItems.push("Finish  Frontend Simplified");
    todoItems.push("Finish  Frontend Simplified 2");
    displayTodoItems();
}

function displayTodoItems(){
    todoListquery.innerHTML= todoItems.map((item, index) => `<li>
    ${item}
    <button id=${index} class="todo__delete" onclick="removeTodoItem(this.id)">
      x
    </button>
  </li>`
    ).join("");

}

function removeTodoItem(id){
    console.log("removed item",id);
    todoItems.splice(id,1);
    displayTodoItems();
}

function addTodoItem(){
    const input = document.getElementById("input").value;
    console.log("added item",input);
    todoItems.push(input);
    displayTodoItems();
}