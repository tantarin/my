import { content } from "../Content";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import { Pagination } from "swiper";
import PostList from "./PostList.jsx";
import React from "react";

const Projects = () => {
  const { Projects } = content;

  return (
    <section className="bg-bg_light_primary" id="projects">
      <div className="md:container px-5 pt-14 min-h-screen flex flex-col justify-between">
        <div>
          <h4 className="subtitle" data-aos="fade-down">
            {Projects.subtitle}
          </h4>
          <br />
        <div className="flex items-center lg:flex-row flex-col-reverse gap-5">
          {/*<PostList allPosts={posts} postType="works" home={true} />*/}
          <div className="p-4">
            <div className="flex flex-col grid-cols-9 p-2 mx-auto md:grid">
              <div className="flex md:contents flex-row-reverse">
                <div
                    className="relative p-4 my-6 text-gray-800 bg-white rounded-xl col-start-1 col-end-5 mr-auto md:mr-0 md:ml-auto">
                  <h3 className="text-lg font-semibold lg:text-xl">ITigris (Итигрис)</h3>
                  <p className="mt-2 leading-6">java-разработчик</p>
                  <span className="absolute text-sm text-indigo-800 -top-5 left-2 whitespace-nowrap">ноябрь 2022-наст.время</span>
                </div>
                <div className="relative col-start-5 col-end-6 mr-7 md:mx-auto">
                  <div className="flex items-center justify-center w-6 h-full">
                    <div
                        className="w-1 h-full bg-indigo-300 rounded-t-full bg-gradient-to-b from-indigo-400 to-indigo-300">
                    </div>
                  </div>
                  <div
                      className="absolute w-6 h-6 -mt-3 bg-white border-4 border-indigo-400 rounded-full top-1/2"></div>
                </div>
              </div>

              <div className="flex md:contents">
                <div className="relative col-start-5 col-end-6 mr-7 md:mx-auto">
                  <div className="flex items-center justify-center w-6 h-full">
                    <div className="w-1 h-full bg-indigo-300"></div>
                  </div>
                  <div
                      className="absolute w-6 h-6 -mt-3 bg-white border-4 border-indigo-400 rounded-full top-1/2"></div>
                </div>
                <div className="relative p-4 my-6 text-gray-800 bg-white rounded-xl col-start-6 col-end-10 mr-auto">
                  <h3 className="text-lg font-semibold lg:text-xl">Huawei Russian Research Institute</h3>
                  <p className="mt-2 leading-6">java-разработчик</p>
                  <span className="absolute text-sm text-indigo-800 -top-5 left-2 whitespace-nowrap">март 2020-ноябрь 2022</span>
                </div>
              </div>

              <div className="flex md:contents flex-row-reverse">
                <div
                    className="relative p-4 my-6 text-gray-800 bg-white rounded-xl col-start-1 col-end-5 mr-auto md:mr-0 md:ml-auto">
                  <h3 className="text-lg font-semibold lg:text-xl">ИТМО</h3>
                  <p className="mt-2 leading-6">Лаборант кафедры ИС</p>
                  <span className="absolute text-sm text-indigo-800 -top-5 left-2 whitespace-nowrap">2017-2020</span>
                </div>
                <div className="relative col-start-5 col-end-6 mr-7 md:mx-auto">
                  <div className="flex items-center justify-center w-6 h-full">
                    <div
                        className="w-1 h-full bg-indigo-300 rounded-t-full bg-gradient-to-b from-indigo-400 to-indigo-300">
                    </div>
                  </div>
                  <div
                      className="absolute w-6 h-6 -mt-3 bg-white border-4 border-indigo-400 rounded-full top-1/2"></div>
                </div>
              </div>

              <div className="flex md:contents">
                <div className="relative col-start-5 col-end-6 mr-7 md:mx-auto">
                  <div className="flex items-center justify-center w-6 h-full">
                    <div className="w-1 h-full bg-indigo-300"></div>
                  </div>
                  <div
                      className="absolute w-6 h-6 -mt-3 bg-white border-4 border-indigo-400 rounded-full top-1/2"></div>
                </div>
                <div className="relative p-4 my-6 text-gray-800 bg-white rounded-xl col-start-6 col-end-10 mr-auto">
                  <h3 className="text-lg font-semibold lg:text-xl">Репетитор и преподаватель на курсах</h3>
                  <p className="mt-2 leading-6">Подготовка к поступлению по олимпиаде в вуз</p>
                  <span className="absolute text-sm text-indigo-800 -top-5 left-2 whitespace-nowrap">2015-2017</span>
                </div>
              </div>

            </div>
          </div>
        </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
