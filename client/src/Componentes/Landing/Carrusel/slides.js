export function generateTechProductSlides(length = 10, sig = 0) {
  const techProducts = [
    "laptop",
    "keyboard",
    "monitor",
    "camera",
    "router",
  ];
  const imageSize = "1300x300";

  return Array.from({ length }).map((value, index) => {
    index = sig || index;

    const techProduct = techProducts[index % techProducts.length];

    return {
      src: `https://source.unsplash.com/${imageSize}/?${techProduct}`,
      alt: `${techProduct} ${index + 1}`,
    };
  });
}

// export function productosOfertas(length = 10, sig = 0) {
//   const ofertaImages = [
//     "../../../Img/275707319-10160277142034345-651651715846927330-n-1.png",
//     "../../../Img/4693_VD_DIGITAL_Banner-DDP_TV-Monitores-1000x383.png",
//     "../../../Img/BANNER-Genérico_1280x490px.jpg",
//   ];

//   return Array.from({length}).map((value, index) => {
//     index = sig || index;

//     const ofertaImage = ofertaImages[index % ofertaImages.lenght];

//     return {
//       src: ofertaImage,
//       alt: `Product ${index + 1}`
//     }
//   })
// }