// Accessing Elements
const userInput = document.querySelector("input");
const addButton = document.querySelector("button");
const ul = document.querySelector("ul");
const task = document.querySelector("li");
const errorMessage = document.querySelector("div>span");

// Add task logic
addButton.addEventListener("click", () => {
    let newTask = document.createElement("li");
    let deleteTask = document.createElement("span");
    newTask.textContent = `${userInput.value}`;
    deleteTask.textContent = `❌`;

    if (userInput.value.length > 0) {
        newTask.append(deleteTask);
        ul.append(newTask);

        // Clear input logic
        userInput.value = "";
        errorMessage.classList.remove("show");
        // Delete task logic
        deleteTask.addEventListener("click", () => {
            ul.removeChild(newTask);
        })
    }
    // Empty input logic
    else {
        errorMessage.classList.add("show");
    }
})