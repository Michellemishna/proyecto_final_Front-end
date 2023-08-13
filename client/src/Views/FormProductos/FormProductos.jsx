

//FORMULARIO CON FORMIK NO FUNCIONO


// import React, { useEffect, useState } from 'react';
// import { useSelector, useDispatch } from 'react-redux';
// import { Formik, Form, Field, ErrorMessage } from 'formik';
// import * as Yup from 'yup';
// import axios from 'axios';
// import { getCategories } from '../../Redux/Actions/action';

// const validationSchema = Yup.object().shape({
//     title: Yup.string().required('El nombre del producto es obligatorio'),
//     image: Yup.string().required('Se necesita una imagen'),
//     price: Yup.number().required('El precio es requerido').positive('Debe ser un valor positivo'),
//     category: Yup.string().required('Agrega una categoría'),
//     stock: Yup.number().integer().min(1).required('Agrega las unidades disponibles'),
//     sold: Yup.number().integer().min(0).required('Agrega las unidades vendidas'),
//     description: Yup.string().required('Debes agregar una descripción'),
// });

// const ProductForm = () => {
//     const dispatch = useDispatch();
//     const categories = useSelector((state) => state.categories);

//     const [selectedCategory, setSelectedCategory] = useState('');

//     useEffect(() => {
//         dispatch(getCategories());
//     }, [dispatch]);

//     const handleSubmit = async (values, {setSubmitting}) => {
//         try {
//       selectedCategoryId= categories.find((category) => category.name === selectedCategory)?.id;
//             const dataToSend = { ...values, category: selectedCategoryId};
//             const response = await axios.post('/products', dataToSend);
//             console.log('Producto creado', response.data);
//             console.log(dataToSend)
//         } catch (error) {
//             console.error('Error al crear producto', error)
//         } finally {
//             setSubmitting(false);
//         }
//     }
//     return (
//         <Formik
//             initialValues={{
//                 title: '',
//                 image: '',
//                 price: 0,
//                 stock: 0,
//                 // category: '',
//                 sold: 0,
//                 description: '',
//             }}
//             validationSchema={validationSchema}
//             onSubmit={handleSubmit}
//         >
//             {({ errors, touched, isSubmitting }) => (
//                 <Form className="max-w-md mx-auto my-4 p-4 border rounded-lg shadow-lg">
//                     <div className="mb-4">
//                         <label htmlFor="title" className="block font-semibold mb-1 text-gray-700">Nombre del producto:</label>
//                         <Field type="text" id="title" name="title" className="w-full p-2 border rounded focus:outline-none focus:ring focus:border-blue-300" />
//                         <ErrorMessage name="title" component="div" className="text-red-500" />
//                     </div>

//                     <div className="mb-4">
//                         <label htmlFor="image" className="block font-semibold mb-1 text-gray-700">URL de la imagen:</label>
//                         <Field type="text" id="image" name="image" className="w-full p-2 border rounded focus:outline-none focus:ring focus:border-blue-300" />
//                         <ErrorMessage name="image" component="div" className="text-red-500" />
//                     </div>

//                     <div className="mb-4">
//                         <label htmlFor="price" className="block font-semibold mb-1 text-gray-700">Precio:</label>
//                         <Field type="number" id="price" name="price" className="w-full p-2 border rounded focus:outline-none focus:ring focus:border-blue-300" />
//                         <ErrorMessage name="price" component="div" className="text-red-500" />
//                     </div>

//                     <div className="mb-4">
//                         <label htmlFor="stock" className="block font-semibold mb-1 text-gray-700">Unidades disponibles:</label>
//                         <Field type="number" id="stock" name="stock" className="w-full p-2 border rounded focus:outline-none focus:ring focus:border-blue-300" />
//                         <ErrorMessage name="stock" component="div" className="text-red-500" />
//                     </div>

