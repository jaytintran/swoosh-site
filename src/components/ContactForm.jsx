import { useState } from "react";
import emailjs from "@emailjs/browser";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    budget: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .send(
        "service_5r6n8yk", // Replace with your EmailJS Service ID
        "template_qoa3hdj", // Replace with your EmailJS Template ID
        formData,
        "qyuU-UqOSE7i73Hjr" // Replace with your EmailJS Public Key
      )
      .then(
        () => {
          alert("Message sent successfully!");
          setFormData({ name: "", email: "", budget: "", message: "" });
        },
        (error) => {
          console.log(error.text);
          alert("Failed to send message, try again later.");
        }
      );
  };

  return (
    <div className="mt-10 md:mt-20 text-white pb-20 w-full">
      <h1 className="text-5xl uppercase font-bold text-left">
        Let’s Work <span className="text-gray-600">Together</span>
      </h1>

      <form onSubmit={handleSubmit} className="mt-6 max-w-2xl">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block mb-1 text-sm text-left text-gray-600">
              Name
            </label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Your Name"
              className="w-full bg-gray-800 text-white py-6 px-4 rounded-lg outline-none"
              required
            />
          </div>
          <div>
            <label className="block mb-1 text-sm text-left text-gray-600">
              Email
            </label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Your@email.com"
              className="w-full bg-gray-800 text-white py-6 px-4 rounded-lg outline-none"
              required
            />
          </div>
        </div>

        <div className="mt-4">
          <label className="block mb-1 text-sm text-left text-gray-600">
            Budget
          </label>
          <select
            name="budget"
            value={formData.budget}
            onChange={handleChange}
            className="w-full bg-gray-800 text-white py-6 px-4 rounded-lg outline-none"
          >
            <option>Select...</option>
            <option>$500 - $1000</option>
            <option>$1000 - $5000</option>
            <option>$5000 - $10000</option>
          </select>
        </div>

        <div className="mt-4">
          <label className="block mb-1 text-sm text-left text-gray-600">
            Message
          </label>
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="Message"
            rows="4"
            className="w-full bg-gray-800 text-white p-3 rounded-lg outline-none resize-none"
            required
          ></textarea>
        </div>

        <button
          type="submit"
          className="w-full bg-orange-500 text-white py-3 rounded-lg mt-6 font-semibold hover:bg-orange-600"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default ContactForm;
