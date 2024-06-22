import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const CookieBanner = () => {
  const [open, setOpen] = useState(false);
  const [isClick, setIsClick] = useState(false);

  useEffect(() => {
    // Use setTimeout to simulate the initial delay

    setIsClick(localStorage.getItem("acceptedCookies"));
    // console.log(localStorage.getItem("acceptedCookies"));
    if (!isClick) {
      setTimeout(() => setOpen(true), 500);
    }
  }, [isClick]);

  const handleClose = () => {
    setOpen(false);

    setIsClick(true);
    localStorage.setItem("acceptedCookies", true);

    // Use setTimeout for demo purposes only. In a real scenario, set cookies here.
  };

  return (
    <div className="max-h-full overflow-hidden py-6 flex flex-col justify-center sm:py-0">
      {open && (
        <div
          className="max-w-screen-lg mx-auto fixed bg-white inset-x-5 p-5 bottom-[10px] rounded-lg drop-shadow-2xl flex gap-4 flex-wrap md:flex-nowrap text-center md:text-left items-center justify-center md:justify-between"
          role="alert"
          style={{
            zIndex: 1000,
          }}
        >
          <div className="w-full">
            This website uses cookies to ensure you get the best experience on
            our website.{" "}
            <Link
              to="/cookies"
              className="text-[#4178dc] whitespace-nowrap hover:underline"
            >
              Learn more
            </Link>
          </div>
          <div className="flex gap-4 items-center flex-shrink-0">
            <button
              onClick={handleClose}
              className="text-[#4178dc] focus:outline-none hover:underline"
            >
              Decline
            </button>
            <button
              onClick={handleClose}
              className="bg-[#4178dc] px-5 py-2 text-white rounded-md hover:bg-[#4178dc] focus:outline-none"
            >
              Allow Cookies
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default CookieBanner;
