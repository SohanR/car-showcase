import React from "react";
import { useScrollToTop } from "../hooks/useScrollToTop";

const PrivacyPolicyPage = () => {
  useScrollToTop();

  return (
    <div className="container text-left my-5 py-10 lg:py-40 pr-[50px]">
      <h1 className="mb-2 pb-1 text-3xl">Privacy Policy</h1>

      <p className=" text-justify mb-2 pb-6 lg:pb-10">
        DotpotiT built the RMJ AUTOS Website as a Company WebSite. This page is
        used to inform visitors regarding our policies with the collection,
        use, and disclosure of Personal Information if anyone decided to use
        our Service.
        <br />
        <br />
        If you choose to use our Service, then you agree to the collection and
        use of information in relation to this policy. The Personal Information
        that we collect is used for providing and improving the Service. We will
        not use or share your information with anyone except as described in
        this Privacy Policy.
        <br />
        <br />
        The terms used in this Privacy Policy have the same meanings as in our
        Terms and Conditions, which are accessible at RMJ AUTOS Institute unless
        otherwise defined in this Privacy Policy.
      </p>

      <h2 className="mb-2 pb-1 text-2xl">Information Collection and Use</h2>

      <p className=" text-justify mb-4 pb-6 lg:pb-10">
        For a better experience, while using our Service, we may require you to
        provide us with certain personally identifiable information, including
        but not limited to Network STATE, INTERNET. The information that we
        request will be retained by us and used as described in this privacy
        policy.
        <br />
        <br />
        The app does use third-party services that may collect information used
        to identify you.
        <br />
        <br />
        Link to the privacy policy of third-party service providers used by the
        app
      </p>

      <h2 className="mb-2 pb-1 text-2xl">Service Providers</h2>

      <p className=" text-justify mb-4 pb-6 lg:pb-10">
        We may employ third-party companies and individuals due to the following
        reasons:
        <br />
        <br />
        - To facilitate our Service
        <br />
        - To provide the Service on our behalf.
        <br />
        - To perform Service-related services. or
        <br />
        - To assist us in analyzing how our Service is used.
        <br />
        <br />
        We want to inform users of this Service that these third parties have
        access to their Personal Information. The reason is to perform the tasks
        assigned to them on our behalf. However, they are obligated not to
        disclose or use the information for any other purpose.
      </p>

      <h2 className="mb-2 pb-1 text-2xl">Security</h2>

      <p className=" text-justify mb-4 pb-6 lg:pb-10">
        We value your trust in providing us your Personal Information, thus we
        are striving to use commercially acceptable means of protecting it. But
        remember that no method of transmission over the internet, or method of
        electronic storage is 100% secure and reliable, and we cannot guarantee
        its absolute security.
      </p>

      <h2 className="mb-2 pb-1 text-2xl">Changes to This Privacy Policy</h2>

      <p className=" text-justify mb-4 pb-6 lg:pb-10">
        We may update our Privacy Policy from time to time. Thus, you are advised
        to review this page periodically for any changes. We will notify you of
        any changes by posting the new Privacy Policy on this page.
        <br />
        <br />
        This policy is effective as of 2023-12-20
      </p>

      <h2 className="mb-2 pb-1 text-2xl">Contact Us</h2>

      <p className="mb-4 pb-6 lg:pb-10">
        If you have any questions or suggestions about our Privacy Policy, do not
        hesitate to contact us at marketing@dotpotit.com
      </p>
    </div>
  );
};

export default PrivacyPolicyPage;
