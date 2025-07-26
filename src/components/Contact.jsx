import { FaEnvelope, FaPhone, FaMapMarkerAlt } from 'react-icons/fa';

export default function Contact() {
  return (
    <section id="contact" className="py-20 px-6 animate-fadeIn bg-secondary bg-opacity-10">
      <div className="container mx-auto grid md:grid-cols-2 gap-12">
        {/* Contact Form */}
        <div>
          <h2 className="text-4xl font-bold mb-4">Let's Connect</h2>
          <p className="text-lg mb-8">
            I'm always open to discussing new projects, creative ideas, or opportunities to be part of your visions.
            Whether you're looking to collaborate or just want to say hello, feel free to reach out!
          </p>
          <form className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium mb-1">Name</label>
              <input
                id="name"
                type="text"
                required
                className="w-full px-4 py-2 rounded-lg bg-primary bg-opacity-20 border border-secondary focus:outline-none focus:ring-2 focus:ring-accent"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium mb-1">Email</label>
              <input
                id="email"
                type="email"
                required
                className="w-full px-4 py-2 rounded-lg bg-primary bg-opacity-20 border border-secondary focus:outline-none focus:ring-2 focus:ring-accent"
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium mb-1">Message</label>
              <textarea
                id="message"
                rows="6"
                required
                className="w-full px-4 py-2 rounded-lg bg-primary bg-opacity-20 border border-secondary focus:outline-none focus:ring-2 focus:ring-accent"
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full py-3 bg-accent text-primary rounded-lg font-semibold hover:bg-opacity-90 transition"
            >
              Send Message
            </button>
          </form>
        </div>

        {/* Contact Details */}
        <div className="space-y-6">
          <h2 className="text-4xl font-bold mb-4">Contact Info</h2>
          <div className="flex items-center text-lg">
            <FaEnvelope className="text-accent mr-3" />
            <span>choladevi.gheereddy@gmail.com</span>
          </div>
          <div className="flex items-center text-lg">
            <FaPhone className="text-accent mr-3" />
            <span>(312)-217-6897</span>
          </div>
          <div className="flex items-center text-lg">
            <FaMapMarkerAlt className="text-accent mr-3" />
            <span>Chicago, IL</span>
          </div>
        </div>
      </div>
    </section>
  );
}
