import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Typography from "@mui/material/Typography";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from '@mui/icons-material/ChevronRight';

const Blog = () => {
  return (
    <div>
      {/* Navbar section */}
      <Navbar
        label="Blog"
        headLabel="Top Articles on"
        headColor="Real Estate"
        anhorLink="blog"
      />

      {/* Blog section */}
      <div className="px-20">
        {/* Heading */}
        <div className="mb-30">
          <hr className="w-30 text-[rgba(193,170,70,1)]! rotate-90 relative top-15 -left-12 hori_line" />
          <h2 className="text-3xl font-medium! relative top-20 left-10">
            Blog
          </h2>
        </div>

        <div className="mb-20 flex flex-col lg:flex-row">
          {/* Images */}
          <div className="px-3 flex flex-col gap-5">
            {/* Image 1 */}
            <div className="relative">
              <div className="w-[1000px] h-[600px] object-cover overflow-hidden relative">
                <img src="/images/blog/image1.jpg" alt="Blog Images" />
                <div className="absolute inset-0 bg-[linear-gradient(to_bottom,rgba(217,217,217,0)_0%,rgba(0,0,0,0.7)_89%)]"></div>
              </div>
              <div className="w-[1000px] absolute flex justify-between items-center bottom-5 px-5">
                <div>
                  <p className="text-white text-2xl !font-medium">
                    43 LACKS CAN BUILD YOUR DREAM HOUSE WITH 4 BHK
                  </p>
                  <p className="text-white text-[20px] !font-extralight">
                    Kochi Builders provide a beatiful plan with minimal cost of
                    ....
                  </p>
                </div>
                <div className="flex gap-10 justify-center items-center">
                  <hr className="w-16 h-0 rotate-90 border border-[#C1AA46]" />
                  <button className="text-white text-lg border border-[#C1AA46] !font-light px-10 py-2">
                    View More
                  </button>
                </div>
              </div>
            </div>
            {/* Image 2 */}
            <div className="relative">
              <div className="w-[1000px] h-[600px] object-cover overflow-hidden relative">
                <img src="/images/blog/image2.jpg" alt="Blog Images" />
                <div className="absolute inset-0 bg-[linear-gradient(to_bottom,rgba(217,217,217,0)_0%,rgba(0,0,0,0.7)_89%)]"></div>
              </div>
              <div className="w-[1000px] absolute flex justify-between items-center bottom-5 px-5">
                <div>
                  <p className="text-white text-2xl !font-medium">
                    ABAD STARTING THERE 150TH PROJECT IN ALAPPUZHA
                  </p>
                  <p className="text-white text-[20px] !font-extralight">
                    Abad Constructor starting plain there project in alppzua...
                  </p>
                </div>
                <div className="flex gap-10 justify-center items-center">
                  <hr className="w-16 h-0 rotate-90 border border-[#C1AA46]" />
                  <button className="text-white text-lg border border-[#C1AA46] !font-light px-10 py-2">
                    View More
                  </button>
                </div>
              </div>
            </div>
            {/* Image 3 */}
            <div className="relative">
              <div className="w-[1000px] h-[600px] object-cover overflow-hidden relative">
                <img src="/images/blog/image3.jpg" alt="Blog Images" />
                <div className="absolute inset-0 bg-[linear-gradient(to_bottom,rgba(217,217,217,0)_0%,rgba(0,0,0,0.7)_89%)]"></div>
              </div>
              <div className="w-[1000px] absolute flex justify-between items-center bottom-5 px-5">
                <div>
                  <p className="text-white text-2xl !font-medium">
                    SPACEZONE EXPANDING THERE CURRENTLY CO-WORKING
                  </p>
                  <p className="text-white text-[20px] !font-extralight">
                    Near Info-Park area SpaceZone expanding there space for
                    Profits
                  </p>
                </div>
                <div className="flex gap-10 justify-center items-center">
                  <hr className="w-16 h-0 rotate-90 border border-[#C1AA46]" />
                  <button className="text-white text-lg border border-[#C1AA46] !font-light px-10 py-2">
                    View More
                  </button>
                </div>
              </div>
            </div>
            {/* Image 4 */}
            <div className="relative">
              <div className="w-[1000px] h-[600px] object-cover overflow-hidden relative">
                <img src="/images/blog/image4.jpg" alt="Blog Images" />
                <div className="absolute inset-0 bg-[linear-gradient(to_bottom,rgba(217,217,217,0)_0%,rgba(0,0,0,0.7)_89%)]"></div>
              </div>
              <div className="w-[1000px] absolute flex justify-between items-center bottom-5 px-5">
                <div>
                  <p className="text-white text-2xl !font-medium">
                    CHERAI RESORTS START MRP 999 AC ROOMS
                  </p>
                  <p className="text-white text-[20px] !font-extralight">
                    The new idea to impress visitors Beach to Budget Friendly
                  </p>
                </div>
                <div className="flex gap-10 justify-center items-center">
                  <hr className="w-16 h-0 rotate-90 border border-[#C1AA46]" />
                  <button className="text-white text-lg border border-[#C1AA46] !font-light px-10 py-2">
                    View More
                  </button>
                </div>
              </div>
            </div>
            {/* Image 5 */}
            <div className="relative">
              <div className="w-[1000px] h-[600px] object-cover overflow-hidden relative">
                <img src="/images/blog/image5.jpg" alt="Blog Images" />
                <div className="absolute inset-0 bg-[linear-gradient(to_bottom,rgba(217,217,217,0)_0%,rgba(0,0,0,0.7)_89%)]"></div>
              </div>
              <div className="w-[1000px] absolute flex justify-between items-center bottom-5 px-5">
                <div>
                  <p className="text-white text-2xl !font-medium">
                    EVERY WOMEN HAS DREAM KITCHEN TO DO DISH
                  </p>
                  <p className="text-white text-[20px] !font-extralight">
                    The new idea to impress visitors Beach to Budget Friendly
                  </p>
                </div>
                <div className="flex gap-10 justify-center items-center">
                  <hr className="w-16 h-0 rotate-90 border border-[#C1AA46]" />
                  <button className="text-white text-lg border border-[#C1AA46] !font-light px-10 py-2">
                    View More
                  </button>
                </div>
              </div>
            </div>
            <div className="flex justify-center items-center gap-5">
              <ChevronLeftIcon
                sx={{ fontSize: 40, color: "#C1AA46" }}
                className="border-2 border-[#C1AA46] rounded-full"
              />
              <span className="text-[40px] !font-bold">1</span>
              <ChevronRightIcon
                sx={{ fontSize: 40, color: "#C1AA46" }}
                className="border-2 border-[#C1AA46] rounded-full"
              />
            </div>
          </div>

          {/* Category & Latest News */}
          <div>
            {/* Category */}
            <div className="w-[450px] h-[280px] border-2 border-[#C1AA46] p-5 mb-5">
              <Typography className="!text-2xl text-[#C1AA46] pb-3">
                Category
              </Typography>
              <div className="flex justify-between mb-2">
                <div className="flex items-center gap-2">
                  <Typography className="!text-[16px]">News</Typography>
                  <img
                    src="/images/blog/news.png"
                    alt="News image"
                    className="w-[30px]"
                  />
                </div>
                <p>7</p>
              </div>
              <hr className="text-[#C1AA46] mb-3" />
              <div className="flex justify-between mb-2">
                <div className="flex items-center gap-2">
                  <Typography className="!text-[16px]">Apartments</Typography>
                  <img
                    src="/images/blog/apartment.png"
                    alt="News image"
                    className="w-[30px]"
                  />
                </div>
                <p>10</p>
              </div>
              <hr className="text-[#C1AA46] mb-3" />
              <div className="flex justify-between mb-2">
                <div className="flex items-center gap-2">
                  <Typography className="!text-[16px]">New Projects</Typography>
                  <img
                    src="/images/blog/newProject.png"
                    alt="News image"
                    className="w-[30px]"
                  />
                </div>
                <p>12</p>
              </div>
              <hr className="text-[#C1AA46] mb-3" />
              <div className="flex justify-between">
                <div className="flex items-center gap-2">
                  <Typography className="!text-[16px]">Houses</Typography>
                  <img
                    src="/images/blog/house.png"
                    alt="News image"
                    className="w-[30px]"
                  />
                </div>
                <p>30</p>
              </div>
            </div>

            {/* Latest News */}
            <div className="w-[450px] h-[650px] border-2 border-[#C1AA46] p-5">
              <Typography className="!text-2xl text-[#C1AA46] pb-3">
                Lastest News
              </Typography>
              <div className="">
                <div className="flex gap-5 mb-7">
                  <img
                    src="/images/blog/image1.jpg"
                    alt="Image 1"
                    width={200}
                    className="h-[110px]"
                  />
                  <p className="text-[16px] w-[150px]">
                    43 LACKS CAN BUILD YOUR DREAM HOUSE WITH 4 BHK
                  </p>
                </div>
                <hr className="w-full border border-[#C1AA46] mb-4" />
                <div className="flex gap-5 mb-7">
                  <img
                    src="/images/blog/image2.jpg"
                    alt="Image 1"
                    width={200}
                    className="h-[110px]"
                  />
                  <p className="text-[16px] w-[150px]">
                    ABAD STARTING THERE 150TH PROJECT IN ALAPPUZHA
                  </p>
                </div>
                <hr className="w-full border border-[#C1AA46] mb-4" />
                <div className="flex gap-5 mb-7">
                  <img
                    src="/images/blog/image5.jpg"
                    alt="Image 1"
                    width={200}
                    className="h-[110px]"
                  />
                  <p className="text-[16px] w-[150px]">
                    EVERY WOMEN HAS DREAM KITCHEN TO DO DISH
                  </p>
                </div>
                <hr className="w-full border border-[#C1AA46] mb-4" />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer Section */}
      <Footer />
    </div>
  );
};

export default Blog;
