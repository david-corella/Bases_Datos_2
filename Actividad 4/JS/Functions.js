// Variable global para almacenar el texto final que se va a mostrar o descargar
let datosExportacion = "";

// Catálogo 1: Apellidos Paternos (Mix de latinos, europeos y cultura pop) - Más de 100 elementos
const apellidosPaternos = [
    "García", "Martínez", "López", "González", "Pérez", "Rodríguez", "Sánchez", "Ramírez", "Cruz", "Gignac",
    "Flores", "Gómez", "Morales", "Vázquez", "Jiménez", "Reyes", "Díaz", "Torres", "Gutiérrez", "Ochoa",
    "Mendoza", "Aguilar", "Ortiz", "Moreno", "Castillo", "Romero", "Álvarez", "Méndez", "Chávez", "Martin",
    "Juárez", "Domínguez", "Herrera", "Medina", "Ramos", "Castro", "Ortega", "Vargas", "Santiago", "Funes",
    "Rojas", "De la Cruz", "Guzmán", "Franco", "Silva", "Luna", "Muñoz", "Cabrera", "Delgado", "Layun",
    "León", "Ríos", "Estrada", "Bautista", "Meza", "Gallegos", "Miranda", "Carrillo", "Valencia", "Guardado",
    "Lara", "Pacheco", "Soto", "Cervantes", "Robledo", "Esquivel", "Salinas", "Maldonado", "Marín", "Marquez",
    "Lugo", "Rosas", "Padilla", "Fuentes", "Espinoza", "Rangel", "Acosta", "Sandoval", "Villegas", "Blanco",
    "Alfaro", "Camacho", "Guerrero", "Lozano", "Guevara", "Galindo", "Beltrán", "Orozco", "Pineda", "Campos",
    "Parra", "Villalobos", "Duarte", "Serrano", "Ávila", "Ibarra", "Téllez", "Rocha", "Trejo", "Vega",
    "Messi", "Ronaldo", "Mbappe", "Haaland", "De Bruyne", "Modric", "Kroos", "Benzema", "Lewandowski", "Neuer",
    "Wright", "Howard", "Maxson", "Valentine", "Preston", "Kellogg", "Vance", "Glover", "Smith", "Johnson"
];

// Catálogo 2: Apellidos Maternos (Incluye la opción "NULL" para simular que no tienen segundo apellido)
const apellidosMaternos = [
    "NULL", "NULL", "NULL", "NULL", "NULL", "Smirnov", "Ivanov", "Kuznetsov", "Popov", "Sokolov",
    "Lebedev", "Kozlov", "Novikov", "Morozov", "Petrov", "Volkov", "Solovyov", "Vasilyev", "Zaitsev", "Pavlov",
    "Semenov", "Golubev", "Vinogradov", "Bogdanov", "Vorobyov", "Fedorov", "Mikhailov", "Tarasov", "Belov", "Komarov",
    "Orlov", "Kiselev", "Makarov", "Andreev", "Kovalev", "Ilyin", "Gusev", "Titov", "Kuzmin", "Kudryavtsev",
    "Baranov", "Kulikov", "Alekseev", "Stepanov", "Yakovlev", "Sorokin", "Sergeev", "Romanov", "Zakharov", "Borisov",
    "Korolev", "Ponomarev", "Grigoryev", "Lazarev", "Medvedev", "Ershov", "Nikitin", "Sobolev", "Ryabov", "Polyakov",
    "Tsvetkov", "Danilov", "Smirnov", "Gagarin", "Zhukov", "Zorin", "Belyaev", "Demidov", "Larionov", "Timofeev",
    "Savelyev", "Ignatov", "Kapustin", "Dorofeev", "Melnikov", "Fomin", "Tikhonov", "Mironov", "Lapshin", "Seleznev",
    "Prokhorov", "Ustinov", "Borodin", "Martynov", "Krylov", "Ovchinnikov", "Shestakov", "Losev", "Dyakov", "Pankratov",
    "Sapozhnikov", "Rozhkov", "Kravtsov", "Shiryaev", "Klimov", "Fadeev", "Chistyakov", "Trofimov", "Eliseev", "Nazarov",
    "Goncharov", "Karpov", "Lytkin", "Bondarev", "Fedoseev", "Sukhanov", "Pisarev", "Lukyanov", "Meshkov", "Gordeev"
];