//                     <div className="mb-4">
//                         <label htmlFor="sold" className="block font-semibold mb-1 text-gray-700">Unidades vendidas:</label>
//                         <Field type="number" id="sold" name="sold" className="w-full p-2 border rounded focus:outline-none focus:ring focus:border-blue-300" />
//                         <ErrorMessage name="sold" component="div" className="text-red-500" />
//                     </div>

//                     <div className="mb-4">
//                         <label htmlFor="category" className="block font-semibold mb-1 text-gray-700">Categoría:</label>
//                         <Field as="select" id="category" name="category" onChange={(e) => setSelectedCategory(e.target.value)} className="w-full p-2 border rounded focus:outline-none focus:ring focus:border-blue-300">
//                             <option value="">Seleccionar categoría</option>
//                             {categories.map((category) => (
//                                 <option key={category.id} value={category.name}>
//                                     {category.name}
//                                 </option>
//                             ))}
//                         </Field>
//                         <ErrorMessage name="category" component="div" className="text-red-500" />
//                     </div>

//                     <button type="submit" disabled={isSubmitting}>
//                         Guardar Producto
//                     </button>
//                 </Form>
//             )}
//         </Formik>
//     );
// }
// export default ProductForm;

// import { useState, useEffect } from 'react';
// import axios from 'axios';
// import { useSelector, useDispatch } from 'react-redux';
// import { getCategories, addProduct } from '../../Redux/Actions/action';
// import { Validate } from './Validation'
// import Swal from 'sweetalert2';
// import { useNavigate } from 'react-router-dom';
// import UploadWidget from '../../Componentes/CrearProductos/uploadWidget';

// const url = 'https://api.cloudinary.com/v1_1/dhucdz03p/image/upload/';
// const UPLOAD_PRESET = 'products';

// const ProductForm = () => {
//     const dispatch = useDispatch();
//     const categories = useSelector((state) => state.categories);
//     const navigate = useNavigate();
//     const [formData, setFormData] = useState({
//         title: '',
//         image: '',
//         price: 0,
//         stock: 0,
//         sold: 0,
//         description: '',
//         category: '',
//     });

//     const [errors, setErrors] = useState({})

//     useEffect(() => {
//         dispatch(getCategories());
//     }, [dispatch]);

//     const handleInputChange = (e) => {
//         const { name, value } = e.target;
//         setFormData({
//             ...formData,
//             [name]: value,
//         });
//     };
//     const handleImageUpload = async (e) => {
//         const file = e.target.files[0];

//         const formData = new FormData();
//         formData.append('file', file);
//         formData.append('upload_preset', UPLOAD_PRESET);
//         try {
//             const response = await axios.post(url, formData, {
//                 headers: {
//                     'Content-Type': 'multipart/form-data'
//                 }
//             })
//             setFormData({
//                 ...formData,
//                 image: response.data.secure_url
//             })
//             console.log('imagen subida:', response.data.secure_url);
//         } catch (error) {
//             console.error('Error al subir la imagen:', error)
//         }
//     }
//     const handleSubmit = async (e) => {
//         e.preventDefault();
//         const validationErrors = Validate(formData);
//         setErrors(validationErrors)

//         if (Object.keys(validationErrors).length > 0) {
//             return;
//         }
//         try {
//             const response = await axios.post('/products', formData);
//             console.log('Producto creado', response.data);
//             // setCreatedProduct(response.data);
//             dispatch(addProduct(response.data));
//             Swal.fire({
//                 title: `Producto creado correctamente ${response.data.title}`,
//                 icon: 'success',
//                 confirmButtonText: 'Ok',
//             }).then(() => {
//                 navigate(`/Productos/page/1`);
//             });

//             console.log(formData);
//         } catch (error) {
//             console.error('Error al crear producto', error);
//             Swal.fire({
//                 title: 'Error',
//                 text: 'Ocurrió un erorr al crear el producto. Intentalo de nuevo',
//                 icon: 'error',
//                 confirmButtonText: 'Ok',
//             })
//         }
//     };

