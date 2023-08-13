import { useEffect, useRef } from "react";

const UploadWidget = ({ setImageUrl }) => {
    const cloudinaryRef = useRef();
    const widgetRef = useRef();

    useEffect(() => {
        cloudinaryRef.current = window.cloudinary;
        widgetRef.current = cloudinaryRef.current.createUploadWidget(
            {
                cloudName: 'dhucdz03p',
                uploadPreset: 'productImages',
            },
            function (error, result) {
                if (!error && result && result.event === 'success') {
                    setImageUrl(result.info.url);
                }
            }
        );
    }, [setImageUrl]);

    const handleButtonClick = (e) => {
        e.preventDefault();
        e.stopPropagation(); // Stop the click event propagation from reaching the form's submit button
        widgetRef.current.open();
    };

    return (
        <button
            className="mt-4 bg-violet-800 text-white py-2 px-4 rounded hover:bg-violet-900 focus:outline-none focus:ring-2 focus:ring-blue-600"
            onClick={handleButtonClick}>Subir imagen</button>
    );
};

export default UploadWidget;