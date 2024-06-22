import "./App.css";
import Footer from "./components/Footer";
import Navbar from "./components/NavBar";
import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import CarPage from "./pages/CarPage";
import CarList from "./pages/CarList";
import Signup from "./pages/Signup";
import PrivacyPolicyPage from "./pages/PolicyPage";
import TermsCondition from "./pages/TermsCondition";
import CookieBanner from "./components/Cookie";
import Login from "./pages/Login";
import RequestCar from "./pages/RequestCar";
import MyCarList from "./pages/MyCarList";
import About from "./components/About";
import AboutUs from "./pages/AboutUs";
import PrivateRoute from "./components/PrivateRoute";
import ForgotPassword from "./pages/ForgotPassword";
import Reset from "./pages/Reset";
import Contact from "./components/Contact";
import SuccessStory from "./components/SuccessStory";

import { useEffect, useState } from "react";
function App() {
  const [isLoading, setIsLoading] = useState(true);


 
 

  useEffect(() => {
   
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);
  return (
    <>
      {isLoading ? (
        <div className="loader max-w-2xl mx-auto mt-[100px] lg:mt-[300px]">
        <figure className="loader">
        <div className="car">
          <span className="body"></span>
          <span className="wheels"></span>
        </div>
        <div className="strikes">
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
        </div>
      </figure>
        </div>
      ) : (
        <>
        <Navbar />

         <Routes>
           <Route path="/" element={<HomePage />} />
           <Route path="/cars" element={<CarList />} />
           <Route path="/carPage/:id" element={<CarPage />} />
           <Route path="/signup" element={<Signup />} />
           <Route path="/about" element={<About />} />
           <Route path="/login" element={<Login />} />
           <Route path="/forgotpassword" element={<ForgotPassword />} />
           <Route path="/reset" element={<Reset />} />
           <Route path="/login" element={<Login />} />
           <Route path="/policy" element={<PrivacyPolicyPage />} />
           <Route path="/termscondition" element={<TermsCondition />} />
           <Route path="/contact" element={<Contact />} />
           <Route path="/aboutus" element={<AboutUs />} />
           <Route path="/SuccessStory" element={<SuccessStory />} />
         
           <Route path="member" element={<PrivateRoute />}>
             <Route path="requestcar" element={<RequestCar />} />
             <Route path="mycarlist" element={<MyCarList />} />
           </Route>
         </Routes>
         <Footer />
         <CookieBanner />
         </>
      )}
      </>
   
      
  );
}

export default App;
