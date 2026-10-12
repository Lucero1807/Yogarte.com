/* ==================================================
   MENÚ MÓVIL
================================================== */

const botonMenu = document.getElementById("botonMenu");
const menu = document.querySelector(".menu");

botonMenu.addEventListener("click", function () {

    menu.classList.toggle("activo");

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