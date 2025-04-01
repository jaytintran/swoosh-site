/* eslint-disable react/prop-types */
const ProjectCard = ({ project }) => (
  <div className="project-card bg-black text-white p-6 rounded-lg shadow-xl transform transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-neon-orange relative overflow-hidden group">
    <img
      src={project.screenshot}
      alt={project.name}
      className="w-full h-auto object-cover rounded-lg transition-all duration-500 group-hover:scale-110"
    />
    <div className="mt-6">
      <h3 className="text-2xl font-bold text-neon-orange">{project.name}</h3>
      <p className="mt-2 text-sm text-gray-400">{project.description}</p>
    </div>
    <div className="absolute bottWom-6 left-6 flex gap-4 text-sm text-gray-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
      <a
        href={project.demoLink}
        target="_blank"
        rel="noopener noreferrer"
        className="hover:text-neon-orange"
      >
        Demo
      </a>
      <a
        href={project.githubLink}
        target="_blank"
        rel="noopener noreferrer"
        className="hover:text-neon-orange"
      >
        GitHub
      </a>
    </div>
  </div>
);

export default ProjectCard;
