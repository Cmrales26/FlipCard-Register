const Verlista = document.getElementById("Verlista");
const volver = document.getElementById("Volver");
const cardRegistro = document.getElementById("card-registro");
const cardTabla = document.getElementById("card-tabla");

Verlista.addEventListener("click", () => {
    cardRegistro.classList.add("card-registro-inactive");
    cardTabla.classList.add("card-table-active");
    Mostrar();
});

volver.addEventListener("click", () => {
    cardTabla.classList.remove("card-table-active");
    cardRegistro.classList.remove("card-registro-inactive");
});

const registro = [{
    nombre: "Diana",
    apellido: "Vidal",
    id: 100203,
    correo: "Dianiscar@example.com",
    direccion: "Calle 1",
    descripcion: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum corrupti dolores qui iste quia debitis fugit expedita et quibusdam earum.",
},
{
    nombre: "Sharith",
    apellido: "Blanco",
    id: 100204,
    correo: "ShariBlan@example.com",
    direccion: "Calle 2",
    descripcion: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum corrupti dolores qui iste quia debitis fugit expedita et quibusdam earum.",
},
{
    nombre: "Juan",
    apellido: "Perez",
    id: 100205,
    correo: "JuanPerez@example.com",
    direccion: "Calle 3",
    descripcion: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum corrupti dolores qui iste quia debitis fugit expedita et quibusdam earum.",
},
]

let cuerpotabla = document.getElementById("CuerpoTabla")

const Mostrar = () => {
    let tabla = "";
    for (let i = 0; i < registro.length; i++) {
        tabla += `
        <tr>
            <td data-label="Nombre:">${registro[i].nombre}</td>
            <td data-label="Apellido:">${registro[i].apellido}</td>
            <td data-label="Identificación:">${registro[i].id}</td>
            <td data-label="Email:">${registro[i].correo}</td>
            <td data-label="Dirección:">${registro[i].direccion}</td>
            <td data-label="Descripción:">${registro[i].descripcion}</td>
        </tr>
        `
    }
    cuerpotabla.innerHTML = tabla
}

const nombre = document.getElementById("Nombre")
const apellido = document.getElementById("Apellido")
const id = document.getElementById("Id")
const correo = document.getElementById("Email")
const direccion = document.getElementById("Direccion")
const descripcion = document.getElementById("Descripcion")

const Agergar = document.getElementById("Agregar")

Agergar.addEventListener("click", () => {
    if (nombre.value == "" || apellido.value == "" || id.value == "" || correo.value == "" || direccion.value == "" || descripcion.value == "") {
        let faltantes = document.querySelector(".faltantes");
        faltantes.classList.add("faltantes-active");
        setTimeout(() => {
            faltantes.classList.remove("faltantes-active");
        }, 2000);
    } else if (mismaid()) {
        let mismaid = document.querySelector(".mismaid");
        mismaid.classList.add("mismaid-active");
        setTimeout(() => {
            mismaid.classList.remove("mismaid-active");
        }, 2000);
    } else {
        let nuevo = {
            nombre: nombre.value,
            apellido: apellido.value,
            id: id.value,
            correo: correo.value,
            direccion: direccion.value,
            descripcion: descripcion.value
        }
        registro.push(nuevo)
        let save = document.querySelector('.save');
        save.classList.add('save-active');
        setTimeout(() => {
            save.classList.remove('save-active');
        }, 2000);
        Limpiar();
    }
})


const mismaid = () => {
    for (let i = 0; i < registro.length; i++) {
        console.log(id.value);
        if (id.value == registro[i].id) {
            return true;
        }
    }
    return false;
}

const Limpiar = () => {
    nombre.value = "";
    apellido.value = "";
    id.value = "";
    correo.value = "";
    direccion.value = "";
    descripcion.value = "";
}