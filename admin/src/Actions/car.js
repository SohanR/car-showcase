import axios from "axios";
import { baseUrl } from "../utils/key";
axios.defaults.withCredentials = true;


export const carAdd = async (formData) => await axios.post(`${baseUrl}/api/admin/carupload`,  formData, {
    headers: {
      'Content-Type': 'multipart/form-data',
    },
    withCredentials: true,});


    export const successStoryAdd = async (info) => {
      try {
        const response = await axios.post(`${baseUrl}/api/admin/add-story`, info, {
          headers: {
            'Content-Type': 'multipart/form-data',
          },
          withCredentials: true,
        });
        return response; 
      } catch (error) {
        throw new Error(error); 
      }
    };


   //success get
   export const successGet = async () => {
    try {
      const res = await axios.get(`${baseUrl}/api/admin/get-story`, {
        withCredentials: true,
      });
      return res.data; // Return the response data
    } catch (error) {
      throw new Error(error.response?.data?.message || 'Failed to get succesStory');
    }
  };

  export const storyRemove = async (storyId) => {
    try {
      const res = await axios.delete(`${baseUrl}/api/admin/delete-story/${storyId}`,   
         {
          withCredentials: true,
        }
      );
      return res; 
    } catch (error) {
      throw new Error(error.response?.data?.message || 'Failed to remove story');
    }
  };
  



    //banner add
export const bannerAdd = async (formData) => await axios.post(`${baseUrl}/api/admin/upload-banner`,  formData, {
    headers: {
      'Content-Type': 'multipart/form-data',
    },
    withCredentials: true,});



    //banner get
    export const bannerGet = async () => {
      try {
        const res = await axios.get(`${baseUrl}/api/admin/get-banner`, {
          withCredentials: true,
        });
        return res.data; // Return the response data
      } catch (error) {
        throw new Error(error.response?.data?.message || 'Failed to get banners');
      }
    };
    
    

   export const bannerRemove = async (bannerId) => {
    try {
      const res = await axios.delete(`${baseUrl}/api/admin/delete-banner/${bannerId}`,   
         {
          withCredentials: true,
        }
      );
      return res; 
    } catch (error) {
      throw new Error(error.response?.data?.message || 'Failed to remove banner');
    }
  };
  



//carApprove
export const carApprove = async (carId) => {
  try {
    const res = await axios.post(`${baseUrl}/api/admin/car-approve/${carId}`,{
      withCredentials: true,
    });
    return res; 
  }catch(error) {
    throw error;
  }
};
// Delete car
export const carDelete = async (carId) => {
  try {
    const response = await axios.delete(`${baseUrl}/api/admin/delete-car/${carId}`, {
      withCredentials: true,
    });
    return response;
  } catch (error) {
    throw new Error(error.response?.data?.message || 'Failed to delete car');
  }
};



//carReject
export const carReject = async (carId) => {
  try {
    const res = await axios.delete(`${baseUrl}/api/admin/car-reject/${carId}`,   
       {
        withCredentials: true,
      }
    );
    return res; 
  } catch (error) {
    throw new Error(error.response?.data?.message || 'Failed to reject car');
  }
};



//carEdit
export const carEdit = async (carId,formData) => {
  try {
    const res = await axios.put(`${baseUrl}/api/admin/edit-car/${carId}`,formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
      withCredentials: true,});
    return res; 
  } catch (error) {
    throw new Error(error.response?.data?.message || 'Failed to edit car');
  }
};





//carGetBy Id
export const carGetById = async (carId) => {
  try {
    const res = await axios.get(`${baseUrl}/api/admin/get-car-by-id/${carId}`,    
       {
        withCredentials: true,
      }
    );
    return res.data; 
  } catch (error) {
    throw new Error(error.response?.data?.message || 'Failed to get car');
  }
};
//users
export const carUser = async () => {
  try {
    const res = await axios.get(`${baseUrl}/api/admin/get-all-user`,    
       {
        withCredentials: true,
      }
    );
    return res; 
  } catch (error) {
    throw new Error(error.response?.data?.message || 'Failed to get user');
  }
};

// In your updateUserRole function:
export const updateUserRole = async (userId, role) => {
  try {
    const res = await axios.put(`${baseUrl}/api/admin/update-role/${userId}/${role}`, {

      withCredentials: true,});
    return res;
  } catch (error) {
    console.error('Error updating user role: ', error);
    throw new Error('Failed to update user role');
  }
};




