const eventos = [];

const eliminar = async function () {
    const idEvento = this.idEvento;
    const respuesta = await Swal.fire({
        title: 'Deseas Eliminar?',
        text: "No podrás revertir los cambios!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Sí, Eliminalo!'
    });
    if (respuesta.isConfirmed) {
        eventos.splice(idEvento, 1);
        cargarTabla();
        Swal.fire("Eliminado!", "Tus datos han sido borrados.", "success")
    }
};



const cargarTabla = () => {
    const tbody = document.querySelector("#listInput");
    tbody.innerHTML = "";
    for (let i = 0; i < eventos.length; ++i) {
        let f = eventos[i];

        let fila = document.createElement("tr");

        let celdaNombre = document.createElement("td"); celdaNombre.innerText = f.nombre;
        let celdaApellido = document.createElement("td"); celdaApellido.innerText = f.apellido;
        let celdaCorreo = document.createElement("td"); celdaCorreo.innerText = f.correo;
        let celdaCelular = document.createElement("td"); celdaCelular.innerText = f.celular;
        let celdaFecha = document.createElement("td"); celdaFecha.innerText = f.fecha;
        let celdaInvitados = document.createElement("td"); celdaInvitados.innerText = f.invitados;
        let celdaZona = document.createElement("td"); celdaZona.innerText = f.zona;
        let celdaLugar = document.createElement("td"); celdaLugar.innerText = f.lugar;
        let celdaAcciones = document.createElement("td");
        celdaAcciones.classList.add("text-center")
        let btnEliminar = document.createElement('button');
        btnEliminar.classList.add("btn", "btn-danger", "btn-sm");
        btnEliminar.innerText = "Eliminar";
        btnEliminar.idEvento = i;
        btnEliminar.addEventListener("click", eliminar);
        celdaAcciones.appendChild(btnEliminar);

        fila.appendChild(celdaNombre);
        fila.appendChild(celdaApellido);
        fila.appendChild(celdaCorreo);
        fila.appendChild(celdaCelular);
        fila.appendChild(celdaFecha);
        fila.appendChild(celdaInvitados);
        fila.appendChild(celdaZona);
        fila.appendChild(celdaLugar);
        fila.appendChild(celdaAcciones);

        tbody.appendChild(fila);

    }


};

document.querySelector("#registrar-btn").addEventListener("click", () => {
    let nombre = document.querySelector("#nameInput").value;
    let apellido = document.querySelector("#surnameInput").value;
    let correo = document.querySelector("#emailInput").value;
    let celular = document.querySelector("#cellInput").value;
    let fecha = document.querySelector("#dateInput").value;
    let invitados = document.querySelector("#guestInput").value;
    let zona = document.querySelector("#zoneInput").value;
    let lugar = document.querySelector("#placeInput").value;

    let errores = [];

    if (nombre.length < 1 || nombre.trim() == "") {
        errores.push("Ingresá tu/s Nombre/s");
    }
    if (apellido.length < 1 || apellido.trim() == "") {
        errores.push("Ingresá tu/s Apellido/s")
    }
    if (correo.length < 1 || correo.trim() == "") {
        errores.push("Ingresá tu Correo Electrónico")
    }
    if (celular.length < 1 || celular.trim() == "" || isNaN(celular)) {
        errores.push("Ingresá tu Teléfono")
    }
    if (fecha.length < 1 || fecha.trim() == "") {
        errores.push("Ingresá una Fecha")
    }
    if (invitados.length < 1 || invitados.trim() == "") {
        errores.push("Ingresá un número de Invitados")
    }
    if (zona.length < 1 || zona.trim() == "") {
        errores.push("Ingresá una Zona")
    }
    if (lugar == 0 || lugar.trim() == "") {
        errores.push("Ingresá una Opción")
    }

    if (errores.length == 0) {
        let evento = {};
        evento.nombre = nombre;
        evento.apellido = apellido;
        evento.correo = correo;
        evento.celular = celular;
        evento.fecha = fecha;
        evento.invitados = invitados;
        evento.zona = zona;
        evento.lugar = lugar;
        eventos.push(evento);
        cargarTabla();
        form.reset();

    } else {
        let mensaje = errores.join("<br/>")
        swal.fire("Errores de Validación", mensaje, "warning");
    }
});

document.querySelector("#borrar-btn").addEventListener("click", () => {
    document.querySelector("#nameInput").value = "";
    document.querySelector("#surnameInput").value = "";
    document.querySelector("#emailInput").value = "";
    document.querySelector("#cellInput").value = "";
    document.querySelector("#dateInput").value = "";
    document.querySelector("#guestInput").value = "";
    document.querySelector("#zoneInput").value = "";
    document.querySelector("#placeInput").value = "";
});



