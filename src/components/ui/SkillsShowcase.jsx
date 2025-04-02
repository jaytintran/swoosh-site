import { useState } from "react";
import skillsData from "../../constants/skillsShowcase";

/* eslint-disable react/prop-types */

const AllSkills = ({ skills }) => (
  <div className="flex flex-wrap gap-y-2 gap-x-3">
    {skills.map((skill, index) => (
      <SkillPill key={index} skill={skill} />
    ))}
  </div>
);

const SkillPill = ({ skill }) => (
  <div className="bg-gray-800 text-gray-200 text-sm font-medium px-4 py-2 rounded-full shadow-sm transition-transform duration-200 hover:scale-105 hover:bg-gray-700 cursor-default">
    {skill}
  </div>
);

const SkillCategory = ({ category, items, description }) => (
  <article className="border-l-4 border-lime-400 px-8 py-6 bg-gray-950 rounded-r-lg shadow-md">
    <div className="mb-5">
      <h2 className="text-2xl font-semibold text-left">{category}</h2>
      {description && (
        <p className="text-gray-400 mb-4 text-left text-sm">{description}</p>
      )}
    </div>
    <ul className="flex flex-wrap justify-start gap-x-3 gap-y-3">
      {items.map((item, index) => (
        <li key={index}>
          <SkillPill skill={item} />
        </li>
      ))}
    </ul>
  </article>
);

// 🔹 Search & Filter Component
const SkillsFilter = ({
  categories,
  selectedCategory,
  searchTerm,
  onCategoryChange,
  onSearchChange,
}) => {
  return (
    <div className="flex flex-wrap gap-4 mb-10">
      {/* Search Bar */}
      <input
        type="text"
        placeholder="Search skills..."
        className="px-4 py-2 bg-gray-900 text-white border border-gray-700 rounded-md w-full sm:w-1/2 focus:ring-2 focus:ring-lime-400"
        value={searchTerm}
        onChange={(e) => onSearchChange(e.target.value)}
      />

      {/* Category Dropdown */}
      <select
        className="px-4 py-2 bg-gray-900 text-white border border-gray-700 rounded-md focus:ring-2 focus:ring-lime-400"
        value={selectedCategory}
        onChange={(e) => onCategoryChange(e.target.value)}
      >
        {/* <option value="All">All Categories</option> */}
        {categories.map((category) => (
          <option key={category} value={category}>
            {category}
          </option>
        ))}
      </select>
    </div>
  );
};

const SkillsShowcase = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("Front-end");

  const categories = [
    "All",
    "All Categories",
    ...new Set(skillsData.map(({ category }) => category)),
  ];

  // 🔥 Global Search - Flattens skills across all categories
  const allSkills = skillsData.flatMap(({ items }) => items);

  const filteredSkills = skillsData
    .filter(
      ({ category }) =>
        selectedCategory === "All" || category === selectedCategory
    )
    .map(({ category, items, description }) => ({
      category,
      items: items.filter((skill) =>
        skill.toLowerCase().includes(searchTerm.toLowerCase())
      ),
      description,
    }))
    .filter(({ items }) => items.length > 0); // Remove empty categories

  return (
    <section className="w-full mt-10">
      <h1 className="text-4xl md:text-5xl font-bold text-left mb-3 text-white uppercase">
        Tech Stack & <span className="text-gray-600">Skills</span>
      </h1>

      {/* Search & Filter Component */}
      <SkillsFilter
        categories={categories}
        selectedCategory={selectedCategory}
        searchTerm={searchTerm}
        onCategoryChange={setSelectedCategory}
        onSearchChange={setSearchTerm}
      />

      {/* 🔥 Show All Skills if 'All' is selected */}
      {selectedCategory === "All" && searchTerm === "" ? (
        <AllSkills skills={allSkills} />
      ) : selectedCategory === "All Categories" ? (
        <div className="space-y-10">
          {skillsData.map((skillCategory, index) => (
            <SkillCategory key={index} {...skillCategory} />
          ))}
        </div>
      ) : (
        <div className="space-y-10">
          {filteredSkills.map((skillCategory, index) => (
            <SkillCategory key={index} {...skillCategory} />
          ))}
        </div>
      )}

      {/* No Results Found */}
      {filteredSkills.length === 0 && searchTerm && (
        <p className="text-gray-400 text-center mt-6">
          No skills match your search.
        </p>
      )}
    </section>
  );
};

export default SkillsShowcase;
