/* ==================================================
   MENÚ MÓVIL
================================================== */

});document.addEventListener("DOMContentLoaded", () => {
    const botonMenu = document.getElementById("botonMenu");
    // O si usas clases: const botonMenu = document.querySelector(".menu-movil");
    const navMenu = document.querySelector("nav"); // Cambia esto por el selector de tu menú desplegable

    if (botonMenu) {
        botonMenu.addEventListener("click", () => {
            navMenu.classList.toggle("activo"); // Clase que muestra u oculta el menú en CSS
        });
    }
});


/* ==================================================
   CERRAR MENÚ AL HACER CLICK EN UN ENLACE
================================================== */

const enlacesMenu = document.querySelectorAll(".menu a");

enlacesMenu.forEach(function (enlace) {

    enlace.addEventListener("click", function () {

        menu.classList.remove("activo");

    });

});


/* ==================================================
   FORMULARIO DE CONTACTO
================================================== */

const formulario =
    document.getElementById("formularioContacto");


formulario.addEventListener("submit", function (evento) {

    evento.preventDefault();


    const nombre =
        document.getElementById("nombre").value;

    const email =
        document.getElementById("email").value;

    const mensaje =
        document.getElementById("mensaje").value;


    if (
        nombre === "" ||
        email === "" ||
        mensaje === ""
    ) {

        alert("Por favor, completa todos los campos.");

        return;

    }


    alert(
        "¡Gracias " +
        nombre +
        "! Tu mensaje fue preparado correctamente."
    );


    formulario.reset();

});


/* ==================================================
   ANIMACIÓN AL HACER SCROLL
================================================== */

const elementos =
    document.querySelectorAll(
        ".tarjeta, .obras-grid article, .galeria-item"
    );


const observador =
    new IntersectionObserver(

        function (entradas) {

            entradas.forEach(function (entrada) {

                if (entrada.isIntersecting) {

                    entrada.target.style.opacity = "1";

                    entrada.target.style.transform =
                        "translateY(0)";

                }

            });

        },

        {
            threshold: 0.15
        }

    );


elementos.forEach(function (elemento) {

    elemento.style.opacity = "0";

    elemento.style.transform =
        "translateY(30px)";

    elemento.style.transition =
        "opacity 0.6s ease, transform 0.6s ease";

    observador.observe(elemento);

});