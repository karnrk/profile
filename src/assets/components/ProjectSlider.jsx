import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

function ProjectSlider({ projects = [],title }) {
  return (
    <div className="w-full text-white mt-10">
        <h4 className="article-title text-4xl mb-8">
            <span className="article-title-prefix eq-h3 ms-1 me-2 pe-1">|</span>
            <span className="article-title-text mb-0">
                {title?.normal} <span style={{ color: "var(--primary-color)" }}>{title?.highlight}</span>
            </span>
        </h4>
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        spaceBetween={30}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        autoplay={{ delay: 5000 }}
        breakpoints={{
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}
        className="px-6"
      >
        {projects.map((project, index) => (
          <SwiperSlide key={index}>

            <a
              href={project.websitelink}
              target="_blank"
              rel="noopener noreferrer"
              className="block group"
            >

              <div className="relative overflow-hidden rounded-xl shadow-lg">

                {/* Image */}
                <img
                  src={project.imgSrc}
                  alt={project.projectname}
                  className="w-full h-64 object-cover transform group-hover:scale-110 transition duration-500 object-top"
                />

                {/* Overlay */}
                <div className="absolute inset-0 flex items-end p-6">

                  <h3 className="text-lg font-semibold text-cyan-500 group-hover:text-cyan-400 transition">
                    {project.projectname}
                  </h3>

                </div>

              </div>

            </a>

          </SwiperSlide>
        ))}
      </Swiper>

    </div>
  );
}

export default ProjectSlider;