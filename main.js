var taskInput = document.getElementById("taskInput");
var taskList = document.getElementById("taskList");


function addTask(){
    if (taskInput.value === "") {
        alert("Por favor, ingrese una tarea");
        return;
    }
    var newTask = document.createElement("li");
    
    newTask.innerHTML = `
                        
                        <div class="row py-1">
                            <div class="col-8" id="taskName">${taskInput.value}</div>
                            <div class="col-2">
                            <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault">
                            </div>
                            <div class="col-2">
                                <button class="btn btn-danger borrar">Borrar</button>
                            </div>
                        </div>
                        
                        `;
    
    taskList.appendChild(newTask);
    taskInput.value = "";

    
}

document.addEventListener("click", (event) => {
    if (event.target.classList.contains("borrar")) {
        event.target.parentElement.parentElement.parentElement.remove();
    }
})






document.addEventListener("keydown", (event) => {
    if (event.key === "Enter") {
        addTask();
    }
})


