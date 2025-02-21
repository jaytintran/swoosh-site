/* eslint-disable react/prop-types */
const SectionWrapper = ({ children, className = "" }) => {
  return (
    <div
      className={`min-h-screen bg-black text-white container mx-auto ${className}`}
    >
      {children}
    </div>
  );
};

export default SectionWrapper;
