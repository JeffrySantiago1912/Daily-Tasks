//Recuperando el valor y añadiendo funcionalidad al boton cuando sea clickeado
document.querySelector("#push").onclick = function()
{

    //Si la tarea esta vacia ejecuta esto:
    if(document.querySelector("#newtask input").value.length == 0)
    {
        alert("Favor de ingresar su tarea.");
    }

    else
    {
        
        //Añade la tarea - Lo que esta dentro de la caja de texto
       document.querySelector("#tasks").innerHTML 
       += ` 

       <div class = "task">

        <span id = "taskname">

            ${document.querySelector("#newtask input").value}

        </span>
        
        <button class = "delete"> 
        <i class = "far fa-trash-alt"></i>
        </button>
       </div> `;
       

       //Eliminar tarea
        let current_tasks = document.querySelectorAll(".delete"); // <button class = "delete"> - Creado dentro del boton crear

        for(let i = 0; i < current_tasks.length; i++){

            current_tasks[i].onclick = function(){
                this.parentNode.remove();
            }
        }


        //Tachar tarea completada//
        let tasks = document.querySelectorAll(".task");

        for(let i = 0; i < tasks.length; i++){

            tasks[i].onclick = function() {
                this.classList.toggle("completed");
            }
            
        }


        //Limpiar caja de texto cuando se añada una tarea
        document.querySelector("#newtask input").value = ""; 
    }


    
}