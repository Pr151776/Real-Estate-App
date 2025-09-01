import { NavLink } from "react-router-dom";
import { FaStar } from "react-icons/fa6";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

const About = () => {
  return (
    <>
      {/* Navbar section */}
      <Navbar label="About Us" headLabel="About Us" anhorLink="about" />

      {/* About content */}
      <div className="px-20">
        <div className="mb-30">
          <hr className="w-30 text-[rgba(193,170,70,1)]! rotate-90 relative top-15 -left-12 hori_line" />
          <h2 className="text-3xl font-medium! relative top-20 left-10">
            About Us
          </h2>
        </div>
        <div className="mb-10">
          <div className="text-[40px] font-semibold! px-10 mb-5">
            Your premier partner in real estate.{" "}
            <span className="text-[rgba(193,170,70,1)]">
              Transforming properties into dreams.
            </span>
          </div>
          <hr className="border border-[rgba(193,170,70,1)] w-7xl mx-auto" />
        </div>
        
        {/* Team section */}
        <article className="px-10 mb-20">
          <div className="text-2xl font-extralight! mb-5">Meet Our Team</div>
          {/* Team members section */}
          <div className="flex">
            <div className="flex flex-wrap gap-3 w-[800px]">
              <div className="w-[350px] h-[500px] text-white border-2 border-[rgba(193,170,70,1)]">
                <img
                  src="about/member1.jpg"
                  alt="Member 1"
                  className="w-full h-full"
                />
                <div className="text-2xl font-medium! relative -top-15 left-4">
                  ABDUL RAHMAN
                </div>
                <p className="text-sm font-extralight! relative -top-16 left-4 opacity-70">
                  CEO of Real Estate
                </p>
              </div>
              <div className="w-[350px] h-[500px] text-white border-2 border-[rgba(193,170,70,1)]">
                <img
                  src="about/member2.jpg"
                  alt="Member 1"
                  className="w-full h-full"
                />
                <div className="text-2xl font-medium! relative -top-15 left-4">
                  KIM KONG
                </div>
                <p className="text-sm font-extralight! relative -top-16 left-4 opacity-70">
                  Sale Executive
                </p>
              </div>
              <div className="w-[350px] h-[500px] text-white border-2 border-[rgba(193,170,70,1)]">
                <img
                  src="about/member3.jpg"
                  alt="Member 1"
                  className="w-full h-full"
                />
                <div className="text-2xl font-medium! relative -top-15 left-4">
                  JOY JACOB
                </div>
                <p className="text-sm font-extralight! relative -top-16 left-4 opacity-70">
                  Marketing Lead
                </p>
              </div>
              <div className="w-[350px] h-[500px] text-white border-2 border-[rgba(193,170,70,1)]">
                <img
                  src="about/member4.jpg"
                  alt="Member 1"
                  className="w-full h-full"
                />
                <div className="text-2xl font-medium! relative -top-15 left-4">
                  SERA JHON
                </div>
                <p className="text-sm font-extralight! relative -top-16 left-4 opacity-70">
                  Customer Support
                </p>
              </div>
            </div>
            <div className="flex flex-col max-w-1/2 px-15">
              <div className="text-8xl font-semibold! w-[500px] h-[200px] mb-5">
                <span className="text-[rgba(193,170,70,1)]">12+ </span>Over
                Experience
              </div>
              <div className="text-[40px] font-light! w-[600px] h-[100px] mb-5">
                Don't take our word for it. Over{" "}
                <span className="text-[rgba(193,170,70,1)]"> 100+ people </span>{" "}
                trust us.
              </div>
              <div className="text-[32px] font-extralight! py-5 w-[650px]">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud.Proin ullamcorper pretium
                orci. Donec nec scelerisque leo. Nam massa dolor, imperdiet nec
                consequat a, congue id sem. Maecenas malesuada faucibus finibus.
                Donec vitae libero porttitor.
              </div>
              <div className="flex justify-between items-center">
                <div className="text-[64px] font-semibold!">
                  <span className="text-[rgba(193,170,70,1)]">4.9</span>/5{" "}
                  <span className="text-4xl font-medium!">Rating</span>
                </div>
                <div>
                  <img src="about/review.png" alt="Review images" />
                </div>
              </div>
            </div>
          </div>
        </article>
      </div>

      {/* Why choosen section */}
      <section className="px-20 pb-10 bg-[rgba(4,4,4,1)]">
        <header className="mb-25">
          <hr className="w-30 text-[rgba(193,170,70,1)]! rotate-90 relative top-15 -left-12 hori_line" />
          <h2 className="text-3xl text-white font-medium! relative top-20 left-10">
            Why choose us ?
          </h2>
        </header>

        <div className="text-white flex flex-col justify-center items-center mb-20">
          <div className="text-5xl font-semibold!">
            Reasons To{" "}
            <span className="text-[rgba(193,170,70,1)] font-semibold!">
              Choose Us
            </span>
          </div>
        </div>
        <hr className="w-150 text-[rgba(193,170,70,1)]! rotate-90 relative top-75 left-120 hori_line" />

        <div className="text-white flex justify-between gap-5">
          <div className="px-10">
            <div className="flex gap-3 mb-20">
              <div>
                <img
                  src="images/buy_property.png"
                  alt=""
                  width={120}
                  height={120}
                />
              </div>
              <div className="w-[500px]">
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
                <img src="images/sell.png" alt="" width={120} height={120} />
              </div>
              <div className="w-[500px]">
                <p className="text-[40px] font-semibold!">Sell Property</p>
                <p className="text-[18px] font-light!">
                  Get the best price for your property with our comprehensive
                  selling services.
                </p>
              </div>
            </div>

            <div className="flex gap-3 mb-20">
              <div>
                <img src="images/rent.png" alt="" width={120} height={120} />
              </div>
              <div className="w-[500px]">
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
            <img src="about/map.png" alt="Map" width={550} />
          </div>
        </div>
      </section>

      {/* Testominals section */}
      <section className="px-20">
        <header className="mb-50">
          <hr className="w-30 text-[rgba(193,170,70,1)]! rotate-90 relative top-15 -left-12 hori_line" />
          <h2 className="text-3xl font-medium! relative top-20 left-10">
            Testominals
          </h2>
        </header>
        <div className="flex flex-col justify-center items-center mb-20">
          <div className="text-5xl font-medium! mb-10">
            There are Already Join{" "}
            <span className="text-[rgba(193,170,70,1)] font-semibold!">
              our Family
            </span>
          </div>
          <hr className="border border-[rgba(193,170,70,1)] w-160 mx-auto" />
        </div>
        {/* Testominals Users */}
        <div className="mb-30">
          <div className="text-[96px] font-semibold! flex justify-center gap-10">
            {/* User 1 */}
            <div className="w-[500px] h-[500px] relative flex flex-col justify-center items-center border-2 border-[rgba(193,170,70,1)]">
              <div className="w-[148px] h-[148px] rounded-full overflow-hidden border-2 border-[rgba(193,170,70,1)] mb-2">
                <img src="testominals/user1.jpg" alt="User 1" />
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
            {/* User 4 */}
            <div className="w-[500px] h-[500px] relative flex flex-col justify-center items-center border-2 border-[rgba(193,170,70,1)]">
              <div className="w-[148px] h-[148px] rounded-full overflow-hidden border-2 border-[rgba(193,170,70,1)] mb-2">
                <img src="testominals/user4.jpg" alt="User 4" />
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
            {/* User 2 */}
            <div className="w-[500px] h-[500px] relative flex flex-col justify-center items-center border-2 border-[rgba(193,170,70,1)]">
              <div className="w-[148px] h-[148px] rounded-full overflow-hidden border-2 border-[rgba(193,170,70,1)] mb-2">
                <img src="testominals/user2.jpg" alt="User 2" />
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
          </div>
        </div>
      </section>
      
      {/* Footer */}
      <Footer />
    </>
  );
};

export default About;
