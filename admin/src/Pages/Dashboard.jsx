import React from 'react';

function Dashboard() {
  return (
    <div className='flex flex-col items-center justify-center h-[88vh]  bg-gray-200'>
      <div className='text-center'>
        <h3 className='text-4xl font-bold text-blue-900 mb-2'>Welcome to the Admin Dashboard!</h3>
        <p className='text-lg text-gray-800 mb-6'>Manage your operations efficiently</p>
      </div>

      <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-4xl mt-10'>
        {/* Card 1 */}
        <div className='bg-white p-6 rounded-lg shadow-md'>
          <h4 className='text-xl font-semibold mb-2'>Users</h4>
          <p className='text-gray-700'>Manage and view user details</p>
        </div>

        {/* Card 2 */}
        <div className='bg-white p-6 rounded-lg shadow-md'>
          <h4 className='text-xl font-semibold mb-2'>Analytics</h4>
          <p className='text-gray-700'>Track performance and statistics</p>
        </div>

        {/* Card 3 */}
        <div className='bg-white p-6 rounded-lg shadow-md'>
          <h4 className='text-xl font-semibold mb-2'>Settings</h4>
          <p className='text-gray-700'>Configure your application settings</p>
        </div>

        {/* Card 4 */}
        <div className='bg-white p-6 rounded-lg shadow-md'>
          <h4 className='text-xl font-semibold mb-2'>Messages</h4>
          <p className='text-gray-700'>Read and respond to user inquiries</p>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
