/* ==================================================
       MENÚ MÓVIL Y SUBMENÚS
    ================================================== */
    const botonMenu = document.getElementById("botonMenu");
    const menu = document.querySelector(".menu");
    const dropdowns = document.querySelectorAll(".dropdown");

    if (botonMenu && menu) {
        botonMenu.addEventListener("click", (e) => {
            e.stopPropagation();
            menu.classList.toggle("activo");
        });
    }

    // Abrir/cerrar submenús al tocar en móvil
    dropdowns.forEach(dropdown => {
        const enlacePrincipal = dropdown.querySelector(":scope > a");

        if (enlacePrincipal) {
            enlacePrincipal.addEventListener("click", (e) => {
                if (window.innerWidth <= 900) {
                    e.preventDefault(); // Evita que salte a la sección y cierre el menú
                    dropdown.classList.toggle("abierto");
                }
            });
        }
    });

    // Cerrar el menú solo al hacer clic en enlaces finales (no en los padres de submenú)
    const enlacesMenu = document.querySelectorAll(".menu a");

    enlacesMenu.forEach(enlace => {
        enlace.addEventListener("click", () => {
            const esPadreDropdown = enlace.parentElement.classList.contains("dropdown");

            if (window.innerWidth <= 900 && !esPadreDropdown) {
                menu.classList.remove("activo");
                dropdowns.forEach(d => d.classList.remove("abierto"));
            }
        });
    });

    // Cerrar menú si se toca fuera del encabezado
    document.addEventListener("click", (e) => {
        if (menu && botonMenu && !menu.contains(e.target) && !botonMenu.contains(e.target)) {
            menu.classList.remove("activo");
            dropdowns.forEach(d => d.classList.remove("abierto"));
        }
    });