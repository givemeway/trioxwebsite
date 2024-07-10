import Footer from "./Footer";
import Header from "./Header";
import contactUSImage from "./assets/contactsymbols.svg";
import "./contactus.css";

const ContactUs = () => {
  return (
    <div className="w-screen h-screen flex flex-col">
      <Header />
      <div className="flex flex-col md:flex-row contact-container w-full h-full">
        <div className="h-full w-full md:w-[50%] text-black flex flex-col p-10 bg-white ">
          <h3 className="text-black w-full text-2xl font-semibold text-left  mb-5">
            We are here for you!
          </h3>
          <p className="text-left w-full mb-5">
            You can reach us every working day from
            <span className="font-semibold"> 8:00 am - 5:00 pm </span> or use a
            contact form
          </p>
          <div className="flex w-full h-[75px] mb-5">
            <img src={contactUSImage} alt="symbol-contact.svg" title="" />
          </div>
          <div className="flex flex-col">
            <h3 className="text-lg font-bold w-full">
              Triox Technologies Pvt Ltd
            </h3>
            <p className="text-left w-full mb-5">
              MNR GOWDA COMPLEX, 5M-655, 1st Floor, B Channasandra Rd, opp.
              CHANNASANDRA, B Channasandra, OMBR Layout, BUSTOP, Bengaluru,
              Karnataka 560043
            </p>
            <div className="flex flex-col">
              <div className=" flex">
                <span className="font-semibold">Mob :</span>
                <span> +91-9632221444</span>
              </div>
              <div className=" flex">
                <span className="font-semibold">Tel :</span>
                <span> +91-9632221444</span>
              </div>
              <div className=" flex">
                <span className="font-semibold">Email :</span>
                <span> dhilip@trioxtech.in</span>
              </div>
              <div className=" flex">
                <span className="font-semibold">Web : </span>
                <span> wwww.trioxtech.in</span>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full md:w-[50%] h-full bg-white p-10 opacity-80 ml-1 text-black">
          <h3 className="text-black font-bold text-xl">R&D Center</h3>
          <p className="text-left w-full mb-5 text-black">
            MNR GOWDA COMPLEX, 5M-655, 2nd Floor B Channasandra Rd, opp.
            CHANNASANDRA, B Channasandra, OMBR Layout, BUSTOP, Bengaluru,
            Karnataka 560043
          </p>
          <h4 className="text-lg font-bold w-full mb-5">Technical Support</h4>
          <p className="text-left w-full">
            For Product technical support, send an email to our support team
          </p>
          <div className="flex flex-col text-black mb-5">
            <div className=" flex">
              <span className="font-semibold">Mob :</span>
              <span> +91-9844028834</span>
            </div>
            <div className=" flex">
              <span className="font-semibold">Email :</span>
              <span> dhilip@trioxtech.in</span>
            </div>
          </div>
          <h4 className="text-lg font-bold w-full mb-5">Sales</h4>
          <p className="text-left w-full mb-5">
            For questions about our SOMs call +91-9844028834 or send an email.
          </p>
          <div className="flex flex-col text-black">
            <div className=" flex">
              <span className="font-semibold">Email :</span>
              <span> dhilip@trioxtech.in</span>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default ContactUs;
