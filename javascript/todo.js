let tareas = [];
        document.getElementById("boton").addEventListener("click",function(){
            let texto = document.getElementById("input").value;
            if(texto){
                tareas.push(texto);
                mostrarTareas();
                guardarTareas();
                document.getElementById("input").value = "";
            }
        })

        function mostrarTareas() {
            let lista = document.getElementById("listaTareas");
            lista.innerHTML = "";
            tareas.forEach(function(tarea,index) {
                let li = document.createElement("li");
                li.textContent = tarea + "";
                let btnEliminar = document.createElement("button")
                btnEliminar.textContent = "Eliminar";
                btnEliminar.addEventListener("click",function() {
                    tareas.splice(index,1);
                    mostrarTareas();
            })
            lista.appendChild(li);
            lista.appendChild(btnEliminar)
            })
        }

        function guardarTareas() { 
            localStorage.setItem("tareas", JSON.stringify(tareas)); 
        } 
    
        function cargarTareas() { 
        const datos = localStorage.getItem("tareas"); 
        if (datos) { 
            tareas = JSON.parse(datos); 
            mostrarTareas(); 
        } 
        } 
    
        window.onload = cargarTareas;