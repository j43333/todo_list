const inputBox = document.getElementById("input-box"); 
const listContainer = document.getElementById("list-container"); 

function addTask() {
    const task = inputBox.value.trim(); 
    if (!task) {
        alert("Please write down a task"); 
        return; 
    }

    const li = document.createElement("li"); 

    li.innerHTML = `
        <label><input type="checkbox">
        <span class="task-text">${task}</span></label>
        <span class="edit-btn">Edit</span> 
        <span class="delete-btn">Delete</span>`; 
    // will have the checkbox next to the task with edit and delete buttons at the end of every task 

    listContainer.appendChild(li); // adds checkbox task to the task list 
    inputBox.value = ""; 

    const checkbox = li.querySelector("input"); // marks the task as completed by putting a line through it and changing the colour to gray
    const editBtn = li.querySelector(".edit-btn"); // modifies task 
    const taskSpan = li.querySelector(".task-text"); // edit specific task when edit btn clicked
    const deleteBtn = li.querySelector(".delete-btn"); // removes task from list  

    checkbox.addEventListener("click", function() {
        li.classList.toggle("completed", checkbox.checked); 
        updateCounters(); // calls function to update amount completed/uncompleted tasks
    }); 
    // classList.toggle = add completed class to the task, when the checkbox is checked 

    editBtn.addEventListener("click", function() {
        const update = prompt("Edit task:", taskSpan.textContent);// asking user to input a new task
        if(update !== null) {
            taskSpan.textContent = update; // displays new input 
            li.classList.remove("completed");// will remove the completed styling and become unchecked
            checkbox.checked = false; 
            updateCounters(); // calls function to update amount completed/uncompleted tasks
        }
    }); 

    deleteBtn.addEventListener("click", function() {
        if(confirm("Are you sure you want to delete task?")) {
            li.remove(); 
            updateCounters(); // calls function to update amount completed/uncompleted tasks
        }
    }); 

    updateCounters(); // Update counters when a new task is added
}

const completedCounter = document.getElementById("completed-counter"); 
const uncompletedCounter = document.getElementById("uncompleted-counter");

function updateCounters() {
    const completedTasks = document.querySelectorAll(".completed").length; // counts all tasks using the completed class 
    const uncompletedTasks = document.querySelectorAll("li:not(.completed)").length; // counts all li not using completed

    completedCounter.textContent = completedTasks; // updates number
    uncompletedCounter.textContent = uncompletedTasks;  // updates number    
}
