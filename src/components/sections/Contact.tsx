import SectionTitle from "../ui/SectionTitle";
import Button from "../ui/Button";

const Contact = () => {
  return (
    <section id="contact" className="py-20 px-6 bg-gray-50 dark:bg-black">
      <div className="max-w-3xl mx-auto">
        <SectionTitle title="Contact" subtitle="Let’s Work Together" />

        <form className="mt-12 space-y-6">
          <input
            type="text"
            placeholder="Your Name"
            className="w-full p-4 rounded-xl border dark:bg-gray-800"
          />

          <input
            type="email"
            placeholder="Your Email"
            className="w-full p-4 rounded-xl border dark:bg-gray-800"
          />

          <textarea
            placeholder="Your Message"
            rows={5}
            className="w-full p-4 rounded-xl border dark:bg-gray-800"
          />

          <Button
            type="submit"
            className="w-full hover:text-indigo-300 transition duration-300"
          >
            Send Message
          </Button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
