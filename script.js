function addTask(taskTitle,taskDescription){
    let newTask = document.createElement("div");
    newTask.innerHTML = `<h3>${taskTitle}</h3><p>${taskDescription}</p>`;
    document.getElementById("taskList").appendChild(newTask);
}