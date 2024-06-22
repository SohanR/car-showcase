import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Swal from 'sweetalert2';
import { baseUrl } from "../utils/key";
import { bannerAdd, bannerGet, bannerRemove } from '../Actions/car'; // Import bannerRemove

function Banner() {
  const [images, setImages] = useState([]);
  const [imageFile, setImageFile] = useState(null);

  useEffect(() => {
    fetchBanners();
  }, []);

  const fetchBanners = async () => {
    try {
      const response = await bannerGet();
      setImages(response); // Assuming the response directly contains image data
    } catch (error) {
      console.error('Error fetching banners: ', error);
    }
  };

  const handleImageUpload = (e) => {
    const selectedImage = e.target.files[0];
    if (selectedImage) {
      setImageFile(selectedImage);
    }
  };

  const handleImageSubmit = async () => {
    try {
      if (!imageFile) {
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: 'Please select an image to upload.',
        });
        return;
      }
  
      const formData = new FormData();
      formData.append('image', imageFile);
  
      const response = await bannerAdd(formData);
  
      if (response.status === 200) {
        Swal.fire({
          position: 'center',
          icon: 'success',
          title: 'Banner successfully added!',
          showConfirmButton: false,
          timer: 1500,
        });
  
        setImageFile(null);
        fetchBanners();
      }
    } catch (error) {
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: error.message || 'Failed to upload banner.',
      });
    }
  };

  const removeImage = async (bannerId) => {
    try {
      const response = await bannerRemove(bannerId);

      if (response.status === 200) {
        Swal.fire({
          position: 'center',
          icon: 'success',
          title: 'Banner successfully deleted!',
          showConfirmButton: false,
          timer: 1500,
        });

        fetchBanners();
      }
    } catch (error) {
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: error.message || 'Failed to remove banner.',
      });
    }
  };

  return (
    <div className='bg-gray-200 min-h-screen px-12 flex flex-col gap-2'>
      <h2 className='text-xl text-center mt-3'>Add a Banner</h2>
      <div className='flex flex-row justify-between'>
        <label htmlFor="upload" className='btn btn-outline w-[35vh]'>Add Image</label>
        {imageFile ? ( // Conditionally render the submit button if an image is selected
          <button className="btn btn-info w-96" onClick={handleImageSubmit}>
            Submit Image
          </button>
        ) : null}
      </div>
      <input
        id="upload"
        type="file"
        accept="image/*"
        style={{ display: 'none' }}
        onChange={handleImageUpload}
      />
         {imageFile && (
        <img
          src={URL.createObjectURL(imageFile)}
          alt="Uploaded"
          className="max-w-screen max-h-[55vh]"
        />
      )}
      {images.length > 0 && (
        <table className="mt-4">
          <thead>
            <tr>
              <th className='flex justify-start'>Image</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {images.map((img) => (
              <tr key={img._id}>
                <td >
                  <img
                    src={img.imageUrl} // Assuming imageUrl is the URL of the image
                    alt={`Uploaded ${img._id}`}
                    className="max-w-screen max-h-[55vh]"
                  />
                </td>
                <td className='flex justify-center'>
                  <button
                    className="btn btn-danger"
                    onClick={() => removeImage(img._id)}
                  >
                    Remove
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
   
    </div>
  );
}

export default Banner;
