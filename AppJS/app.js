document.getElementById("formtask").addEventListener("submit", saveTask);

//Almacenamiento de datos en LocalStorage

function saveTask(saveText) {

    let action = document.getElementById("action").value;
    let description = document.getElementById("description").value;



    const task = {
        action, description
    };

    if (localStorage.getItem("tasks") === null) {
        
        let tasks = [];
        tasks.push(task);
        localStorage.setItem("tasks", JSON.stringify(tasks));

    }

    else {

        let tasks = JSON.parse(localStorage.getItem("tasks"));
        tasks.push(task);
        localStorage.setItem("tasks", JSON.stringify(tasks))

    }


    saveText.preventDefault();

}

//Mostrar datos almacenados  en pantalla

function getTask() {

    let tasks = JSON.parse(localStorage.getItem("tasks"));
    let taskView = document.getElementById("tasks");

    //taskView.innerHTML = "";

    for(let i = 0; i < tasks.lenght; i++) {

        let title = tasks[i].title;
        let description = tasks[i].description;

        taskView.innerHTML += `<div>
        <p>${title}</p>
        <p>${description}</p>
        <a href="">Borrar</a>
    </div>`

    }



}