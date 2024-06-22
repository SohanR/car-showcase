import React, { useState } from 'react'
import Swal from 'sweetalert2';

function Options() {
    const [selectedFiles, setSelectedFiles] = useState([]);
    const [safety, setSafety] = useState(['']);
    const [convenience, setConvenience] = useState(['']);
    const [entertainment, setEntertainment] = useState(['']);
    const [interior, setInterior] = useState(['']);
    const [title, settitle] = useState(['']);



   
      const addTitle = () => {
        settitle([...title, '']);
      };
    
      const removeTitle = (index) => {
        const values = [...title];
        values.splice(index, 1);
        settitle(values);
      };
    
    const handleSafety = (e, index) => {
        const values = [...safety];
        values[index] = e.target.value;
        setSafety(values);
      };
    
      const addSafety = () => {
        setSafety([...safety, '']);
      };
    
      const removeSafety = (index) => {
        const values = [...safety];
        values.splice(index, 1);
        setSafety(values);
      };
    
      //convenience input
      
      const handleConvenience = (e, index) => {
        const values = [...convenience];
        values[index] = e.target.value;
        setConvenience(values);
      };
    
      const addConvenience = () => {
        setConvenience([...convenience, '']);
      };
    
      const removeConvenience = (index) => {
        const values = [...convenience];
        values.splice(index, 1);
        setConvenience(values);
      };
      //Entertainment input
    
      const handleEntertainment = (e, index) => {
        const values = [...entertainment];
        values[index] = e.target.value;
        setEntertainment(values);
      };
    
      const addEntertainment = () => {
        setEntertainment([...entertainment, '']);
      };
    
      const removeEntertainment = (index) => {
        const values = [...entertainment];
        values.splice(index, 1);
        setEntertainment(values);
      };
      const handleInterior = (e, index) => {
        const values = [...interior];
        values[index] = e.target.value;
        setInterior(values);
      };
    
      const addInterior = () => {
        setInterior([...interior, '']);
      };
    
      const removeInterior = (index) => {
        const values = [...interior];
        values.splice(index, 1);
        setInterior(values);
      };
      const handletitle = (e, index) => {
        const values = [...title];
        values[index] = e.target.value;
        settitle(values);
      };
    
      const addtitle = () => {
        settitle([...title, '']);
      };
    
      const removetitle = (index) => {
        const values = [...title];
        values.splice(index, 1);
        settitle(values);
      };
    
    

    
    
     
      const [brandName, setBrandName] = useState('');
      const [submittedBrand, setSubmittedBrand] = useState('');
      const [submittedModal, setSubmittedModal] = useState('');
      const [modals, setModals] = useState(['']); // Assuming 'modals' is an array of strings
    
      const handleTitle = (e) => {
        setBrandName(e.target.value);
      };
    
      const handleSubmit = (e) => {
        e.preventDefault();
        // Set the submitted brand name
        setSubmittedBrand(brandName);
        // Close the modal after submission
        document.getElementById('my_modal_1').close();
        // Reset the brandName state
      
      };
      const handleSubmitModal = (e) => {
        e.preventDefault();
        // Set the submitted brand name
        setSubmittedModal(brandName);
        // Close the modal after submission
        document.getElementById('my_modal_2').close();
        // Reset the brandName state
      
      };
    
      const handleEdit = (brand) => {
        // Logic to handle editing
        // For instance, you might set 'brandName' here to edit
        setBrandName(brand);
        document.getElementById('my_modal_2').showModal();
      };
    
      const handleModals = (e, index) => {
        const updatedModals = [...modals];
        updatedModals[index] = e.target.value;
        setModals(updatedModals);
      };
    
      const addModals = () => {
        setModals([...modals, '']);
      };
    
      const removeModals = (index) => {
        const updatedModals = [...modals];
        updatedModals.splice(index, 1);
        setModals(updatedModals);
      };
      console.log(submittedModal)
  
  return (
    <div>

<div className="">
    <h3 className='text-center text-2xl font-bold'>Add  New Options</h3>
    <div className="overflow-x-auto  p-5 w-full">
    <button className="btn btn-outline btn-success" onClick={() => document.getElementById('my_modal_1').showModal()}>Add Brand Name</button>
      <dialog id="my_modal_1" className="modal">
        <div className="modal-box">
          <div className="modal-action">
            <form onSubmit={handleSubmit} className='w-full'>
              <div className='flex flex-col'>
                <div className="mb-2 w-full">
                  <label htmlFor="title" className="block font-semibold mb-1">
                    Add Brand Name
                  </label>
                  <div className="relative mb-2">
                    <input
                      type="text"
                      className="w-full border border-gray-300 rounded px-3 py-2 pr-10"
                      value={brandName}
                      onChange={handleTitle}
                    />
                  </div>
                </div>
                <div className='flex flex-row justify-between items-center gap-3'>
                  <button type="submit" className="bg-blue-500 w-1/2 mx-auto py-3 text-white rounded hover:bg-blue-600">
                    Submit
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </dialog>

      <table className="table w-full">
        <thead>
          <tr className="text-black font-semibold text-lg">
            <th>Data</th>
            <th className='text-center' >Action</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className='text-xl font-semibold'>
              {submittedBrand ? submittedBrand : "Modal"}
            </td>
          
              <td className=' '>
<button className="btn btn-outline btn-success" onClick={()=>handleEdit(submittedBrand)}>Edit</button>
<dialog id="my_modal_2" className="modal">
  <div className="modal-box">
  
    <div className="modal-action">
      <form method="dialog" onSubmit={handleSubmitModal} className='w-full'>
      <div className=' flex flex-col'>
      <div className="mb-2 w-full">
        <label htmlFor="title" className="block font-semibold mb-1">
        {brandName ? brandName : "Modal"} Modals
        </label>
        {modals.map((input, index) => (
          <div key={index} className="relative mb-2 ">
            <input
              type="text"
              className="w-full border border-gray-300 rounded px-3 py-2 pr-10"
              value={input}
              onChange={(e) => handleModals(e, index)}
            />
            {index > 0 && (
              <button
                type="button"
                className="absolute top-2 right-2 text-red-500"
                onClick={() => removeModals(index)}
              >
                Remove
              </button>
            )}
          </div>
        ))}
      </div>
   <div className='flex flex-row  justify-between items-center gap-3'>
   <button type="button" className="btn w-1/2" onClick={addModals}>
        Add More
      </button>
      <button type="submit" className="bg-blue-500 w-1/2 mx-auto py-3 text-white rounded hover:bg-blue-600">
                    Submit
         </button>
   </div>
    </div>
        <button className="btn w-full mt-2">Close</button>
      </form>
    </div>
  </div>
</dialog>
                 </td>
     </tr>
    </tbody>
  </table>
</div>
   

  <div className=' '>

  <table className="table w-full">
      
        <tbody>
          <tr>
            <td className='text-xl font-semibold'>
              Convenience
            </td>
          
              <td >
<button className="btn btn-outline btn-success" onClick={()=>handleEdit(submittedBrand)}>Edit</button>

                 </td>
     </tr>
          <tr>
            <td className='text-xl font-semibold'>
              Envireonment
            </td>
          
              <td >
<button className="btn btn-outline btn-success" onClick={()=>handleEdit(submittedBrand)}>Edit</button>

                 </td>
     </tr>
          <tr>
            <td className='text-xl font-semibold'>
              Safety
            </td>
          
              <td >
<button className="btn btn-outline btn-success" onClick={()=>handleEdit(submittedBrand)}>Edit</button>

                 </td>
     </tr>
          <tr>
            <td className='text-xl font-semibold'>
              Interior
            </td>
          
              <td >
<button className="btn btn-outline btn-success" onClick={()=>handleEdit(submittedBrand)}>Edit</button>

                 </td>
     </tr>
          <tr>
            <td className='text-xl font-semibold'>
              Exterior
            </td>
          
              <td >
<button className="btn btn-outline btn-success" onClick={()=>handleEdit(submittedBrand)}>Edit</button>

                 </td>
     </tr>
    </tbody>
  </table>
    

  </div>

     
    
           
 
              

              

              
  
            </div>
  </div>
  
  )
}

export default Options