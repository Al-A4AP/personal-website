import SectionTitle from "../ui/SectionTitle";

const About = () => {
  return (
    <section id="about" className="py-20 px-6">
      <div className="max-w-4xl mx-auto">
        <SectionTitle title="About Me" subtitle="Get to know me" />

        <p className="mt-8 text-gray-600 dark:text-gray-300 leading-relaxed text-lg text-justify">
          <span className="text-indigo-600 font-semibold dark:text-indigo-400">
            Banking, finance, and SME development
          </span>{" "}
          professional with over 13 years of experience in the financial
          services industry. Possesses strong expertise in banking operations,
          credit management, commercial business development, and team
          leadership. Experienced in managing end-to-end business processes,
          maintaining credit portfolio quality, and driving sustainable business
          growth. Demonstrates a progressive career path from administrative
          roles to managerial positions, with a consistent track record of
          performance and results-oriented leadership.
          <div>
            Complemented by hands-on capabilities in{" "}
            <span className="text-indigo-600 font-semibold dark:text-indigo-400">
              Full Stack Web Development
            </span>
            , leveraging technology to enhance operational efficiency,
            streamline business processes, and support data-driven
            decision-making through scalable digital solutions.
          </div>
        </p>
      </div>
    </section>
  );
};

export default About;