//     return (
//         <div className="w-full max-w-md mx-auto p-4 border rounded-lg shadow-lg">
//             <form onSubmit={handleSubmit}>
//                 <div className="mb-4">
//                     <label htmlFor="title" className="block font-semibold mb-1 text-gray-700">
//                         Nombre del producto:
//                     </label>
//                     <input
//                         type="text"
//                         id="title"
//                         name="title"
//                         value={formData.title}
//                         onChange={handleInputChange}
//                         className="w-full p-2 border rounded focus:outline-none focus:ring focus:border-blue-300"
//                     />
//                     {errors.title && <div className="text-red-500">{errors.title}</div>}
//                 </div>

//                 <div className="mb-4">
//                     <label htmlFor="image" className="block font-semibold mb-1 text-gray-700">
//                         Imagen:
//                     </label>
//                     {/* <input
//                         type="file"
//                         id="image"
//                         name="image"
//                         onChange={handleImageUpload}
//                         className="w-full p-2 border-gray-300 rounded focus:outline-none focus:ring focus:border-blue-300"
//                     /> */}
//                     <UploadWidget />
//                     {errors.image && <div className="text-red-500">{errors.image}</div>}
//                 </div>

//                 <div className="mb-4">
//                     <label htmlFor="price" className="block font-semibold mb-1 text-gray-700">
//                         Precio:
//                     </label>
//                     <input
//                         type="number"
//                         id="price"
//                         name="price"
//                         value={formData.price}
//                         onChange={handleInputChange}
//                         className="w-full p-2 border rounded focus:outline-none focus:ring focus:border-blue-300"
//                     />
//                     {errors.price && <div className="text-red-500">{errors.price}</div>}
//                 </div>

//                 <div className="mb-4">
//                     <label htmlFor="stock" className="block font-semibold mb-1 text-gray-700">
//                         Unidades disponibles:
//                     </label>
//                     <input
//                         type="number"
//                         id="stock"
//                         name="stock"
//                         value={formData.stock}
//                         onChange={handleInputChange}
//                         className="w-full p-2 border rounded focus:outline-none focus:ring focus:border-blue-300"
//                     />
//                     {errors.stock && <div className="text-red-500">{errors.stock}</div>}
//                 </div>

//                 <div className="mb-4">
//                     <label htmlFor="sold" className="block font-semibold mb-1 text-gray-700">
//                         Unidades vendidas:
//                     </label>
//                     <input
//                         type="number"
//                         id="sold"
//                         name="sold"
//                         value={formData.sold}
//                         onChange={handleInputChange}
//                         className="w-full p-2 border rounded focus:outline-none focus:ring focus:border-blue-300"
//                     />
//                     {errors.sold && <div className="text-red-500">{errors.sold}</div>}
//                 </div>

//                 <div className="mb-4">
//                     <label htmlFor="category" className="block font-semibold mb-1 text-gray-700">
//                         Categoría:
//                     </label>
//                     <select
//                         id="category"
//                         name="category"
//                         value={formData.category}
//                         onChange={handleInputChange}
//                         className="w-full p-2 border rounded focus:outline-none focus:ring focus:border-blue-300"
//                     >
//                         <option value="">Seleccionar categoría</option>
//                         {categories.map((category) => (
//                             <option key={category.id} value={category.name}>
//                                 {category.name}
//                             </option>
//                         ))}
//                     </select>
//                 </div>

//                 <div className="mb-4">
//                     <label htmlFor="description" className="block font-semibold mb-1 text-gray-700">
//                         Descripción del producto:
//                     </label>
//                     <textarea
//                         id="description"
//                         name="description"
//                         value={formData.description}
//                         onChange={handleInputChange}
//                         className="w-full p-2 border rounded focus:outline-none focus:ring focus:border-blue-300"
//                     />
//                     {errors.description && <div className="text-red-500">{errors.description}</div>}
//                 </div>

