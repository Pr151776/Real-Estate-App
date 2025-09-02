import Navbar from "../components/Navbar";
import "../App.css";
import premium from "../assets/images/property/premium_apartment.jpg";
import home_img from "../assets/images/property/home-3.png";
import bathtub from "../assets/images/property/bathtub.png";
import balcony from "../assets/images/property/balcony.png";
import filter_img from "../assets/images/property/category/filter.png";
import category_list from "../assets/images/property/category/category_list.json";
import Footer from "../components/Footer";
import total_area from "/images/category/total_area.png";
import rooms from "/images/category/rooms.svg";
import kitchen from "/images/category/kitchen.png";
import bathroom from "/images/category/bathroom.png";
import parking from "/images/category/parking.png";


const Property = () => {
  return (
    <>
      {/* Navbar section */}
      <Navbar
        headLabel="Properties for"
        label="Property"
        headColor="sale"
        anhorLink="property"
      />

      {/* Property content */}
      <div className="px-20">
        {/* Heading */}
        <div className="mb-40">
          <hr className="w-35 text-[rgba(193,170,70,1)]! rotate-90 relative top-17 -left-12 hori_line" />
          <h2 className="text-[32px] font-semibold! relative top-20 left-10">
            Properties in
            <span className="text-[#C1AA46] font-semibold!"> KOCHI</span>
          </h2>
        </div>
        {/* Button and search bar */}
        <div className="mt-10 px-15 mb-30">
          <div className="flex flex-wrap items-center gap-5 text-[32px] text-[#C1AA46] mb-20">
            <button className="font-semibold! border-2 border-[#C1AA46] px-12 py-1">
              ALL
            </button>
            <button className="font-semibold! border-2 border-[#C1AA46] px-12 py-1">
              FLATS
            </button>
            <button className="font-semibold! border-2 border-[#C1AA46] px-10 py-1">
              HOUSES
            </button>
            <button className="font-semibold! border-2 border-[#C1AA46] px-6 py-1">
              APARTMENTS
            </button>
            <button className="font-semibold! border-2 border-[#C1AA46] px-5 py-1">
              LAND PROPERTY
            </button>
            <button className="font-semibold! border-2 border-[#C1AA46] px-6 py-1">
              OFFICES
            </button>
          </div>
          <div className="flex justify-center items-center gap-4">
            <input
              type="text"
              placeholder="Search by Catergory or locations"
              className="py-6.5 px-5 w-[750px] border border-[#C1AA46] placeholder:text-xl font-extralight!"
            />
            <button className="text-white text-4xl font-extralight! bg-[#C1AA46] px-17 py-5">
              Search
            </button>
          </div>
        </div>
        {/* Feature property section */}
        <div className="px-25 mb-80">
          <p className="flex flex-col text-[40px] font-medium! text-[#C1AA46] mb-5">
            FEATURED
            <span className="text-8xl font-medium! text-black">PROPERTIES</span>
          </p>

          {/* Premium apartment section */}
          <div className="relative h-[550px] overflow-hidden border-2 border-[#C1AA46] mb-15">
            <img
              src={premium}
              alt="Premium apartment image"
              className="object-bottom opacity-90"
            />
            <div className="absolute inset-0 bg-[linear-gradient(to_bottom,rgba(67,67,67,0.68)_0%,rgba(255,255,255,0)_100%)]"></div>
            
            {/* Tag - Premium Apartment */}
            <div className="w-[300px] h-14 bg-[#FFFFFF96] absolute top-15 right-0 flex justify-center items-center">
              <p className="text-xl text-[#434343] !font-medium opacity-100">
                Premium Apartment
              </p>
            </div>
            {/*Info & Price */}
            <div className="bg-[#FFFFFF96] h-13 w-full absolute bottom-0">
              {/* Price */}
              <div className="flex items-center opacity-75 px-4 py-1 text-5xl !font-medium absolute right-0">
                2.5 CORES
              </div>
              {/* Features */}
              <div className="flex items-center h-13 gap-4 px-4 py-2">
                <div className="flex items-center gap-1">
                  <img src={home_img} alt="home image" width={20} height={20} />
                  <span className="text-[10px] !font-medium">3 BHK</span>
                </div>
                <div className="flex items-center gap-1">
                  <img src={bathtub} alt="home image" width={20} height={20} />
                  <span className="text-[10px] !font-medium">2 BR</span>
                </div>
                <div className="flex items-center gap-1">
                  <img src={balcony} alt="home image" width={20} height={20} />
                  <span className="text-[10px] !font-medium">1 BAL</span>
                </div>
              </div>
            </div>
          </div>
          <hr className="border border-[#C1AA46] w-[550px] mx-auto mb-15" />

          {/* All category */}
          <div className="mb-20">
            <div className="flex justify-between items-center mb-25">
              <p className="text-4xl !font-semibold uppercase">
                All{" "}
                <span className="text-4xl !font-semibold uppercase text-[#C1AA46]">
                  Category
                </span>
              </p>
              <button className="border py-1 px-7 text-[32px] !font-light flex gap-4 items-center">
                Sort
                <img src={filter_img} alt="filter_img" width={38} />
              </button>
            </div>

            {/* Category List */}
            {category_list.map((list) => (
              <div className="mb-15">
              <div key={list.id} className="flex gap-10">
                <div className="max-w-[500px]">
                  <p className="text-5xl !font-semibold text-[#C1AA46] mb-5">
                    {list.name}
                  </p>
                  <p className="text-[20px] !font-light mb-5">{list.desc}</p>
                  <p className="text-2xl !font-light flex justify-between mb-4">
                    <div className="flex gap-1">
                    <img
                      src={total_area}
                      alt="total area image"
                      width={30}
                    />{" "}
                    Total Area Sqr
                    </div>
                    <span className="!font-semibold">{list.total_area}</span>
                  </p>
                  <p className="text-2xl !font-light flex justify-between mb-4">
                    <div className="flex gap-1">
                      <img
                      src={rooms}
                      alt="Rooms image"
                      width={30}
                    />{" "}
                    Rooms{" "}
                    </div>
                    <span className="!font-semibold">
                      {list.rooms}
                    </span>
                  </p>
                  <p className="text-2xl !font-light flex justify-between mb-4">
                    <div className="flex gap-1">
                      <img
                      src={kitchen}
                      alt="Kitchen image"
                      width={30}
                    />{" "}
                    Kitchen{" "}
                    </div>
                    <span className="!font-semibold">
                      {list.kitchen}
                    </span>
                  </p>
                  <p className="text-2xl !font-light flex justify-between mb-4">
                    <div className="flex gap-1">
                      <img
                      src={bathroom}
                      alt="Bathroom image"
                      width={30}
                    />{" "}
                    Bathroom{" "}
                    </div>
                    <span className="!font-semibold">
                      {list.bathroom}
                    </span>
                  </p>
                  <p className="text-2xl !font-light flex justify-between mb-10">
                    <div className="flex gap-1">
                      <img
                      src={parking}
                      alt="Parking"
                      width={30}
                    />{" "}
                    Parking{" "}
                    </div>
                    <span className="!font-semibold">
                      {list.parking}
                    </span>
                  </p>
                  <button className="bg-black text-white text-[32px] border border-[#C1AA46] !font-light w-full py-2">View More Details</button>
                </div>
                <div className="relative mb-30">
                  <img src={list.image} alt="" className="w-[900px] h-[500px] border-2 border-[#C1AA46]" />
                  <div className="absolute inset-0 bg-[linear-gradient(to_bottom,rgba(217,217,217,0)_0%,rgba(0,0,0,0.6)_85%)]"></div>
                </div>
              </div>
              <hr className="border text-[#C1AA46]"/>
              </div>
            ))}
          </div>
        </div>
      </div>
     {/* Footer */}
     <Footer />
    </>
  );
};

export default Property;
