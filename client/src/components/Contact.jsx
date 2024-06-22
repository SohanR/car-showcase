import  { useEffect, useState } from 'react';
import { AiOutlineMail, AiFillFacebook } from 'react-icons/ai';
import { HiOutlineLocationMarker, HiOutlinePhone } from 'react-icons/hi';
import Aos from 'aos';
import 'aos/dist/aos.css';
import emailjs from '@emailjs/browser';
import { toast } from 'react-toastify';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const Contact = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');


  useEffect(() => {
    Aos.init({ duration: 900 });
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const serviceId = 'service_ree6unr';
    const templateId = 'template_j4f0lbg';
    const publicKey = 'MLnkQHnxFWMU1yz26';

    const templateParams = {
      from_name: name,
      from_email: email,
      to_name: 'RMJAUTOS',
      message: message,
    };

    try {
      // Attempt to send the email using EmailJS
      const response = await emailjs.send(serviceId, templateId, templateParams, publicKey);
    
      if (response.status === 200 && response.text === 'OK') {
        // Display a success toast notification upon successful sending
        toast.success('Message sent successfully!', {
          position: toast.POSITION.TOP_RIGHT,
          autoClose: 3000,
        });
  
        console.log('Email sent successfully!', response);
        setName('');
        setEmail('');
        setMessage('');
      } else {
        // Display an error toast if the response status is not 'OK'
        toast.error('Error sending message. Please try again later.', {
          position: toast.POSITION.TOP_RIGHT,
          autoClose: 3000,
        });
      }
    } catch (error) {
      console.error('Error sending email:', error);
      // Display an error toast if an exception occurs during sending
      toast.error('Error sending message. Please try again later.', {
        position: toast.POSITION.TOP_RIGHT,
        autoClose: 3000,
      });
    }
  };
  return (
    <div className="container-fluid lg:mt-20 w-full mx-auto">
      <div className="bg-base-200">
        <ToastContainer/>
        <div className="flex flex-col items-center space-y-8 px-3">
          <h1 className="text-3xl lg:text-5xl font-serif pt-16">
            Get in Touch
          </h1>
          <p className="lg:text-xl text-center w-full sm:w[80] lg:w-[900px] ">
            Ready to cruise in style? We offer a wide range of vehicles,
            competitive prices, and expert guidance to make your car-buying
            experience seamless. Follow us on social media for the latest
            updates. Lets embark on your next adventure together!
          </p>
        </div>
        <div className="flex flex-col lg:flex-row px-4 lg:px-20 gap-8 max-w-screen-xl w-full mx-auto mt-14 pb-20">
          <div
            className="card lg:w-96 bg-gray-700  rounded-lg shadow-xl"
            data-aos="flip-left"
          >
            <figure className=" pt-10 pb-5 text-center">
              <h2 className="rounded-full flex items-center justify-center mx-auto p-3 w-16 h-16 text-white text-4xl bg-blue-400">
                <AiOutlineMail />
              </h2>
            </figure>
            <div className="card-body items-center text-center pb-5 ">
              <h2 className="card-title  mb-2 font-bold">Mail to us</h2>
              <p className="text-white font-bold"></p>
              <div className="card-actions">
                <h1 className="hover:text-yellow-400 font-bold">
                  RMJAUTOS700@GMAIL.COM
                </h1>
              </div>
            </div>
          </div>
          <div
            className="card lg:w-96 bg-gray-700  rounded-lg shadow-xl"
            data-aos="flip-up"
          >
            <figure className="pt-10 pb-5 text-center ">
              <h1 className="rounded-full flex items-center justify-center mx-auto p-3 w-16 h-16 text-white text-4xl bg-blue-400">
                <HiOutlineLocationMarker />
              </h1>
            </figure>
            <div className="card-body items-center text-center pb-5">
              <h2 className="card-title mb-2 font-bold">Office</h2>
              <p className="text-white font-bold"></p>
              <div className="card-actions">
                <h1 className="font-bold">
                  HOUSE 4, ROAD 1 PALPARA,RANGPUR,5400.
                </h1>
              </div>
            </div>
          </div>
          <div
            className="card lg:w-96 bg-gray-700  rounded-lg shadow-xl p-4"
            data-aos="flip-down"
          >
            <figure className=" pt-6 pb-5 text-center ">
              <h1 className="rounded-full flex items-center justify-center mx-auto p-3 w-16 h-16 text-white text-4xl bg-blue-400">
                <AiFillFacebook />
              </h1>
            </figure>
            <div className="card-body items-center text-center">
              <h2 className="card-title mb-2 font-bold">FaceBook</h2>
              <div className="card-actions">
                <a
                  className="font-bold text-white"
                  href="https://www.facebook.com/rmjautos700?mibextid=LQQJ4d"
                >
                  RMJ Facebook Page
                </a>
              </div>
            </div>
          </div>
          <div
            className="card lg:w-96 bg-gray-700  rounded-lg shadow-xl p-4"
            data-aos="flip-right"
          >
            <figure className=" pt-6 pb-5 text-center ">
              <h1 className="rounded-full flex items-center justify-center mx-auto p-3 w-16 h-16 text-white text-4xl bg-blue-400">
                <HiOutlinePhone />
              </h1>
            </figure>
            <div className="card-body items-center text-center">
              <h2 className="card-title mb-2 font-bold">Phone</h2>
              <p className="text-white font-bold">+8801970610006</p>
              <div className="card-actions">
                <h1 className="font-bold">+8801770610006</h1>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-10 md:w-full  mx-auto my-10 relative">
        <div className="contact-bg h-[90vh] text-center text-5xl pt-20  font-serif text-white ">
          Contact Us
        </div>
        <div className="md:w-7/12 w-9/12 mt-6 contact-form">
          <form  onSubmit={handleSubmit}>
          
          <div className='flex flex-col lg:flex-row gap-3'>
          <div className="form-control md:w-1/2 w-full my-2">
              <input
                type="text"
                value={name} required
                onChange={(e) => setName(e.target.value)}
                placeholder="Your Name"
                className="input bg-[#fffafa] p-3 w-full rounded-md border-[#6c9eb3]"
              />
            </div>
            {/* Email Input */}
            <div className="form-control md:w-1/2 w-full my-2">
              <input
                type="email" required
                onChange={(e) => setEmail(e.target.value)}
                value={email}
                placeholder="Your Email"
                className="input bg-[#fffafa] rounded-md p-3 w-full border-[#6c9eb3]"
              />
            </div>
          </div>
            {/* Message Input */}
            <div className="form-control md:w-full w-full my-2 lg:my-5">
              <textarea
              
                cols="30"
                rows="3"
                value={message}
                placeholder="Write Us A Massage"
                maxLength={200}
                className="w-full rounded-md bg-[#fffafa] p-2 border-[#6c9eb3] focus:outline-slate-300 font-bold" onChange={(e) => setMessage(e.target.value)}
              ></textarea>
            </div>
            {/* Submit Button */}
            <div className="flex justify-center mt-3 lg:mt-6">
              <input
                type="submit" 
                className="btn py-3 px-6 rounded-lg border-none bg-[#4178dc] font-bold text-white hover:bg-[#4178dc]"
              />
        </div>
          </form>
        </div>
      </div>
    </div>
  );
};
export default Contact;
