import "../App.css";
import { NavLink } from "react-router-dom";
import properties from "../property.js";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import HomeIcon from "@mui/icons-material/Home";
import { RiSearchFill } from "react-icons/ri";
import { FaStar } from "react-icons/fa6";
import Footer from "../components/Footer.jsx";
import Typography from "@mui/material/Typography";

const Home = () => {
  return (
    <div className="min-h-screen">
      {/* Home section */}
      <section className="max-w-full max-h-1/2">
        <img
          src="/images/home.jpg"
          alt="Home background images"
          className="h-250 w-full"
        />
        {/* rectangle_2 */}
        <div className="h-[100px] bg-black absolute top-0 w-full opacity-95">
          <img
            src="/images/building_construction_logo.png"
            alt="building_construction_logo"
            width={200}
            height={103}
            className="relative -top-10 -left-10"
          />
          <div className="rectangle_2 relative -top-40 flex float-end pe-15">
            <p className="text-[rgba(193,170,70,1)]">EN/</p>
            <img src="/images/indian_flag.jpg" width={30} alt="Indian flag" />
          </div>
        </div>

        {/* rectangle_3 */}
        <div className="rectangle_3 w-35 h-225 bg-black absolute top-25 opacity-95 text-white">
          <div>
            <ul className="flex flex-col gap-5 justify-center px-7">
              <NavLink to="/">Home</NavLink>
              <NavLink to="/about">About</NavLink>
              <NavLink to="/property">Property</NavLink>
              <NavLink to="/blog">Blog</NavLink>
              <NavLink to="/contact">Contact</NavLink>
            </ul>
          </div>
        </div>
        {/* rectangle_4 */}
        <div className="rectangle_4 bg-black opacity-95 w-[520px] h-[320px] top-65 absolute right-0 text-white text-end pe-10">
          <p className="text-5xl font-bold pt-10 pl-10 py-1">Awesome Design</p>
          <p className="text-5xl font-bold py-1">and The way to</p>
          <p className="text-5xl font-bold py-1">
            Get
            <span className="text-[rgba(193,170,70,1)]"> Home</span>
          </p>
          <div className="mt-10">
            <button className="bg-[rgba(193,170,70,1)] px-6 py-2.5 text-2xl text-black font-thin! me-3">
              Connect Now
            </button>
            <button className="border px-6 py-2 text-2xl font-thin!">
              Discover More
            </button>
          </div>
        </div>

        {/* Carsoul button */}
        <div className="absolute z-30 flex top-235 left-210 gap-2">
          <button
            type="button"
            class="w-5 h-5 rounded-full bg-[rgba(0,0,0,0.51)]"
            aria-label="Slide 1"
            data-carousel-slide-to="0"
          ></button>
          <button
            type="button"
            class="w-5 h-5 rounded-full bg-[rgba(0,0,0,0.51)]"
            aria-label="Slide 2"
            data-carousel-slide-to="1"
          ></button>
          <button
            type="button"
            class="w-5 h-5 rounded-full bg-[rgba(0,0,0,0.51)]"
            aria-label="Slide 3"
            data-carousel-slide-to="2"
          ></button>
        </div>
      </section>

      {/* About Section */}
      <section className="px-20 mb-30">
        <header className="mb-30">
          <hr className="w-30 text-[rgba(193,170,70,1)]! rotate-90 relative top-15 -left-12 hori_line" />
          <h2 className="text-3xl font-medium! relative top-20 left-10">
            About Us
          </h2>
        </header>
        <article className="flex justify-between">
          <article className="py-10 w-2xl mb-5">
            <p className="about_article">Professional</p>
            <p className="about_article">Architect and</p>
            <p className="text-[rgba(193,170,70,1)]! about_article mb-3">
              Property Agent.
            </p>
            <p className="mb-5 text-2xl font-light!">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
              tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo
            </p>
            <button className="bg-[rgba(193,170,70,1)] text-white px-6 py-3 text-4xl font-thin!">
              Discover More
            </button>
          </article>
          <article>
            <img
              src="/images/about_section_img.jpg"
              alt="about_section_img"
              width={750}
              height={550}
            />
          </article>
        </article>
      </section>

      {/* Property Section */}
      <section className="mb-10">
        <header className="flex flex-col justify-center items-center gap-3">
          <p className="text-5xl font-medium! mb-10 underline underline-offset-15 decoration-[rgba(193,170,70,1)]">
            What we offer
          </p>
          <p className="text-6xl font-medium! mb-20">
            Premium{" "}
            <span className="text-[rgba(193,170,70,1)]!">Properties</span>
          </p>
        </header>

        {/* Images Section */}
        <article className="flex flex-wrap gap-10 justify-center items-center px-5">
          {properties.map((prop) => (
            <div
              key={prop.id}
              className="px-5 py-4 border-2 border-[rgba(193,170,70,1)] h-120 w-110 hover:border-indigo-500"
            >
              <div className="h-67 overflow-hidden">
                <img
                  src={prop.img}
                  alt=""
                  width={400}
                  className="h-full rounded"
                />
              </div>
              <p className="py-2 font-medium!">
                <LocationOnIcon /> {prop.location}
              </p>
              <p className="text-xs font-thin! mb-5">{prop.detaile}</p>
              <div className="flex gap-4 mb-4">
                <p className="text-[10px]">
                  <HomeIcon /> {prop.room}
                </p>
                <p className="flex gap-2 text-[10px] items-center">
                  <img src="/images/property/bathroom.png" width={20} />{" "}
                  {prop.bathroom}
                </p>
                <p className="flex gap-2 text-[10px] items-center">
                  <img src="/images/property/balcony.png" width={20} />{" "}
                  {prop.balcony}
                </p>
              </div>
              <div>
                <button className="px-12 py-2 text-white bg-black border-2 border-[rgba(193,170,70,1)] font-thin!">
                  View More
                </button>
              </div>
            </div>
          ))}
        </article>
        <div className="container mx-auto h-25 relative -top-5 -z-10 bg-linear-to-t from-[#f6f5ee] to-[#ffff] rounded-2xl mb-10"></div>
        <div className="container mx-auto grid place-items-center">
          <button className="text-4xl font-thin! text-white px-5 py-4 bg-[rgba(193,170,70,1)] hover:border-2 border-indigo-500">
            Discover More
          </button>
        </div>
      </section>

      {/* Professional section */}
      <section className="px-20 pb-35 bg-[rgba(4,4,4,1)]">
        <header className="mb-10">
          <hr className="w-30 text-[rgba(193,170,70,1)]! rotate-90 relative top-15 -left-12 hori_line" />
          <h2 className="text-3xl text-white font-medium! relative top-20 left-10">
            Professional
            <span className="text-[rgba(193,170,70,1)]! px-2">Service</span>
          </h2>
        </header>
        <article className="flex flex-wrap gap-30 mt-40 pb-10 text-white max-w-8xl justify-center">
          <div className="flex flex-col justify-center items-center border-2 border-[rgba(193,170,70,1)] w-[400px] h-[400px] px-5 py-4">
            <ul className="grid grid-cols-2 gap-5 w-[120px] place-items-center mb-4">
              <li className="bg-[#c1aa46] w-13 h-13 rounded-lg"></li>
              <li className="bg-[rgba(193,170,70,1)] w-13 h-13 rounded-lg"></li>
              <li className="bg-[rgba(193,170,70,1)] w-13 h-13 rounded-lg"></li>
              <li className="bg-[rgba(193,170,70,1)] w-13 h-13 rounded-lg"></li>
            </ul>
            <div className="text-[28px] font-bold! mb-2">Property Listings</div>
            <p className="text-[15px] text-center font-extralight! px-8 leading-4">
              Showcase an extensive portfolio of residential and commercial
              properties, including detailed descriptions, high-quality images,
              and virtual tours.
            </p>
          </div>

          <div className="flex flex-col justify-center items-center border-2 border-[rgba(193,170,70,1)] w-[400px] h-[400px] px-5 py-4">
            <div>
              <RiSearchFill className="text-[rgba(193,170,70,1)] w-[150px] h-[150px]" />
            </div>
            <div className="text-[28px] font-bold! mb-2">
              Custom Property Search
            </div>
            <p className="text-[15px] text-center font-extralight! px-8 leading-4">
              Offer a personalized search experience that allows users to filter
              properties by location, budget, property type, and other
              preferences.
            </p>
          </div>

          <div className="flex flex-col justify-center items-center border-2 border-[rgba(193,170,70,1)] w-[400px] h-[400px] px-5 py-4">
            <div>
              <img
                src="/images/property/home_hashtag.svg"
                alt="Home hashtag image"
                className="text-[rgba(193,170,70,1)]!"
                width={150}
              />
            </div>
            <div className="text-[28px] font-bold! mb-2">Home Valuation</div>
            <p className="text-[15px] text-center font-extralight! px-8 leading-4">
              Offer free home valuation services to help homeowners determine
              the current market value of their property.
            </p>
          </div>

          <div className="flex flex-col justify-center items-center border-2 border-[rgba(193,170,70,1)] w-[400px] h-[400px] px-5 py-4">
            <div className="pb-10">
              <img
                src="/images/property/book.png"
                alt="Group peoples"
                className="group_peoples"
              />
            </div>
            <div className="text-[28px] font-bold! mb-2">Legal Assistance</div>
            <p className="text-[15px] text-center font-extralight! px-8 leading-4">
              Provide access to legal services for property transactions,
              ensuring all contracts and agreements are compliant with local
              regulations.
            </p>
          </div>

          <div className="flex flex-col justify-center items-center border-2 border-[rgba(193,170,70,1)] w-[400px] h-[400px] px-5">
            <div className="pb-10">
              <img
                src="/images/property/group-users.png"
                alt="Group peoples"
                className="group_peoples"
              />
            </div>
            <div className="text-[28px] font-bold! mb-2">
              Client Testimonials
            </div>
            <p className="text-[15px] text-center font-extralight! px-8 leading-4">
              Include testimonials from satisfied clients to build trust and
              credibility.
            </p>
          </div>
        </article>

        <hr className="my-10 border-2 border-[rgba(193,170,70,1)] w-[1200px] mx-auto" />

        <div className="text-white flex flex-col justify-center items-center mb-20">
          <div className="text-[38px]">
            We Help you to Get an{" "}
            <span className="text-[rgba(193,170,70,1)]">Excellent Home.</span>
          </div>

          <div className="text-[24px] font-normal!">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
            tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
          </div>
        </div>

        <div className="text-white flex justify-evenly gap-5">
          <div className="px-15">
            <div className="flex gap-3 mb-20">
              <div>
                <img
                  src="/images/buy_property.png"
                  alt=""
                  width={150}
                  height={150}
                />
              </div>
              <div className="w-[650px]">
                <p className="text-[40px] font-semibold!">Buy Property</p>
                <p className="text-[18px] font-light!">
                  Explore a diverse range of properties tailored to your
                  preferences, whether you're searching for a cozy starter home,
                  a luxurious estate, or a smart investment.
                </p>
              </div>
            </div>

            <div className="flex gap-3 mb-20">
              <div>
                <img src="/images/sell.png" alt="" width={150} height={150} />
              </div>
              <div className="w-[650px]">
                <p className="text-[40px] font-semibold!">Sell Property</p>
                <p className="text-[18px] font-light!">
                  Get the best price for your property with our comprehensive
                  selling services.
                </p>
              </div>
            </div>

            <div className="flex gap-3 mb-20">
              <div>
                <img src="/images/rent.png" alt="" width={150} height={150} />
              </div>
              <div className="w-[650px]">
                <p className="text-[40px] font-semibold!">Rent Property</p>
                <p className="text-[18px] font-light!">
                  Whether you're looking for a short-term lease or a long-term
                  rental, we have a wide selection of properties to meet your
                  needs.
                </p>
              </div>
            </div>
          </div>
          <div>
            <img
              src="/images/key.jpg"
              alt="Key and hand image"
              className="key_hand"
            />
          </div>
        </div>
      </section>

      {/* Testominals section */}
      <section className="px-20 mb-10">
        <header className="mb-30">
          <hr className="w-30 text-[rgba(193,170,70,1)]! rotate-90 relative top-15 -left-12 hori_line" />
          <h2 className="text-3xl font-medium! relative top-20 left-10">
            Testominals
          </h2>
        </header>
        <div className="flex flex-col justify-center items-center mb-20">
          <div className="text-[40px] font-medium! mb-2">
            Don't take our word for it. Over{" "}
            <span className="text-[rgba(193,170,70,1)] font-semibold!">
              100+ people
            </span>{" "}
            trust us.
          </div>
          <hr className="border border-[rgba(193,170,70,1)] w-[820px] mx-auto" />
        </div>

        <div className="grid grid-cols-2 gap-5 mx-50">
          <div className="text-[96px] font-semibold! flex flex-col justify-center relative -top-38">
            Why
            <p className="inline-flex -mt-10">
              <span className="text-[rgba(193,170,70,1)] font-semibold!">
                Choose us
              </span>
              ?
            </p>
          </div>
          {/* Testominals Users */}
          {/* User 1 */}
          <div className="w-[500px] h-[480px] flex flex-col justify-center items-center border border-[rgba(193,170,70,1)]">
            <div className="w-[148px] h-[148px] rounded-full overflow-hidden border-2 border-[rgba(193,170,70,1)] mb-2">
              <img src="/testominals/user1.jpg" alt="User 1" />
            </div>
            <p className="text-[32px] mb-2">Franklin</p>
            <div className="flex gap-2 mb-2">
              <FaStar className="w-[35px] h-[35px] text-[rgba(193,170,70,1)]" />
              <FaStar className="w-[35px] h-[35px] text-[rgba(193,170,70,1)]" />
              <FaStar className="w-[35px] h-[35px] text-[rgba(193,170,70,1)]" />
              <FaStar className="w-[35px] h-[35px] text-[rgba(193,170,70,1)]" />
              <FaStar className="w-[35px] h-[35px] text-[rgba(193,170,70,1)]" />
            </div>
            <div className="text-center font-light! text-xl px-20">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
              tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
            </div>
          </div>
          {/* User 2 */}
          <div className="w-[500px] h-[480px] flex flex-col justify-center items-center border border-[rgba(193,170,70,1)] relative -top-68">
            <div className="w-[148px] h-[148px] rounded-full overflow-hidden border-2 border-[rgba(193,170,70,1)] mb-2">
              <img src="/testominals/user2.jpg" alt="User 2" />
            </div>
            <p className="text-[32px] mb-2">Amy Julio</p>
            <div className="flex gap-2 mb-2">
              <FaStar className="w-[35px] h-[35px] text-[rgba(193,170,70,1)]" />
              <FaStar className="w-[35px] h-[35px] text-[rgba(193,170,70,1)]" />
              <FaStar className="w-[35px] h-[35px] text-[rgba(193,170,70,1)]" />
              <FaStar className="w-[35px] h-[35px] text-[rgba(193,170,70,1)]" />
              <FaStar className="w-[35px] h-[35px] text-[rgba(193,170,70,1)]" />
            </div>
            <div className="text-center font-light! text-xl px-20">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
              tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
            </div>
          </div>
          {/* User 3 */}
          <div className="w-[500px] h-[480px]  flex flex-col justify-center items-center border border-[rgba(193,170,70,1)]">
            <div className="w-[148px] h-[148px] rounded-full overflow-hidden border-2 border-[rgba(193,170,70,1)] mb-2">
              <img src="/testominals/user3.jpg" alt="User 3" />
            </div>
            <p className="text-[32px] mb-2">Muad P N</p>
            <div className="flex gap-2 mb-2">
              <FaStar className="w-[35px] h-[35px] text-[rgba(193,170,70,1)]" />
              <FaStar className="w-[35px] h-[35px] text-[rgba(193,170,70,1)]" />
              <FaStar className="w-[35px] h-[35px] text-[rgba(193,170,70,1)]" />
              <FaStar className="w-[35px] h-[35px] text-[rgba(193,170,70,1)]" />
              <FaStar className="w-[35px] h-[35px] text-[rgba(193,170,70,1)]" />
            </div>
            <div className="text-center font-light! text-xl px-20">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
              tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
            </div>
          </div>
          {/* User 4 */}
          <div className="w-[500px] h-[480px]  flex flex-col justify-center items-center border border-[rgba(193,170,70,1)] relative -top-65">
            <div className="w-[148px] h-[148px] rounded-full overflow-hidden border-2 border-[rgba(193,170,70,1)] mb-2">
              <img src="/testominals/user4.jpg" alt="User 4" />
            </div>
            <p className="text-[32px] mb-2"> Neil Nicolas</p>
            <div className="flex gap-2 mb-2">
              <FaStar className="w-[35px] h-[35px] text-[rgba(193,170,70,1)]" />
              <FaStar className="w-[35px] h-[35px] text-[rgba(193,170,70,1)]" />
              <FaStar className="w-[35px] h-[35px] text-[rgba(193,170,70,1)]" />
              <FaStar className="w-[35px] h-[35px] text-[rgba(193,170,70,1)]" />
              <FaStar className="w-[35px] h-[35px] text-[rgba(193,170,70,1)]" />
            </div>
            <div className="text-center font-light! text-xl px-20">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
              tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
            </div>
          </div>
        </div>

        <hr className="my-10 border border-[rgba(193,170,70,1)] w-full mx-auto" />
      </section>

      {/* Contact section */}
      <article>
        <div className="max-h-[1650px]">
          <img
            src="/testominals/bg.jpg"
            alt="testominal bg image"
            className="w-full h-[800px] z-0"
          />
          <div className="flex flex-col justify-center items-center z-10 relative -top-155">
            <div className="text-[28px] font-medium! mb-10">
              Send Us a Message
            </div>
            <div className="text-6xl font-semibold! mb-10">
              Let's Establish{" "}
              <span className="text-[rgba(193,170,70,1)]">Relations</span>
            </div>
            <div className="w-[1000px] h-[900px] mx-auto px-10 py-10 border-2 border-[rgba(193,170,70,1)] bg-white">
              <Typography
                variant="h3"
                component="h6"
                className="font-semibold! mb-5"
              >
                Get in{" "}
                <span className="text-[rgba(193,170,70,1)] font-semibold!">
                  Touch
                </span>
              </Typography>
              <div className="text-2xl font-extralight! mb-5">
                We're here to help you with any questions or concerns
              </div>
              <div>
                <form className="flex flex-col gap-8 mb-10">
                  <div className="flex gap-8">
                    <input type="text" placeholder="Full Name" className="font-light! border border-[rgba(193,170,70,1)] py-5 px-4 w-1/2 bg-gray-100 outline-none placeholder:opacity-50" />
                    <input type="number" placeholder="Phone Number" className="font-light! border border-[rgba(193,170,70,1)] py-5 px-4 w-1/2 bg-gray-100 outline-none placeholder:opacity-50" />
                  </div>
                  <input type="email" placeholder="Email / Url" className="font-light! border border-[rgba(193,170,70,1)] py-6 px-4 w-full bg-gray-100 outline-none placeholder:opacity-50" />
                  <input type="text" placeholder="How can I help you ?" className="font-light! border border-[rgba(193,170,70,1)] py-6 px-4 w-full bg-gray-100 outline-none placeholder:opacity-50" />
                  <textarea type="text" rows={10} placeholder="Description" className="font-light! border border-[rgba(193,170,70,1)] py-6 px-4 w-full bg-gray-100 outline-none placeholder:opacity-50" />
                  <div className="flex justify-center items-center">
                    <input type="submit" value="Submit" className="text-4xl text-white font-extralight! py-5 w-[550px] bg-[#C1AA46]" />
                  </div>
                </form>
                <div className="flex flex-col justify-center items-center pt-12">
                  <p className="text-xl text-[#C1AA46] font-light!">Official Social Media</p>
                  <p className="text-5xl font-semibold! my-6">Get in Connect with Us</p>
                </div>
                <div className="flex justify-center gap-20 pt-5">
                  <img src="/contact/youtube.png" alt="youtube" width={90} height={90} />
                  <img src="/contact/youtube.png" alt="facebook" width={90} height={90} />
                  <img src="/contact/insta.png" alt="instagram" width={90} height={90} />
                  <img src="/contact/twitter.png" alt="twitter" width={90} height={90} />
                  <img src="/contact/linkedin.png" alt="LinkedIn" width={90} height={90} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </article>
      
      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Home;