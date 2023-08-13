export const Validate = (data) => {
    let errors = {};

    if (!data.title) {
        errors.title = "Titulo del producto requerido.";
    } else if (data.title.length > 120) {
        errors.title = "El titulo del producto es demasiado largo (máximo 120 caracteres)";
    }

    if (!data.image) errors.image = "Agrega una imagen del producto.";

    if (!data.price) {
        errors.price = "El precio es obligatorio."
    } else if (isNaN(parseFloat(data.price)) || parseFloat(data.price) <= 0) {
        errors.price = "Por favor ingresa un precio válido mayor a 0";
    }

    if (!data.category) errors.category = "La categoría es obligatoria."

    if (isNaN(parseInt(data.stock)) || parseInt(data.stock) < 0) {
        errors.stock = "Ingresa un valor válido para los productos disponibles (número entero, no negativo)";
    }

    if (isNaN(parseInt(data.sold)) || parseInt(data.sold) <= 0) {
        errors.sold = "Ingresa un valor valido a partir de 0"
    }

    if (!data.description) {
        errors.description = "Descripción del producto requerida"
    }

    return errors;
};
