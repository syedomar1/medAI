// import heroImg01 from "../assets/images/hero-img01.png";
// import heroImg02 from "../assets/images/hero-img02.png";
// import heroImg03 from "../assets/images/hero-img03.png";
// import icon01 from "../assets/images/icon01.png";
// import icon02 from "../assets/images/icon02.png";
// import icon03 from "../assets/images/icon03.png";
// import faqImg from "../assets/images/faq-img.png";
// import AvtarIcon from "../assets/images/avatar-icon.png";

// import videoIcon from "../assets/images/video-icon.png";

// import featureimg from "../assets/images/feature-img.png";

import { Link } from "react-router-dom";
import { BsArrowRight } from "react-icons/bs";
import About from "./About.js";
import pic from "../assets/homebg.png"
import doc from "../assets/doctor.jpg"
import hospital from "../assets/hospital.jpg"
import text from "../assets/text.jpeg"
import "./Home.css";
// import ServiceList from "../components/services/serviceList";
// import DoctorList from "./Doctors/DoctorList";
// import FaqList from "../components/Faq/FaqList";
// import Testimonial from "../components/Testonomial/Testomomial";
const HomePage = () => {
  return (
    <>
      <div className="HomePage">
      {/*  hero sections  */}
      <section className="hero_section pt-[40px] 2xl:h-[550px]">
        <div className="container">
          <div className="flex flex-col lg:flex-row gap-[90px] items-center justify-between">
            {/*   hero-content */}
            <div>
              <div className="lg:w-[570px]">
                <h1 className="text-[36px]leading-[46px] text-headingColor font-[800] md:text-[60px] md:leading-[70px]">
                  medAI
                </h1>
                <p className="text-para text-[36px] leading-[46px] font-[600] ">
                  Empowering Communities:<br></br>Providing Vital Healthcare Services To Those In Need
                </p>
                <Link to="/telebot" className="btn btn-primary rounded-full">Consult a Doctor</Link>
              </div>
              <div className="mt-[30px] lg:mt-[70px] flex flex-col lg:flex-row lg:items-center lg:gap-[30px]">
                <div>
                  <h2 className="text-[36px] leading-[56px] lg:text-[44px] lg:leading-[54px] text-headingColor">
                    10+
                  </h2>
                  <span className="w-[75px] h-2 bg-yellowColor rounded-full block mt-[-14px]"></span>
                  <p className="text-para">Years of Excellence</p>
                </div>
                <div>
                  <h2 className="text-[36px] leading-[56px] lg:text-[44px] lg:leading-[54px] text-headingColor">
                    15+
                  </h2>
                  <span className="w-[70px] h-2 bg-purpleColor rounded-full block mt-[-14px]"></span>
                  <p className="text-para">Clinic Locations</p>
                </div>
                <div>
                  <h2 className="text-[36px] leading-[56px] lg:text-[44px] lg:leading-[54px] text-headingColor">
                    98.8%
                  </h2>
                  <span className="w-[100px] h-2 bg-irisBlueColor rounded-full block mt-[-14px]"></span>
                  <p className="text-para">Patients Satisfaction</p>
                </div>
              </div>
              <div className="flex gap-[30px] justify-end"></div>
            </div>
            {/*    hero-content-end  */}
            <div className="flex gap-[30px] justify-end">
              <div>
                <img src={hospital} className="w-full" />
              </div>
            </div>
          </div>
        </div>
      </section>
      {/*   hero-section-end */}
      <section>
        <div className="container">
          <div className="lg:w-[470px] mx-auto">
            <h2 className="heading text-center">
              Providing the best medical services
            </h2>
            <p className="text-para text-center">
              World-class care for every one. Our Health System Offers Unmathced
              expert Health care.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  gap-5 lg:gap-[30px] mt-[30px] lg:mt-[55px]">
            <div className="py-[30px] px-5">
              <div className="flex items-center justify-center">
                <img src={hospital} alt="" />
              </div>
              <div className="mt-[30px]">
                <h2 className="text-[26px] leading-9 text-headingColor font-[700] text-center">
                  Find the nearest Hospital
                </h2>
                <p className="text-[16px] leading-7 text-headingColor font-[400] mt-4 text-center">
                  No Worries! If you don't find the nearest hosptals. We have got you covered
                </p>
                <Link
                  to="/hospitals"
                  className="w-[44px] h-[44px] rounded-full border border-solid border-[#181A1E] mt-[30px] mx-auto flex items-center justify-center group hover:bg-primaryColor hover:border-none"
                >
                  <BsArrowRight className="group-hover:text-white w-6 h-5" />
                </Link>
              </div>
            </div>
            <div className="py-[30px] px-5">
              <div className="flex items-center justify-center">
                <img src={doc} alt="" />
              </div>
              <div className="mt-[30px]">
                <h2 className="text-[26px] leading-9 text-headingColor font-[700] text-center">
                  Consult AI-driven Doctor
                </h2>
                <p className="text-[16px] leading-7 text-headingColor font-[400] mt-4 text-center">
                  Dont't find a suitable doctor in emergency? Let our AI do the work for you. Our Virtual Doctor is here for your rescue..
                </p>
                <Link
                  to="/telebot"
                  className="w-[44px] h-[44px] rounded-full border border-solid border-[#181A1E] mt-[30px] mx-auto flex items-center justify-center group hover:bg-primaryColor hover:border-none"
                >
                  <BsArrowRight className="group-hover:text-white w-6 h-5" />
                </Link>
              </div>
            </div>
            <div className="py-[30px] px-5">
              <div className="flex items-center justify-center">
                <img src={text} alt="" />
              </div>
              <div className="mt-[30px]">
                <h2 className="text-[26px] leading-9 text-headingColor font-[700] text-center">
                  Understand your Reports
                </h2>
                <p className="text-[16px] leading-7 text-headingColor font-[400] mt-4 text-center">
                  Too long and unable to read your reports? We can make things easier in finger tips for you to understand better
                </p>
                <Link
                  to="/telebot"
                  className="w-[44px] h-[44px] rounded-full border border-solid border-[#181A1E] mt-[30px] mx-auto flex items-center justify-center group hover:bg-primaryColor hover:border-none"
                >
                  <BsArrowRight className="group-hover:text-white w-6 h-5" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/*    about section start */}
      <About />
      </div>
    </>
  );
};

export default HomePage;