import SectionTitle from "../ui/SectionTitle";

const Testimonials = () => {
  return (
    <section id="testimonials" className="py-20 px-6">
      <div className="max-w-4xl mx-auto">
        <SectionTitle title="Testimonials" subtitle="What Clients Say" />

        <div className="mt-12 bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-sm text-center">
          <p className="italic text-gray-600 dark:text-gray-300">
            “Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec quis
            magna eu ipsum aliquam euismod. Duis ante mi, vulputate sit amet
            massa nec, molestie feugiat lorem. Sed vel blandit sem. Duis egestas
            dapibus convallis. Donec ut congue metus. Morbi odio dui, hendrerit
            id finibus nec, pulvinar id odio. Sed interdum eleifend massa.”
          </p>

          <h4 className="mt-6 font-semibold">— Client Name</h4>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
