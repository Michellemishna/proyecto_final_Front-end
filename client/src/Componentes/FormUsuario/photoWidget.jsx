//Se recibe el archivo a cloudinary y se guarda
const Cloudinary = async (file) => {
    const data = new FormData();
    data.append("file", file);
    data.append("upload_preset", "profilePhotos")
    const res = await fetch(
        `https://api.cloudinary.com/v1_1/dhucdz03p/image/upload`,
        {
            method: "POST",
            body: data,
        }
    )
    const files = await res.json();
    return files.secure_url
}
export default Cloudinary;