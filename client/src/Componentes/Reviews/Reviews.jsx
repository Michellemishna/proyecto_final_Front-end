import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { create_new_review, getReviews, datosDelUsuario } from "../../Redux/Actions/action";
import swal from "sweetalert2";

const Reviews = ({id}) => {
  const reviews = useSelector((state) => state.reviews);
  const LosDatos = useSelector((state) => state.datosDelUsuario);

  const dispatch = useDispatch();
  const [hasReviewed, setHasReviewed] = useState(false);
  const [input, setInput] = useState({ comment: "", calification: 0, ProductId: id });

  useEffect(() => {
    dispatch(datosDelUsuario()).catch((error) => {
      console.error("Error al obtener los datos del usuario:", error);
    });
  }, [dispatch]);

  useEffect(() => {
    if (LosDatos.user && LosDatos.user.usuario) {
      setInput((prevInput) => ({
        ...prevInput,
        customerUser: LosDatos.user.usuario,
      }));
    }
  }, [LosDatos.user]);

useEffect(() => {
  const reviewed = reviews.length === 0 ? false : reviews.some((review) => review.ProductId === id && review.customerUser === LosDatos.user.usuario); //usuario 
  setHasReviewed(reviewed);
}, [reviews, id]);


  const handlechange = (e) => {
    e.preventDefault();
    setInput((prevInput) => ({
      ...prevInput,
      [e.target.name]: e.target.value
    }));
  };

  const handlesubmit = (event) => {
    event.preventDefault();
    if (!input.comment || input.calification === 0) {
      new swal("Datos no completados");
    } else if (hasReviewed) {
      new swal("Sólo puedes dejar una reseña por producto");
    } else {
      const reviewData = {
        ...input,
        customerUser: LosDatos.user.usuario,
      };
  
      dispatch(create_new_review(reviewData));
  
      swal.fire("Tu comentario ha sido creado, ¡muchas gracias!");
  
      setInput({
        comment: "",
        calification: 0,
        customerUser: LosDatos.user.usuario,
        productId: id,
      });
    }
  };
  
    
  useEffect(() => {
    dispatch(getReviews(id));
    if(LosDatos.user.usuario){
      setInput({ comment: "", calification: 0, ProductId: id })
    }
  }, [dispatch, id, LosDatos.user.usuario]);
  
   
  return (
    <div className=" md:px-2 2xl:px-2 2xl:container 2xl:mx-auto flex justify-center items-center">
      <div className="flex flex-col justify-start items-start w-full">
        <div className="flex justify-start items-start">
          <p className="text-3sm font-semibold leading-6 lg:leading-10 text-gray-600">Opinión:</p>
        </div>
        {
          LosDatos.user.email ? 
          <form className="relative w-full" onSubmit={handlesubmit}>
            <div className="flex flex-row absolute bottom-2 right-3">
              <svg xmlns="http://www.w3.org/2000/svg" className={`h-5 w-6 ${input.calification >= 1 ? 'fill-[#fbff00]' : ''}`} fill="#1f2937" viewBox="0 0 24 24" stroke="none" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
              </svg>
              <svg xmlns="http://www.w3.org/2000/svg" className={`ml-2 h-5 w-6 ${input.calification >= 2 ? 'fill-[#fbff00]' : ''}`} fill="#1f2937" viewBox="0 0 24 24" stroke="none" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
              </svg>
              <svg xmlns="http://www.w3.org/2000/svg" className={`ml-2 h-5 w-6 ${input.calification >= 3 ? 'fill-[#fbff00]' : ''}`} fill="#1f2937" viewBox="0 0 24 24" stroke="none" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
              </svg>
              <svg xmlns="http://www.w3.org/2000/svg" className={`ml-2 h-5 w-6 ${input.calification >= 4 ? 'fill-[#fbff00]' : ''}`} fill="#1f2937" viewBox="0 0 24 24" stroke="none" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
              </svg>
              <svg xmlns="http://www.w3.org/2000/svg" className={`ml-2 h-5 w-6  ${input.calification === '5' ? 'fill-[#fbff00]' : ''}`} fill="#1f2937" viewBox="0 0 24 24" stroke="none" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
              </svg>
            </div>
            <button onChange={(e) => handlesubmit(e)} title="Enviar cambios" className="text-center absolute top-2 right-2 cursor-pointer h-6 w-10 text-white bg-gradient-to-r from-purple-500 via-purple-600 to-purple-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-purple-300 dark:focus:ring-purple-800 font-medium rounded-lg text-xs px-4 py-1" strokeWidth={2}>
              Agregar
            </button>
            <div className="flex flex-row absolute bottom-3 right-3">
              <input onChange={(e) => handlechange(e)} name="calification" type="radio" value={1} className="h-6 w-6 opacity-0 cursor-pointer" />
              <input onChange={(e) => handlechange(e)} name="calification" type="radio" value={2} className="ml-2 h-6 w-6 opacity-0 cursor-pointer" />
              <input onChange={(e) => handlechange(e)} name="calification" type="radio" value={3} className="ml-2 h-6 w-6 opacity-0 cursor-pointer" />
              <input onChange={(e) => handlechange(e)} name="calification" type="radio" value={4} className="ml-2 h-6 w-6 opacity-0 cursor-pointer" />
              <input onChange={(e) => handlechange(e)} name="calification" type="radio" value={5} className="ml-2 h-6 w-6 opacity-0 cursor-pointer" />
            </div>
            <textarea value={input.comment} className="bg-gray-100 rounded border border-transparent focus:border-gray-400 leading-normal resize w-full h-28 py-2 pr-[130px] px-3 font-medium placeholder-gray-700 focus:outline-none focus:bg-white" type="text" placeholder="Deja un comentario" name="comment" id="comentario" onChange={(e) => handlechange(e)} />
          </form> : 
          <div>Debes estar registrado para poder dejar un comentario.</div>
         }
      </div>
    </div>
  );
};

export default Reviews;