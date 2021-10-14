//Evento para almacenar datos desde el formulario

document.getElementById('formtask').addEventListener('submit', saveTask);


//Almacenamiento de datos en LocalStorage

function saveTask(e) {

  let action = document.getElementById('action').value;
  let description = document.getElementById('description').value;



  let task = {
    action, description
  };

  if (localStorage.getItem('tasks') === null) {

    let tasks = [];
    tasks.push(task);
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }

  else {

    let tasks = JSON.parse(localStorage.getItem('tasks'));
    tasks.push(task);
    localStorage.setItem('tasks', JSON.stringify(tasks));


  }

  getTask();
  document.getElementById('formtask').reset();
  e.preventDefault();

}

//Mostrar datos almacenados  en pantalla

function getTask() {

  let tasks = JSON.parse(localStorage.getItem('tasks'));
  document.getElementById('list').innerHTML = `<h2>Mi lista:</h2>`;



  for (let i = 0; i< tasks.length; i++) {

    let action = tasks[i].action;
    let description = tasks[i].description;

    document.getElementById('list').innerHTML +=

      `<hr>
        <br>
        <p>${action} - ${description}</p>
        <input type="reset" value="Borrar"
        class="boton btn-danger" id ="delete-action" onclick="deleteTask('${action}')"/>  
        <input type="submit" value= "Editar" class="boton btn-edit" id="edit-action" onclick="editTask('${action}')" /> `;
  }

}

//eliminar datos

function deleteTask(action) {
  let tasks = JSON.parse(localStorage.getItem('tasks'));
  for (let i = 0; i < tasks.length; i++) {
    if (tasks[i].action === action) {
      tasks.splice(i, 1);
    }
  }
  localStorage.setItem("tasks", JSON.stringify(tasks));
  getTask();

}
getTask();

//editar campos




function editTask(action){

  let tasks = JSON.parse(localStorage.getItem('tasks'));
     for(let i=0; i < tasks.length; i++){
    if(tasks[i].action === action){
      document.getElementById('list').innerHTML = 
      `<h2>Editar tarea:</h2>
      <form class="formEdit">
      <input type="text" id="edit-task" placeholder="Tarea:" required/>
      <input type="text" id="new-description" placeholder="Descripción:" required />
      <br>
       <input type="submit" value= "Editar" class="boton btn-edit" id="edit-action" onclick="updateTask('${i}')" />
       <input type="submit" value= "cancelar" class="boton btn-danger" id="edit-action" onclick="getTask('${i}')" />
       </form>`
         }


}
}

getTask();

//Actualizar cambios

function updateTask(i){
  let tasks = JSON.parse(localStorage.getItem('tasks'));
    tasks[i].action = document.getElementById("edit-task").value;
    tasks[i].description = document.getElementById("new-description").value;
    localStorage.setItem("tasks",JSON.stringify(tasks));

}

getTask();