// Catálogo 3: Primer Nombre (Variedad internacional y común)
const nombresPrincipales = [
    "Lionel", "Cristiano", "Kylian", "Erling", "Kevin", "Luka", "Toni", "Karim", "Robert", "Manuel",
    "Mohamed", "Harry", "Jude", "Guillermo", "Henry", "Rogelio", "Nahuel", "Miguel", "Andrés", "Cuauhtémoc",
    "Jorge", "Orbelín", "Alexis", "Alan", "Julián", "Arthur", "John", "Leon", "Chris", "Jill",
    "Claire", "Geralt", "Aloy", "Kratos", "Joel", "Ellie", "Nathan", "Marcus", "Nick", "Piper",
    "Cait", "Danse", "Deacon", "Hancock", "Shaun", "Nate", "Nora", "Aiden", "Julius", "Sophia",
    "Juan", "José", "Luis", "Carlos", "Pedro", "Fernando", "Ricardo", "Alejandro", "Daniel", "David", 
    "Eduardo", "Francisco", "Roberto", "Sergio", "Raúl", "Iván", "Héctor", "Arturo", "Alberto", "Mario", 
    "Óscar", "Rubén", "Enrique", "Javier", "Adrián", "Esteban", "Diego", "Emilio", "Rodrigo", "Salvador", 
    "Hugo", "Alfonso", "Ramón", "Ignacio", "Tomás", "Benjamín", "Sebastián", "Pablo", "Leonardo", "Mauricio"
];
    
// Catálogo 4: Segundo Nombre (Principalmente de origen francés y europeo)
const nombresSecundarios = [
    "Jean", "Pierre", "Paul", "Louis", "Jacques", "Michel", "Claude", "André", "Philippe", "Bernard",
    "François", "Julien", "Nicolas", "Thomas", "Antoine", "Sébastien", "Alexandre", "Mathieu", "Christophe", "Laurent",
    "Olivier", "Damien", "Romain", "Victor", "Hugo", "Lucas", "Maxime", "Baptiste", "Éric", "Loïc",
    "Théo", "Clément", "Florian", "Adrien", "Guillaume", "Benjamin", "Jérôme", "Rémi", "Yann", "Cédric",
    "Gabriel", "Arthur", "Raphaël", "Nathan", "Enzo", "Kylian", "Noah", "Adam", "Samuel", "Eliott",
    "Gael", "Damián", "Bruno", "Axel", "Iker", "Jonathan", "Brian", "Edgar", "Ángel", "Jesús", 
    "Cristian", "Marco", "Omar", "Ismael", "Abraham", "Josué", "Emanuel", "Noé", "Ezequiel", "Elías", 
    "Matías", "Saúl", "Uriel", "Elian", "Lorenzo", "Thiago", "Emiliano", "Máximo", "Camilo", "Valentín", 
    "Cristóbal", "Iván", "Bautista", "Alexis", "Kevin", "Brayan", "Brandon", "Dylan", "Ian", "Álvaro", 
    "Darío", "Rafael", "Teodoro", "Marcel", "Luc", "Gaston", "Benoît", "Denis", "Pascal", "Didier"
];

    // Función principal que decide qué formato generar
function generar() {
    // Nota para mí: Obtener los valores exactos que el usuario eligió en la interfaz
    const tipoFormato = document.getElementById("opcion").value;
    const cantidadAlumnos = parseInt(document.getElementById('registros').value); 

    switch (tipoFormato) {
        case "1": 
        case "2": 
            generarSQL(cantidadAlumnos); 
            break;
        case "3": 
            generarCSV(cantidadAlumnos); 
            break;
        case "4": 
            generarJSON(cantidadAlumnos); 
            break;
    }
}

function generarSQL(cantidad) {
    let sqlQuery = "INSERT INTO alumnos (matricula, apellido1, apellido2, nombre, correo) VALUES \n";
    let matriculaBase = 224250000;

    for (let i = 0; i < cantidad; i++) {
        let apellido1 = apellidosPaternos[Math.floor(Math.random() * apellidosPaternos.length)];
        let apellido2Temp = apellidosMaternos[Math.floor(Math.random() * apellidosMaternos.length)];
        
        let apellido2Final = (apellido2Temp === "NULL") ? "NULL" : `UPPER('${apellido2Temp}')`;
        
        // Determinar aleatoriamente si tiene 1 o 2 nombres (50% de probabilidad)
        let tieneSegundoNombre = Math.random() < 0.5;
        let nombreCompleto = nombresPrincipales[Math.floor(Math.random() * nombresPrincipales.length)];
        
        if (tieneSegundoNombre) {
            let nombre2 = nombresSecundarios[Math.floor(Math.random() * nombresSecundarios.length)];
            nombreCompleto += ` ${nombre2}`;
        }

        let matriculaActual = matriculaBase + i;
        let correo = `a${matriculaActual}@unison.mx`;

        // Nota para mí: Construir la fila usando Template Literals (` `) para que sea más legible
        sqlQuery += `(${matriculaActual}, UPPER('${apellido1}'), ${apellido2Final}, '${nombreCompleto}', '${correo}'),\n`;
    }

    // Nota para mí: Cortar los últimos 2 caracteres (la coma y el salto de línea) y poner el punto y coma final
    sqlQuery = sqlQuery.slice(0, -2) + ";";
    
    datosExportacion = sqlQuery;
    document.getElementById("salida").innerHTML = datosExportacion;
}

