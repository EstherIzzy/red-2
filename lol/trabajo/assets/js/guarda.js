// Almacenar los nombres de archivo de las imágenes en LocalStorage
function guardarImagenesLocalmente() {
    var nombresImagenes = [];
    $(".image-container img").each(function() {
        nombresImagenes.push($(this).attr("src"));
    });
    localStorage.setItem("imagenes", JSON.stringify(nombresImagenes));
}

// Cargar las imágenes desde LocalStorage al cargar la página
$(document).ready(function() {
    var nombresImagenes = JSON.parse(localStorage.getItem("imagenes"));
    if (nombresImagenes) {
        nombresImagenes.forEach(function(nombre) {
            createPreview({ name: nombre }); // Llama a la función createPreview con el nombre de la imagen
        });
    }
});

/* no sabemos si funciona */