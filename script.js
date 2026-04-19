// 1. "async" le avisa al navegador que esta función va a pedir algo a internet 
// y que debe tener paciencia porque la respuesta puede demorar.
async function getallUser() {
    try {
        // 2. "fetch" es como mandar un mensajero a esa dirección (URL).
        // "await" hace que el código se espere ahí quietico hasta que el mensajero vuelva con el paquete.
        const response = await fetch("https://jsonplaceholder.typicode.com/users");

        if (!response.ok) {
            throw new Error(`Error HTTP: ${response.status}`);
        }

        // 3. El paquete llega cerrado. "response.json()" es como abrir la caja 
        // y convertir el contenido en una lista que JavaScript sí entiende.
        const users = await response.json();

        // 4. Buscamos en nuestro HTML el lugar exacto donde queremos "dibujar" la tabla.
        // Usamos el ID "#table-users" para no perdernos.
        let body = document.querySelector("#table-users");

        if (!body) {
            throw new Error("No existe un elemento con id 'table-users' en el HTML.");
        }

        // 5. "forEach" significa: "Por cada persona que llegó en la lista, haz lo siguiente:"
        users.forEach(element => {

            // 6. Aquí sacamos solo el Nombre y el ID de cada usuario para usarlos fácil.
            // Es como sacar la cédula y el nombre de una carpeta.
            const { name, id } = element;

            // 7. Mostramos en la consola (F12) lo que vamos encontrando para estar seguros.
            console.log(`id: ${id}, name: ${name}`);

            // 8. Creamos una "fila" (tr) de tabla totalmente nueva en la memoria.
            const tr = document.createElement("tr");

            // 9. A esa fila le metemos dos "celditas" (td) con el ID y el Nombre.
            // Las comillas invertidas `` nos dejan meter las variables con ${}.
            tr.innerHTML = `<td>${id}</td><td>${name}</td>`;

            // 10. ¡El paso final! "Pegamos" la fila que acabamos de armar dentro 
            // del cuerpo de la tabla que está en nuestra página web.
            body.appendChild(tr);
        });
    } catch (error) {
        console.error("No se pudieron cargar los usuarios:", error);
    }
}

// 11. Por último, llamamos a la función para que todo lo anterior empiece a funcionar.
getallUser();
