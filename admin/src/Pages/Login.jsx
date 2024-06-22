import { useState } from "react";

import Swal from "sweetalert2";
import { adminlogin } from "../Actions/useAuth";
const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(false);



  const handleSuccessfulLogin = () => {
    setIsLoggedIn(!isLoggedIn);

   
     window.location.href ="/dashboard";
  };

 
  const handleSubmit = async(e) => {
    e.preventDefault();
    try {
      const res = await adminlogin( {
        email,
        password,
      });
      if (res.status === 200) {
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "Login successful",
          showConfirmButton: false,
          timer: 1500,
        });
        localStorage.setItem("auth", "true");
        console.log(localStorage.getItem('auth'));

        handleSuccessfulLogin();
      }
    } catch (error) {
      console.log(error)
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "You are not admin!",
      });
    }
  };

 

  return (
    <div className="flex pt-20 justify-center bg-gray-300 min-h-screen">
    <div className="">
      <h1 className="font-bold text-center text-2xl mb-5 pb-8">RMJ AUTOS ADMIN PANEL</h1>
      <div className="bg-gray-200 shadow w-[105vh] h-auto mx-auto rounded-lg divide-y divide-gray-200">
        <form onSubmit={handleSubmit} className="px-24 py-16">
            <h3 className="text-xl font-bold py-8 text-center">Please Login</h3>
            <label className="font-semibold text-sm text-gray-600 pb-1 block">
              Email
            </label>
            <input
              type="text"
              placeholder="Enter Email"
              required
              className="border rounded-lg px-3 py-2 mt-1 mb-5 text-sm w-full"
              onChange={(e) => setEmail(e.target.value)}
            />

            <label className="font-semibold text-sm text-gray-600 pb-1 block">
              Password
            </label>
            <input
             type="password" 
             placeholder="Password"
             required
             onChange={(e) => setPassword(e.target.value)}
             className="border rounded-lg px-3 py-2 mt-1 mb-5 text-sm w-full"
           />


            <button
              type="submit"
              className="transition duration-200 bg-blue-500 hover:bg-blue-600 focus:bg-blue-700 focus:shadow-sm focus:ring-4 focus:ring-blue-500 focus:ring-opacity-50 text-white w-full py-2.5 rounded-lg text-sm shadow-sm hover:shadow-md font-semibold text-center inline-block"
            >
              <span  className="inline-block mr-2">Log in</span>
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

          
        </div>
      </div>
    </div>
  );
};

export default Login