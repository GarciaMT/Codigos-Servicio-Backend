  const url = 'http://localhost:3500/usuario';
  const main = document.getElementById('containerT'); //contenedor de los datos a insertar

    document.addEventListener('DOMContentLoaded', () => {
      getUsuarios();
    });

    // Obtener usuarios con Axios
    const getUsuarios = async () => {
      try {
        const res = await axios.get(url);
        mostrarUsuarios(res.data);
      } catch (error) {
        console.error("Error al obtener los usuarios:", error);
        main.innerHTML = `<p style="color:red; text-align:center;">Error al cargar usuarios. Verifica que el servidor esté funcionando.</p>`;
      }
    };

    // Mostrar los usuarios en una tabla
    function mostrarUsuarios(usuarios) {
      let tabla = ``;

      usuarios.forEach(usuario => {
        tabla += `
          <tr>
            <td>${usuario.id}</td>
            <td>${usuario.nombre}</td>
            <td>${usuario.email}</td>
            <td>${usuario.fecha_registro}</td>
            <td>
              <button class="eliminar-btn" data-id="${usuario.id}">Eliminar</button>
              <button class="actualizar-btn" data-id="${usuario.id}">Actualizar</button>
            </td>
          </tr>
        `;
      });

      main.innerHTML = tabla;
    }