//                 <button
//                     type="submit"
//                     className="mt-4 bg-violet-800
//                     text-white py-2 px-4 rounded
//                     hover:bg-violet-900 focus:outline-none focus:ring-2
//                     focus:ring-blue-600"
//                 // disabled={isSubmitting}
//                 >
//                     Guardar Producto
//                 </button>
//             </form>
//         </div>
//     );
// };
// export default ProductForm;
// import { useState, useEffect } from 'react';
// import axios from 'axios';
// import { useSelector, useDispatch } from 'react-redux';
// import { getCategories, addProduct } from '../../Redux/Actions/action';
// import { Validate } from './Validation'
// import UploadWidget from '../../Componentes/CrearProductos/uploadWidget';
// // import { useNavigate } from 'react-router-dom';

// const ProductForm = () => {
//     const dispatch = useDispatch();
//     const categories = useSelector((state) => state.categories);
//     // const [createdProduct, setCreatedProduct] = useState(null);
//     // const navigate = useNavigate();

//     const [succesMessage, setSuccesMessage] = useState('');
//     const [formData, setFormData] = useState({
//         title: '',
//         image: '',
//         price: 0,
//         stock: 0,
//         sold: 0,
//         description: '',
//         category: '',
//     });

//     const [errors, setErrors] = useState({})

//     useEffect(() => {
//         dispatch(getCategories());
//     }, [dispatch]);

//     const [imageUrl, setImageUrl] = useState('');

//     const handleInputChange = (e) => {
//         const { name, value } = e.target;
//         setFormData({
//             ...formData,
//             [name]: value,
//         });
//     };

//     const handleSubmit = async (e) => {
//         e.preventDefault();
//         const validationErrors = Validate(formData);
//         setErrors(validationErrors)

//         if (Object.keys(validationErrors).length > 0) {
//             return;
//         }

//         const formDataWithImage = {
//             ...formData,
//             image: imageUrl,
//         }

//         try {
//             const response = await axios.post('/products', formData);
//             console.log('Producto creado', response.data);
//             // setCreatedProduct(response.data);
//             setSuccesMessage('Producto creado correctamente');
//             dispatch(addProduct(response.data))
//             setFormData({
//                 title: '',
//                 image: '',
//                 price: '',
//                 sold: 0,
//                 description: '',
//                 category: '',
//             });
//             setImageUrl('');

//             //Configuracion para redireccion
//             // setTimeout(() => {
//             //     if (createdProduct) {
//             //         navigate.push(`/detail/${createdProduct.id}`)
//             //     }
//             // }, 3000)

//             console.log(formDataWithImage);
//         } catch (error) {
//             console.error('Error al crear producto', error);
//         }
//     };

//     return (
//         <div className="w-full max-w-md mx-auto p-4 border rounded-lg shadow-lg">
//             <form onSubmit={handleSubmit}>
//                 <div className="mb-4">
//                     <label htmlFor="title" className="block font-semibold mb-1 text-gray-700">
//                         Nombre del producto:
//                     </label>
//                     <input
//                         type="text"
//                         id="title"
//                         name="title"
//                         value={formData.title}
//                         onChange={handleInputChange}
//                         className="w-full p-2 border rounded focus:outline-none focus:ring focus:border-blue-300"
//                     />
//                     {errors.title && <div className="text-red-500">{errors.title}</div>}
//                 </div>

//                 <div className="mb-4">
//                     <label htmlFor="image" className="block font-semibold mb-1 text-gray-700">
//                         Imagen:
//                     </label>
//                     {/* <input
//                         type="text"
//                         id="image"
//                         name="image"
//                         value={formData.image}
//                         onChange={handleInputChange}
//                         className="w-full p-2 border-gray-300 rounded focus:outline-none focus:ring focus:border-blue-300"
//                     /> */}
//                     <div>
//                         <UploadWidget setImageUrl={setImageUrl} />
//                     </div>
//                     {/* {errors.image && <div className="text-red-500">{errors.image}</div>} */}
//                 </div>

