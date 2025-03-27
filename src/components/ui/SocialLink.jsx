/* eslint-disable react/prop-types */
const SocialLink = ({ href, children }) => {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="cursor-pointer"
    >
      {children}
    </a>
  );
};

export default SocialLink;
