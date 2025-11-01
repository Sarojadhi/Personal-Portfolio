import { useRef } from "react";

const Contact = () => {
  const form = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Thank you, ${form.current.name.value}! Your message has been received.`);
    form.current.reset();
  };

  return (
    <section className="bg-gray-900 text-white py-16 px-6 md:px-16">
      <div className="max-w-3xl mx-auto text-center mb-8">
        <h2 className="text-3xl font-bold mb-2">Contact Me</h2>
        <p className="text-gray-300 text-lg">
          “Have a project or collaboration in mind? 
          I’m always open to new opportunities and conversations.
           Send me a message, and I’ll respond as soon as possible.”
        </p>

      </div>

      <form
        ref={form}
        onSubmit={handleSubmit}
        className="max-w-3xl mx-auto bg-gray-800 p-8 rounded-lg shadow-lg space-y-4"
      >
        <div>
          <label className="block mb-1">Name</label>
          <input
            type="text"
            name="name"
            required
            className="w-full p-3 rounded bg-gray-700 border border-gray-600 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Your Name"
          />
        </div>

        <div>
          <label className="block mb-1">Email</label>
          <input
            type="email"
            name="email"
            required
            className="w-full p-3 rounded bg-gray-700 border border-gray-600 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Your Email"
          />
        </div>

        <div>
          <label className="block mb-1">Message</label>
          <textarea
            name="message"
            rows="5"
            required
            className="w-full p-3 rounded bg-gray-700 border border-gray-600 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Write your message..."
          />
        </div>

        <button
          type="submit"
          className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 rounded transition"
        >
          Send Message
        </button>
      </form>
    </section>
  );
};

export default Contact;
