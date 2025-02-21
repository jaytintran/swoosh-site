const ContactForm = () => {
  return (
    <div className="mt-10 md:mt-20 text-white pb-20 w-full">
      <h1 className="text-5xl uppercase font-bold text-left">
        Let’s Work <span className="text-gray-600">Together</span>
      </h1>

      <form className="mt-6 max-w-2xl">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block mb-1 text-sm text-left text-gray-600">
              Name
            </label>
            <input
              type="text"
              placeholder="Your Name"
              className="w-full bg-gray-800 text-white p-3 rounded-lg outline-none"
            />
          </div>
          <div>
            <label className="block mb-1 text-sm text-left text-gray-600">
              Email
            </label>
            <input
              type="email"
              placeholder="Your@email.com"
              className="w-full bg-gray-800 text-white p-3 rounded-lg outline-none"
            />
          </div>
        </div>

        <div className="mt-4">
          <label className="block mb-1 text-sm text-left text-gray-600">
            Budget
          </label>
          <select className="w-full bg-gray-800 text-white p-3 rounded-lg outline-none">
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
            placeholder="Message"
            rows="4"
            className="w-full bg-gray-800 text-white p-3 rounded-lg outline-none resize-none"
          ></textarea>
        </div>

        <button className="w-full bg-orange-500 text-white py-3 rounded-lg mt-6 font-semibold hover:bg-orange-600">
          Submit
        </button>
      </form>
    </div>
  );
};

export default ContactForm;