//                 <div className="mb-4">
//                     <label htmlFor="price" className="block font-semibold mb-1 text-gray-700">
//                         Precio:
//                     </label>
//                     <input
//                         type="number"
//                         id="price"
//                         name="price"
//                         value={formData.price}
//                         onChange={handleInputChange}
//                         className="w-full p-2 border rounded focus:outline-none focus:ring focus:border-blue-300"
//                     />
//                     {errors.price && <div className="text-red-500">{errors.price}</div>}
//                 </div>

//                 <div className="mb-4">
//                     <label htmlFor="stock" className="block font-semibold mb-1 text-gray-700">
//                         Unidades disponibles:
//                     </label>
//                     <input
//                         type="number"
//                         id="stock"
//                         name="stock"
//                         value={formData.stock}
//                         onChange={handleInputChange}
//                         className="w-full p-2 border rounded focus:outline-none focus:ring focus:border-blue-300"
//                     />
//                     {errors.stock && <div className="text-red-500">{errors.stock}</div>}
//                 </div>

//                 <div className="mb-4">
//                     <label htmlFor="sold" className="block font-semibold mb-1 text-gray-700">
//                         Unidades vendidas:
//                     </label>
//                     <input
//                         type="number"
//                         id="sold"
//                         name="sold"
//                         value={formData.sold}
//                         onChange={handleInputChange}
//                         className="w-full p-2 border rounded focus:outline-none focus:ring focus:border-blue-300"
//                     />
//                     {errors.sold && <div className="text-red-500">{errors.sold}</div>}
//                 </div>

//                 <div className="mb-4">
//                     <label htmlFor="category" className="block font-semibold mb-1 text-gray-700">
//                         Categoría:
//                     </label>
//                     <select
//                         id="category"
//                         name="category"
//                         value={formData.category}
//                         onChange={handleInputChange}
//                         className="w-full p-2 border rounded focus:outline-none focus:ring focus:border-blue-300"
//                     >
//                         <option value="">Seleccionar categoría</option>
//                         {categories.map((category) => (
//                             <option key={category.id} value={category.name}>
//                                 {category.name}
//                             </option>
//                         ))}
//                     </select>
//                 </div>

//                 <div className="mb-4">
//                     <label htmlFor="description" className="block font-semibold mb-1 text-gray-700">
//                         Descripción del producto:
//                     </label>
//                     <textarea
//                         id="description"
//                         name="description"
//                         value={formData.description}
//                         onChange={handleInputChange}
//                         className="w-full p-2 border rounded focus:outline-none focus:ring focus:border-blue-300"
//                     />
//                     {errors.description && <div className="text-red-500">{errors.description}</div>}
//                 </div>

//                 <button
//                     type="submit"
//                     className="mt-4 bg-violet-800
//                     text-white py-2 px-4 rounded
//                     hover:bg-violet-900 focus:outline-none focus:ring-2
//                     focus:ring-blue-600"
//                 // disabled={isSubmitting}
//                 >
//                     Guardar Producto
//                 </button>

//                 {succesMessage && (
//                     <div className='mt-4 p-2 text-green-600 bg-green-200 rounded'>
//                         {succesMessage}
//                     </div>
//                 )}
//             </form>
//         </div>
//     );
// };

// export default ProductForm;

import { useState, useEffect } from 'react';
import axios from 'axios';
import { useSelector, useDispatch } from 'react-redux';
import { getCategories, addProduct } from '../../Redux/Actions/action';
import UploadWidget from '../../Componentes/CrearProductos/uploadWidget';

