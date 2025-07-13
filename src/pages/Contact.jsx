export default function Contact() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-8 bg-custom-gray text-pink-500">
      <h2 className="text-3xl font-bold mb-6">Contact Me</h2>
      <form
        action="https://formspree.io/f/myzjrlzg"
        method="POST"
        className="flex flex-col space-y-4 w-full max-w-md"
      >
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          className="p-2 border border-black rounded"
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Your Email"
          className="p-2 border border-black rounded"
          required
        />
        <textarea
          name="message"
          placeholder="Your Message"
          className="p-2 border border-pink-black rounded h-32"
          required
        />
        <button
          type="submit"
          className="bg-navy-blue text-white py-2 px-4 rounded hover:bg-blue-dark transition"
        >
          Send Message
        </button>
      </form>
    </div>
  );
}
