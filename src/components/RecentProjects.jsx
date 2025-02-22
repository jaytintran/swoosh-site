import { ArrowUpRight, Globe } from "lucide-react";

const projects = [
  {
    title: "CineSeek",
    description:
      "Built with React.js for the user interface, Appwrite for the Trending Movies Algorithm, and styled with TailwindCSS. CineSeek is a website project designed to with basic React.js. The platform offers a sleek and modern experience for browsing and discovering movies.",
    github: "https://github.com/jaytintran/cine-seek",
    live: "https://cine-seek-web.vercel.app/",
  },
  {
    title: "Nike Store",
    description:
      "This is minimalistic React.js application styled with TailwindCSS. This project focuses on clean and efficient design practices while utilizing the power of React.js for a seamless user experience.",
    github: "https://github.com/jaytintran/nike-store-react",
    live: "https://nike-store-react.vercel.app/",
  },
  {
    title: "Elec-car",
    description:
      "A mobile responsive website for an electric automobile dealer in local area. Technologies used: CSS, HTML, Figma & Front-end.",
    github: "https://github.com/jaytintran/elec-car",
    live: "https://elec-car.vercel.app/",
  },
];

const RecentProjects = () => (
  <div className="mt-10 md:mt-20">
    <h1 className="text-5xl uppercase font-bold text-left">
      Recent <span className="text-gray-600">Projects</span>
    </h1>
    <div className="flex flex-col text-left gap-6 mt-6">
      {projects.map((project, index) => (
        <div className="bg-white p-6 rounded-lg shadow-lg" key={index}>
          <h3 className="text-xl font-bold text-black">{project.title}</h3>
          <p className="text-gray-600 mt-2">{project.description}</p>

          {project.github ? (
            <>
              <a
                href={`${project.github}`}
                className="text-orange-600 mr-2 inline-block"
              >
                <ArrowUpRight size={30} />
              </a>
              <a
                href={`${project.live}`}
                className="text-orange-600 mt-4 inline-block"
              >
                <Globe size={30} />
              </a>
            </>
          ) : (
            <p className="text-orange-600 mt-4 inline-block">Upcoming</p>
          )}
        </div>
      ))}
    </div>
  </div>
);

export default RecentProjects;
