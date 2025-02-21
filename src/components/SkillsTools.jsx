const skills = [
  {
    name: "React",
    description: "Front-end Library",
    icon: "./src/assets/react-icon.png",
  },
  {
    name: "Next.js",
    description: "Full-stack Framework",
    icon: "./src/assets/nextjs-icon.png",
  },
  {
    name: "TailwindCSS",
    description: "Styling Framework",
    icon: "./src/assets/tailwind-icon.png",
  },
  {
    name: "JavaScript",
    description: "Programming Language",
    icon: "./src/assets/javascript-icon.png",
  },
  {
    name: "Git",
    description: "Version Control",
    icon: "./src/assets/git-icon.png",
  },
];

const SkillsTools = () => (
  <div className="mt-10">
    <h1 className="text-5xl uppercase font-bold text-left">
      Skills & <span className="text-gray-600">Tools</span>
    </h1>

    <div className="grid grid-cols-2 xl:grid-cols-3 gap-6 mt-6">
      {skills.map((skill, index) => (
        <div
          key={index}
          className="flex items-center text-left gap-4 border p-6 rounded-lg shadow-lg"
        >
          <img
            src={skill.icon}
            alt={skill.name}
            className={`w-15 ${
              skill.name == "Next.js" ? "bg-white p-2 rounded" : ""
            }`}
          />
          <div>
            <p className="text-lg font-semibold">{skill.name}</p>
            <span className="text-gray-600 text-sm">{skill.description}</span>
          </div>
        </div>
      ))}
    </div>
  </div>
);

export default SkillsTools;
