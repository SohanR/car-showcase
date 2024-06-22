import React from "react";
import { useScrollToTop } from "../hooks/useScrollToTop";

const TermsCondition = () => {
  useScrollToTop();

  return (
    <div className="container my-5 py-10 lg:py-40 pr-[50px]">
      <h1 className="mb-2 pb-1 text-2xl lg:text-3xl">Terms & Conditions</h1>

      <h2 className="mb-2 pb-1 text-xl lg:text-2xl">Conditions of use</h2>

      <p className=" text-justify mb-4 pb-6 lg:pb-10">
        By using this website, you certify that you have read and reviewed this
        Agreement and that you agree to comply with its terms. If you do not
        want to be bound by the terms of this Agreement, you are advised to stop
        using the website accordingly. RMJ AUTOS company name only grants use
        and access to this website, its products, and its services to those who
        have accepted its terms.
      </p>

      <h2 className="mb-2 pb-1 text-xl lg:text-2xl">Privacy policy</h2>

      <p className=" text-justify mb-4 pb-6 lg:pb-10">
        Before you continue using our website, we advise you to read our privacy
        policy [link to privacy policy] regarding our user data collection. It
        will help you better understand our practices.
      </p>

      <h2 className="mb-2 pb-1 text-xl lg:text-2xl">Age restriction</h2>

      <p className=" text-justify mb-4 pb-6 lg:pb-10">
        You must be at least 18 (eighteen) years of age before you can use this
        website. By using this website, you warrant that you are at least 18
        years of age and you may legally adhere to this Agreement. RMJ AUTOS
        assumes no responsibility for liabilities related to age
        misrepresentation.
      </p>

      <h2 className="mb-2 pb-1 text-xl lg:text-2xl">User accounts</h2>

      <p className=" text-justify mb-4 pb-6 lg:pb-10">
        As a user of this website, you may be asked to register with us and
        provide private information. You are responsible for ensuring the
        accuracy of this information, and you are responsible for maintaining
        the safety and security of your identifying information. You are also
        responsible for all activities that occur under your account or
        password. If you think there are any possible issues regarding the
        security of your account on the website, inform us immediately so we may
        address them accordingly. We reserve all rights to terminate accounts,
        edit or remove content, and cancel orders at our sole discretion.
      </p>

      <h2 className="mb-2 pb-1 text-xl lg:text-2xl">Limitation on liability</h2>

      <p className=" text-justify mb-4 pb-6 lg:pb-10">
        RMJ AUTOS is not liable for any damages that may occur to you as a
        result of your misuse of our website. RMJ AUTOS reserves the right to
        edit, modify, and change this Agreement at any time. We shall let our
        users know of these changes through electronic mail. This Agreement is
        an understanding between RMJ AUTOS and the user, and this supersedes and
        replaces all prior agreements regarding the use of this website.
      </p>
    </div>
  );
};

export default TermsCondition;