function generarCSV(cantidad) {
    let csvData = "matricula,apellido1,apellido2,nombre,correo\n";
    let matriculaBase = 224250000;

    for (let i = 0; i < cantidad; i++) {
        let apellido1 = apellidosPaternos[Math.floor(Math.random() * apellidosPaternos.length)];
        let apellido2Temp = apellidosMaternos[Math.floor(Math.random() * apellidosMaternos.length)];
        
        let apellido2Final = (apellido2Temp === "NULL") ? "" : apellido2Temp; // En CSV, NULL suele dejarse vacío
        
        let tieneSegundoNombre = Math.random() < 0.5;
        let nombreCompleto = nombresPrincipales[Math.floor(Math.random() * nombresPrincipales.length)];
        
        if (tieneSegundoNombre) {
            let nombre2 = nombresSecundarios[Math.floor(Math.random() * nombresSecundarios.length)];
            nombreCompleto += ` ${nombre2}`;
        }

        let matriculaActual = matriculaBase + i;
        let correo = `a${matriculaActual}@unison.mx`;

        csvData += `${matriculaActual},${apellido1},${apellido2Final},${nombreCompleto},${correo}\n`;
    }

    datosExportacion = csvData;
    document.getElementById("salida").innerHTML = datosExportacion;
}

function generarJSON(cantidad) {
    let matriculaBase = 224250000;
    let arregloAlumnos = []; // Nota para mí: Crear un array vacío para llenarlo de objetos

    for (let i = 0; i < cantidad; i++) {
        let apellido1 = apellidosPaternos[Math.floor(Math.random() * apellidosPaternos.length)];
        let apellido2Temp = apellidosMaternos[Math.floor(Math.random() * apellidosMaternos.length)];
        
        let apellido2Final = (apellido2Temp === "NULL") ? null : apellido2Temp; 
        
        let tieneSegundoNombre = Math.random() < 0.5;
        let nombreCompleto = nombresPrincipales[Math.floor(Math.random() * nombresPrincipales.length)];
        
        if (tieneSegundoNombre) {
            let nombre2 = nombresSecundarios[Math.floor(Math.random() * nombresSecundarios.length)];
            nombreCompleto += ` ${nombre2}`;
        }

        let matriculaActual = matriculaBase + i;

        // Nota para mí: Agrego un objeto real al arreglo, esto evita bugs de sintaxis JSON
        arregloAlumnos.push({
            matricula: matriculaActual,
            apellido1: apellido1,
            apellido2: apellido2Final,
            nombre: nombreCompleto,
            correo: `a${matriculaActual}@unison.mx`
        });
    }

    // Nota para mí: JSON.stringify formatea el array automáticamente (el 4 es para darle tabulación/sangría)
    datosExportacion = JSON.stringify(arregloAlumnos, null, 4);
    document.getElementById("salida").innerHTML = datosExportacion;
}

function guardarArchivo() {
    if (datosExportacion === "") {
        alert("¡Primero tienes que generar los datos!");
        return;
    }

    const tipoFormato = document.getElementById("opcion").value;
    let nombreArchivo = "";
    
    switch (tipoFormato) {
        case "1": 
        case "2": 
            nombreArchivo = "alumnos_unison.sql"; 
            alert("Descargando archivo SQL..."); 
            break;
        case "3": 
            nombreArchivo = "alumnos_unison.csv"; 
            alert("Descargando archivo CSV..."); 
            break;
        case "4": 
            nombreArchivo = "alumnos_unison.json"; 
            alert("Descargando archivo JSON..."); 
            break;
    }

    // Nota para mí: Este bloque crea un enlace invisible (<a>), le asigna los datos, simula un clic para descargar y luego se borra.
    let enlaceDescarga = document.createElement("a");
    enlaceDescarga.setAttribute("href", "data:text/plain;charset=UTF-8," + encodeURIComponent(datosExportacion));
    enlaceDescarga.setAttribute("download", nombreArchivo);
    
    enlaceDescarga.style.display = "none";
    document.body.appendChild(enlaceDescarga);
    enlaceDescarga.click();
    document.body.removeChild(enlaceDescarga);
}