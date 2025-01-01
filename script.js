let tasks = [];
const taskList =document.getElementById("task-list"); 
const taskInput =document.getElementById("task-input"); 
const addTaskBtn =document.getElementById("add-task-btn"); 

function  displayTasks (){
    taskList.innerHTML = "";
    tasks.forEach(( task,index) => {
        const li = document.createElement("li");
        li.innerHTML = `
      ${task} <button class="remove-btn" onclick="removeTask(${index})">Remove</button>
    `;
    taskList.appendChild(li);
    }
);
}
function addTask(){
    const newTask = taskInput.value.trim();
     if (newTask){
        tasks.push( newTask);
        taskInput.value = "";  
        displayTasks();
     }
}
function removeTask(index){
    tasks.splice( index,1);
    displayTasks();
}
addTaskBtn.addEventListener("click", addTask);
taskInput.addEventListener("keypress", (event) => {
    if (event.key === "Enter") {
      addTask();
    }
  });
  displayTasks();
