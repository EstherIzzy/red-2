$(document).ready(function(){

    // Modal

    $(".modal").on("click", function (e) {
        console.log(e);
        if (($(e.target).hasClass("modal-main") || $(e.target).hasClass("close-modal")) && $("#loading").css("display") == "none") {
            closeModal();
        }
    });

    // -> Modal

    // Abrir el inspector de archivos
    
    $(document).on("click", "#add-photo", function(){
        $("#add-new-photo").click();
    });
    
    // -> Abrir el inspector de archivos

    // Cachamos el evento change
    
    $(document).on("change", "#add-new-photo", function () {
    
        console.log(this.files);
        var files = this.files;
        var element;
        var supportedImages = ["image/jpeg", "image/png", "image/gif"];
        var seEncontraronElementoNoValidos = false;

        for (var i = 0; i < files.length; i++) {
            element = files[i];
            
            if (supportedImages.indexOf(element.type) != -1) {
                createPreview(element);
            }
            else {
                seEncontraronElementoNoValidos = true;
            }
        }

        if (seEncontraronElementoNoValidos) {
            showMessage("Se encontraron archivos no validos, asegurate de que los maAppaches no se lo hayan comido.");
        }
        else {
            showMessage("Se subió exitosAppachemente.");
        }
    
    });
    
    // -> Cachamos el evento change

    // Eliminar previsualizaciones
    
    $(document).on("click", "#Images .image-container", function(e){
        $(this).parent().remove();
    });
    
    // -> Eliminar previsualizaciones

});