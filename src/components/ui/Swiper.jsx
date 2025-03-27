/* eslint-disable react/prop-types */
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "./Swiper.css";
// Import required modules
import { Pagination, Navigation, Autoplay } from "swiper/modules";
import { GithubIcon, Globe } from "lucide-react";

const SwiperComponent = ({ projects }) => {
  return (
    <Swiper
      modules={[Pagination, Navigation, Autoplay]} // Enable modules
      spaceBetween={30} // Space between slides
      slidesPerView={1} // Show 1 slide at a time on mobile
      breakpoints={{
        640: { slidesPerView: 1 }, // 1 slide on small screens
        768: { slidesPerView: 1 }, // 2 slides on medium screens
        1024: { slidesPerView: 1 }, // 3 slides on large screens
      }}
      pagination={{ clickable: false }} // Enable clickable pagination dots
      navigation // Enable navigation arrows
      autoplay={{ delay: 5000, disableOnInteraction: true }} // Autoplay every 3 seconds
      className="mySwiper"
    >
      {projects.map((project, index) => (
        <SwiperSlide key={index} className="">
          <div className="flex flex-col items-center p-4">
            <a
              href={project.demoLink}
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src={project.screenshot}
                alt={project.alt}
                className="min-w-xl w-full h-64 rounded-lg shadow-lg object-cover transition-transform duration-300 hover:scale-105 hover:shadow-xl"
              />
            </a>
            <section className="text-left p-10">
              <div className="flex justify-between items-center">
                <h3 className="mt-4 text-xl font-semibold text-white">
                  {project.name}
                </h3>
                <div className="mt-4 flex gap-4">
                  {project.githubLink && (
                    <a
                      href={project.githubLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-400 hover:underline"
                    >
                      <GithubIcon size={25} />
                    </a>
                  )}

                  {project.demoLink && (
                    <a
                      href={project.demoLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-400 hover:underline"
                    >
                      <Globe size={25} />
                    </a>
                  )}
                </div>
              </div>
              <p className="mt-5 text-gray-400">
                {project.description.slice(0, 100)} ... {""}
                <a href={project.githubLink} className="text-blue-400">
                  read more.
                </a>
              </p>
            </section>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default SwiperComponent;
