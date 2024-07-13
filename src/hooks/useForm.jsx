export const validateForm = (form) => {

    let isError = false;
    let errors = {};

    //Validate title
    if (!form.title.trim()) {
        errors.title = 'El campo "Titulo" no debe estar vacio.';
        isError = true;
    } else if (form.title.trim().length < 5) {
        errors.title = 'El título debe tener al menos 5 caracteres.'
        isError = true;
    }

    //Validate photo url
    if (!form.photo.trim()) {
        errors.photo = 'El campo "Imagen" no debe estar vacio.';
        isError = true;
    }else if(!isPhotoURLValid(form.photo.trim())) {
        errors.photo = 'La URL de la foto no es válida.';
        isError = true;
    }

    //Validate video url
    if (!form.link.trim()) {
        errors.link = 'El campo "Video" no debe estar vacio.';
        isError = true;
    } else if (!isVideoURLValid(form.link.trim())) {
        errors.link = 'La URL del video no es válida o no es un video válido.';
        isError = true;
    }


    //Validate Description
    if (!form.description.trim()) {
        errors.description = 'El campo "Descripción" no debe estar vacio.';
        isError = true;
    }else if (form.description.trim().length < 5) {
        errors.description = 'La descripción debe tener al menos 5 caracteres.';
        isError = true;
    }

    return isError ? errors : null;
}

// Validate photo URL
const isPhotoURLValid = (url) => {
    const photoUrlPattern = /\.(jpg|jpeg|png|gif)$/i;
    return photoUrlPattern.test(url);
};

// Validate video URL
const isVideoURLValid = (url) => {
    const videoUrlPattern = /^https:\/\/www\.youtube\.com\/embed\/[a-zA-Z0-9_-]+\?si=[a-zA-Z0-9_-]+$/;
    return videoUrlPattern.test(url);
};