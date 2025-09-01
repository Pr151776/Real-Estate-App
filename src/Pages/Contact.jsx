import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

// background: #C1AA46;

const Contact = () => {
  return (
    <div>
      {/* Navbar section */}
      <Navbar
        headLabel="Contact"
        label="Contact"
        headColor="US"
        anhorLink="contact"
      />

      {/* Contact content */}
      <div className="px-20">
        {/* Heading */}
        <div className="mb-40">
          <hr className="w-35 text-[rgba(193,170,70,1)]! rotate-90 relative top-17 -left-12 hori_line" />
          <h2 className="text-[32px] font-semibold! relative top-20 left-10">
            Contact
          </h2>
        </div>
        <div className="flex gap-1 justify-around mb-20">
          <div className="">
            <img
              src="contact/map.png"
              alt="Map image"
              className="w-[800px] h-[840px]"
            />
          </div>
          <div className="">
            <p className="text-[45px] !font-semibold mb-5">
              We are Ready To{" "}
              <span className="text-[45px] !font-semibold text-[#C1AA46]">
                Serve you
              </span>
            </p>
            {/* Form */}
            <div>
              <div className="flex flex-col gap-0.5 mb-5">
                <label
                  htmlFor="fullname"
                  className="text-2xl !font-normal text-[#C1AA46]"
                >
                  Full Name
                </label>
                <input
                  type="text"
                  id="fullname"
                  name="fullname"
                  placeholder="Name"
                  className="border border-[#C1AA46] px-4 py-4 bg-[#e6d1d1] placeholder:text-[15px] !font-light opacity-45 outline-none"
                />
              </div>
              <div className="flex flex-col gap-0.5 mb-5">
                <label
                  htmlFor="email"
                  className="text-2xl !font-normal text-[#C1AA46]"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="Email"
                  className="border border-[#C1AA46] px-4 py-4 bg-[#e6d1d1] placeholder:text-[15px] !font-light opacity-45 outline-none"
                />
              </div>
              <div className="flex flex-col gap-0.5 mb-5">
                <label
                  htmlFor="contact"
                  className="text-2xl !font-normal text-[#C1AA46]"
                >
                  Phone Number
                </label>
                <input
                  type="number"
                  id="contact"
                  name="contact"
                  placeholder="Number"
                  className="border border-[#C1AA46] px-4 py-4 bg-[#e6d1d1] placeholder:text-[15px] !font-light opacity-45 outline-none"
                />
              </div>
              <div className="flex flex-col gap-0.5 mb-5">
                <label
                  htmlFor="message"
                  className="text-2xl !font-normal text-[#C1AA46]"
                >
                  Message
                </label>
                <textarea
                  name="message"
                  id="message"
                  rows={10}
                  placeholder="Ask Any Querys ?"
                  className="border border-[#C1AA46] px-4 py-4 bg-[#e6d1d1] placeholder:text-[15px] !font-light opacity-45 outline-none"
                ></textarea>
              </div>
              <div>
                <button className="text-[40px] text-white bg-[#C1AA46] !font-normal w-full py-2">
                  Submit
                </button>
              </div>
            </div>
          </div>
        </div>
        {/* Media */}
        <div className="flex flex-col mb-20">
          <div className="flex flex-col justify-center items-center pt-12">
            <p className="text-xl text-[#C1AA46] font-light!">
              Official Social Media
            </p>
            <p className="text-5xl font-semibold! my-6">
              Get in Connect with Us
            </p>
          </div>
          <div className="flex justify-center gap-20 pt-5">
              <img src="contact/youtube.png" alt="youtube" width={90} height={90} />
              <img src="contact/facebook.png" alt="facebook" width={90} height={90} />
              <img src="contact/insta.png" alt="instagram" width={90} height={90} />
              <img src="contact/twitter.png" alt="twitter" width={90} height={90} />
              <img src="contact/linkedin.png" alt="LinkedIn" width={90} height={90} />
            </div>
        </div>
      </div>
      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Contact;
