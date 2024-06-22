import React, { useEffect, useState } from "react";
import { storyRemove, successGet, successStoryAdd } from "../Actions/car";
import Swal from "sweetalert2";

function SuccessStory() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState(null);
  const [story, setStory] = useState(null);

  useEffect(() => {
    getSuccess();
  }, []);

  const getSuccess = async () => {
    try {
      const response = await successGet();
    
      setStory(response); // Assuming the response directly contains image data
    } catch (error) {
      console.error('Error fetching Story: ', error);
    }
  };

  const handleFormSubmit = async (event) => {
    event.preventDefault();

    try {
      const info = new FormData();
      info.append("title", title);
      info.append("desc", description);
      info.append("image", image);

      const response = await successStoryAdd(info);

      if (response && response.status === 200) {
        Swal.fire({
          position: "center",
          icon: "success",
          title: "Story successfully added",
          showConfirmButton: false,
          timer: 1500,
        });
        window.location.reload();
      } else {
        throw new Error("Failed to add story");
      }
    } catch (error) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Image should be less than six!",
      });
    }
  };

  const storyDelete = async (storyId) => {
    try {
      const response = await storyRemove(storyId);

      if (response.status === 200) {
        Swal.fire({
          position: 'center',
          icon: 'success',
          title: 'Story successfully deleted!',
          showConfirmButton: false,
          timer: 1500,
        });

        getSuccess();
      }
    } catch (error) {
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: error.message || 'Failed to remove story.',
      });
    }
  };


  return (
    <div className="min-h-screen bg-gray-300 ">
      <h2 className="text-center text-2xl font-bold pt-5 mb-5 py-6">
        Add New RMJAUTOS Successful Story
      </h2>
      <div className="mb-2">
      <div className=' flex flex-row-reverse max-w-5xl mx-auto  pt-4 '>
        <form
          onSubmit={handleFormSubmit}
          encType="multipart/form-data"
          className="p-14 bg-gray-100 rounded-r-lg shadow-md flex flex-col w-1/2"
        >
          <label className="text-xl font-semibold" htmlFor="title">
            Title:
          </label>
          <br />
          <input
            type="text"
            id="title"
            name="title"
            className="border-2 rounded-lg"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          <br />
          <br />

          <label className="text-xl font-semibold" htmlFor="description">
            Description:
          </label>
          <br />
          <textarea
            id="description"
            className="border-2 rounded-lg"
            name="description"
            rows="4"
            cols="50"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          ></textarea>
          <br />
          <br />

          <label className="text-xl font-semibold" htmlFor="image">
            Add Image:
          </label>
          <br />
          <input
            type="file"
            className="border-2 rounded-lg"
            id="image"
            name="image"
            accept="image/*"
            onChange={(e) => setImage(e.target.files[0])}
          />
          <br />
          <br />

          <input
            type="submit"
            className="btn btn-info btn-outline"
            value="Submit"
          />
        </form>
    
     {image? (
          <img src={URL.createObjectURL(image)} alt=' Media' className='p-14 bg-gray-100 rounded-r-lg shadow-md flex flex-col w-1/2' />
        ):<img src="https://image.freepik.com/free-vector/young-man-working-laptop-drink-coffee-with-plant_1067-428.jpg" alt="" />}
     </div>
     <div className="max-w-6xl mx-auto mt-5">
  {story && story.length > 0 && (
    <table className="mt-4">
      <thead>
        <tr className="flex flex-row justify-center items-center gap-[400px]">
          <th>Tilte</th>
          <th>Image</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        {story.map((data) => (
          <tr key={data._id} className="flex flex-row justify-between gap-9" >
           <td className="text-center">{data.title}</td> <td  className="rounded ring max-w-[25vh] mx-auto flex justify-center h-16">
              <img
                src={data.image} // Assuming imageUrl is the URL of the image
                alt={`${data._id}`}
               
              />
            </td>
            
            <td>
              <button
                className="btn btn-danger"
                onClick={() => storyDelete(data._id)}
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

      </div>
    </div>
  );
}

export default SuccessStory;
