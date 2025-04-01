import { useState } from "react";
import Swiper from "./ui/Swiper";

const webDesignProjects = [
  {
    name: "Nike Store",
    screenshot: "/nike-store.png",
    description:
      "This is minimalistic React.js application styled with TailwindCSS. This project focuses on clean and efficient design practices while utilizing the power of React.js for a seamless user experience.",
    githubLink: "https://github.com/jaytintran/nike-store-react",
    demoLink: "https://nike-store-react.vercel.app/",
  },
  {
    name: "Elec-car",
    screenshot: "/elec-car.png",
    description:
      "A mobile responsive website for an electric automobile dealer in local area. Technologies used: CSS, HTML, Figma & Front-end.",
    githubLink: "https://github.com/jaytintran/elec-car",
    demoLink: "https://elec-car.vercel.app/",
  },
];

const developerProjects = [
  {
    name: "Neurai Face Recognition App",
    screenshot: "/neurai.png",
    alt: "Screenshot of Neurai Face Recognition App",
    demoLink: "https://github.com/jaytintran/neurai",
    githubLink: "https://github.com/jaytintran/neurai",
    description:
      "A full-stack app for face recognition using the Clarifai API, built with React, Node.js, and TailwindCSS.",
  },
  {
    name: "CineSeek Movie Discovery Platform",
    screenshot: "/cineseek.png",
    alt: "Screenshot of CineSeek Movie Discovery Platform",
    demoLink: "https://cine-seek-web.vercel.app/",
    githubLink: "https://github.com/jaytintran/cine-seek",
    description:
      "A movie discovery platform with a trending movies algorithm, built with React, TailwindCSS, and Appwrite.",
  },
  {
    name: "SleekAI React Landing Page",
    screenshot: "/sleekai.png",
    alt: "Screenshot of SleekAI React Landing Page",
    demoLink: "https://sleekai-landing-page.vercel.app/",
    githubLink: "https://github.com/jaytintran/sleek-ai",
    description:
      "A landing page showcasing AI-powered features like image generation and chatbot interactions, built with React, and TailwindCSS."
  },
  {
    name: "Personal Portfolio Website",
    screenshot: "/portfolio.png",
    alt: "Screenshot of Personal Portfolio Website",
    githubLink: "https://github.com/jaytintran/swoosh-site",
    description:
      "A responsive personal portfolio website to showcase projects, built with React, TailwindCSS, and Vite.",
  },
];

const RecentProjects = () => {
  const [filter, setFilter] = useState("development"); // Default to Web Development

  return (
    <div className="mt-10 md:mt-20">
      <h1 className="text-4xl md:text-5xl uppercase font-bold text-left text-white">
        Recent <span className="text-gray-400">Projects</span>
      </h1>

      {/* Filter Buttons */}
      <div className="flex gap-4 mt-6">
        <button
          onClick={() => setFilter("development")}
          className={`px-6 py-2 rounded-full font-semibold text-sm uppercase tracking-wide transition-all duration-300 ${
            filter === "development"
              ? "bg-orange-500 text-white shadow-lg"
              : "bg-gray-700 text-gray-300 hover:bg-gray-600"
          }`}
        >
          Web Development
        </button>
        <button
          onClick={() => setFilter("design")}
          className={`px-6 py-2 rounded-full font-semibold text-sm uppercase tracking-wide transition-all duration-300 ${
            filter === "design"
              ? "bg-orange-500 text-white shadow-lg"
              : "bg-gray-700 text-gray-300 hover:bg-gray-600"
          }`}
        >
          Web Design
        </button>
      </div>

      {/* Conditionally Render Swiper Based on Filter */}
      <div className="mt-10">
        {filter === "development" ? (
          <>
            <Swiper projects={developerProjects} />
          </>
        ) : (
          <>
            <Swiper projects={webDesignProjects} />
          </>
        )}
      </div>
    </div>
  );
};

export default RecentProjects;
