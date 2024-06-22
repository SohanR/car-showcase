import {  useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useScrollToTop } from "../hooks/useScrollToTop";

import Swal from "sweetalert2";
import { userLogin } from "../actions/auth";

const Login = () => {
  useScrollToTop();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");


  const navigate = useNavigate();

  const handleSuccessfulLogin = () => {
    localStorage.setItem("auth", true);
    navigate("/");
    window.location.reload();
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await userLogin({
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
        console.log(localStorage.getItem("auth"));

        handleSuccessfulLogin();
      }
    } catch (error) {
      console.log(error);
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Incorrect email or password!",
      });
    }
  };

  // if (isLoggedIn) {
  //   return <Redirect to="/" />;
  // }

  

  return (
    <div className="min-h-screen  flex flex-col justify-center sm:py-12">
      <div className="p-10 xs:p-0 mx-auto md:w-full md:max-w-md">
        <h1 className="font-bold text-center text-2xl mb-5">RMJ AUTOS</h1>
        <div className="bg-white shadow  rounded-lg divide-y divide-gray-200">
          <form onSubmit={handleSubmit} className="px-5 py-7 w-11/12">
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
              type="text"
              placeholder="Password"
              required
              onChange={(e) => setPassword(e.target.value)}
              className="border rounded-lg px-3 py-2 mt-1 mb-5 text-sm w-full"
            />

            <button
              type="submit"
              className="transition duration-200 bg-blue-500 hover:bg-blue-600 focus:bg-blue-700 focus:shadow-sm focus:ring-4 focus:ring-blue-500 focus:ring-opacity-50 text-white w-full py-2.5 rounded-lg text-sm shadow-sm hover:shadow-md font-semibold text-center inline-block"
            >
              <span className="inline-block mr-2">Log in</span>
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
  <p className="text-center py-2"><small>Forget Password?<Link to="/forgotPassword" className="btn text-orange-500 text-md ml-2 py-" >Please Reset</Link></small></p>
          <p className="text-center ">
            NO Accouunt ?
            <Link to="/signup" className="text-blue-600 text-center">
              Sign Up
            </Link>
          </p>

          <div className="p-5"></div>
        </div>
      </div>
    </div>
  );
};

export default Login;
