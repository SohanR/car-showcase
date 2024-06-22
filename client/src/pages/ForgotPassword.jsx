import React, { useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

function ForgotPassword() {
    const [email, setEmail] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        const data = {
            email: email // Use the state variable 'email'
        };

        axios.post('forgot', data)
            .then(res => {
                console.log(res);
                // Handle success - maybe show a message to the user
            })
            .catch(error => {
                console.log(error);
                // Handle error - show an error message to the user
            });
    };

    const handleEmailChange = (e) => {
        setEmail(e.target.value); // Update the 'email' state with the input value
    };

    return (
        <div className="p-10 xs:p-0 mx-auto md:w-full md:max-w-md mt-16">
            <h1 className="font-bold text-center text-2xl mb-5">RMJ AUTOS Reset Password</h1>
            <div className="bg-white shadow rounded-lg divide-y divide-gray-200">
                <form onSubmit={handleSubmit} className="px-5 py-7 w-11/12">
                    <label className="font-semibold text-sm text-gray-600 pb-1 block">
                        Email
                    </label>
                    <input
                        type="email"
                        placeholder="Enter Email"
                        required
                        className="border rounded-lg px-3 py-2 mt-1 mb-5 text-sm w-full"
                        value={email} // Use the 'email' state value
                        onChange={handleEmailChange} // Handle input change
                    />

                    <button
                        type="submit"
                        className="transition duration-200 bg-blue-500 hover:bg-blue-600 focus:bg-blue-700 focus:shadow-sm focus:ring-4 focus:ring-blue-500 focus:ring-opacity-50 text-white w-full py-2.5 rounded-lg text-sm shadow-sm hover:shadow-md font-semibold text-center inline-block"
                    >
                        <span className="inline-block mr-2">Submit</span>
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            className="w-4 h-4 inline-block"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M17 8l4 4m0 0l-4 4m4-4H3"
                            />
                        </svg>
                    </button>
                </form>
                <p className='text-center'>Don't Reset ?<Link to="/login" className='text-blue-700'>Login</Link></p>

                <div className="p-5"></div>
            </div>
        </div>
    );
}

export default ForgotPassword;
