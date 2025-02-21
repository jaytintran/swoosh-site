/* eslint-disable react/prop-types */
const Card = ({ children, className }) => (
  <div
    className={`rounded-xl shadow-lg p-6 ${className} flex justify-center items-center`}
  >
    {children}
  </div>
);

export default Card;
