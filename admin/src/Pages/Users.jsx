import { useEffect, useState } from 'react';
import { carUser, updateUserRole } from '../Actions/car';
import Swal from 'sweetalert2';

const Users = () => {
  const [userData, setUserData] = useState([]);

  useEffect(() => {
    fetchUser();
  }, []);

  const fetchUser = async () => {
    try {
      const res = await carUser();
      setUserData(res.data);
    } catch (error) {
      console.error('Error fetching user data: ', error);
    }
  };

  const handleSubmit = async (userId, currentRole) => {
    try {
      const newRole = currentRole === 'USER' ? 'ADMIN' : 'USER';
      const res = await updateUserRole(userId, newRole);

      if (res.status === 200) {
        Swal.fire({
          position: 'center',
          icon: 'success',
          title: 'User Role successfully changed',
          showConfirmButton: false,
          timer: 1500,
        }).then(() => {
          window.location.reload(); // Reload the page after the role change
        });
      }
    } catch (error) {
      console.error('Error updating user role: ', error);
    }
  };


  return (
    <div className="overflow-x-auto bg-gray-300 min-h-screen shadow-xl p-5 border-gray-100 border-2 w-full">
      <table className="table w-full">
        <thead>
          <tr className="text-black bg-gray-400 font-semibold text-lg">
            <th>Name</th>
            <th>Email</th>
            <th>Phone</th>
            <th>Role</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {userData?.map((user) => (
            <tr key={user._id} className='bg-gray-200'>
              <td>
                <div className="font-bold">{user.name}</div>
              </td>
              <td>{user.email}</td>
              <td>{user.number}</td>
              <td>{user.role}</td>
              <td className="space-x-4 flex items-center" data-label="Action">
                {user.role === "USER" ? (
                  <button
                    className="btn btn-xl text-white bg-[#3876BF] my-2 hover:bg-orange-400"
                    onClick={() => handleSubmit(user._id, 'USER')}
                  >
                    Make Admin
                  </button>
                ) : (
                  <button
                    className="btn btn-xl text-white bg-[#3876BF] my-2 hover:bg-orange-400"
                    onClick={() => handleSubmit(user._id, 'ADMIN')}
                  >
                    Make User
                  </button>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Users;