const ProductForm = () => {
    const dispatch = useDispatch();
    const categories = useSelector((state) => state.categories);

    const [successMessage, setSuccessMessage] = useState('');
    const [formData, setFormData] = useState({
        title: '',
        image: '',
        price: 0,
        stock: 0,
        sold: 0,
        description: '',
        category: '',
    });

    useEffect(() => {
        dispatch(getCategories());
    }, [dispatch]);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevFormData) => ({
            ...prevFormData,
            [name]: value,
        }));
    };

    const handleImageUpload = (url) => {
        setFormData((prevFormData) => ({
            ...prevFormData,
            image: url,
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const selectedCategoryId = categories.find((category) => category.name === formData.category)?.id;
            const dataToSend = { ...formData, categoryId: selectedCategoryId };
            const response = await axios.post('/products', dataToSend);
            console.log('Producto creado', response.data);
            setSuccessMessage('Producto creado correctamente');
            dispatch(addProduct(response.data));
            setFormData({
                title: '',
                image: '',
                price: 0,
                stock: 0,
                sold: 0,
                description: '',
                category: '',
            });
        } catch (error) {
            console.error('Error al crear producto', error);
        }
    };

    return (
        <div className="w-full max-w-md mx-auto p-4 border rounded-lg shadow-lg">
            <form onSubmit={handleSubmit}>
                <div className="mb-4">
                    <label htmlFor="title" className="block font-semibold mb-1 text-gray-700">
                        Nombre del producto:
                    </label>
                    <input
                        type="text"
                        id="title"
                        name="title"
                        value={formData.title}
                        onChange={handleInputChange}
                        className="w-full p-2 border rounded focus:outline-none focus:ring focus:border-blue-300"
                    />
                </div>

                <div className="mb-4">
                    <label htmlFor="image" className="block font-semibold mb-1 text-gray-700">
                        Imagen:
                    </label>
                    <div>
                        {formData.image && <img src={formData.image} alt="Preview" className="mb-2 max-h-40" />}
                        <UploadWidget setImageUrl={handleImageUpload} />
                    </div>
                </div>

                <div className="mb-4">
                    <label htmlFor="price" className="block font-semibold mb-1 text-gray-700">
                        Precio:
                    </label>
                    <input
                        type="number"
                        id="price"
                        name="price"
                        value={formData.price}
                        onChange={handleInputChange}
                        className="w-full p-2 border rounded focus:outline-none focus:ring focus:border-blue-300"
                    />
                </div>

                <div className="mb-4">
                    <label htmlFor="stock" className="block font-semibold mb-1 text-gray-700">
                        Unidades disponibles:
                    </label>
                    <input
                        type="number"
                        id="stock"
                        name="stock"
                        value={formData.stock}
                        onChange={handleInputChange}
                        className="w-full p-2 border rounded focus:outline-none focus:ring focus:border-blue-300"
                    />
                </div>

                <div className="mb-4">
                    <label htmlFor="sold" className="block font-semibold mb-1 text-gray-700">
                        Unidades vendidas:
                    </label>
                    <input
                        type="number"
                        id="sold"
                        name="sold"
                        value={formData.sold}
                        onChange={handleInputChange}
                        className="w-full p-2 border rounded focus:outline-none focus:ring focus:border-blue-300"
                    />
                </div>

                <div className="mb-4">
                    <label htmlFor="category" className="block font-semibold mb-1 text-gray-700">
                        Categoría:
                    </label>
                    <select
                        id="category"
                        name="category"
                        value={formData.category}
                        onChange={handleInputChange}
                        className="w-full p-2 border rounded focus:outline-none focus:ring focus:border-blue-300"
                    >
                        <option value="">Seleccionar categoría</option>
                        {categories.map((category) => (
                            <option key={category.id} value={category.id}>
                                {category.name}
                            </option>
                        ))}
                    </select>
                </div>

                <div className="mb-4">
                    <label htmlFor="description" className="block font-semibold mb-1 text-gray-700">
                        Descripción del producto:
                    </label>
                    <textarea
                        id="description"
                        name="description"
                        value={formData.description}
                        onChange={handleInputChange}
                        className="w-full p-2 border rounded focus:outline-none focus:ring focus:border-blue-300"
                    />
                </div>

                <button
                    type="submit"
                    className="mt-4 bg-violet-800 text-white py-2 px-4 rounded hover:bg-violet-900 focus:outline-none focus:ring-2 focus:ring-blue-600"
                >
                    Guardar Producto
                </button>

                {successMessage && (
                    <div className="mt-4 p-2 text-green-600 bg-green-200 rounded">{successMessage}</div>
                )}
            </form>
        </div>
    );
};

export default ProductForm;