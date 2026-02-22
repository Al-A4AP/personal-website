import Button from "../ui/Button";
import heroImage from "../../assets/image.png";
import DownArrow from "../../assets/down.svg";

const Hero = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex flex-col items-center justify-center px-6 relative"
    >
      <div className="max-w-6xl grid md:grid-cols-2 gap-8 items-center">
        <div className="flex justify-center">
          <img
            src={heroImage}
            alt="Hero"
            className="w-64 h-64 md:w-80 md:h-80 object-cover rounded-2xl shadow-lg"
          />
        </div>

        <div className="space-y-6 text-center md:text-left">
          <h1 className="text-4xl md:text-6xl font-bold leading-tight text-center">
            Hi, I'm{" "}
            <span className="text-red-400 font-bold drop-shadow-[0_0_8px_rgba(248,113,113,0.8)]">
              Áli
            </span>
          </h1>

          <ul className="text-gray-600 dark:text-gray-300 text-lg list-none text-center space-y-0">
            <li>Banking & Finance Professional</li>
            <li>MSMEs Development Specialist</li>
            <li>Full Stack Web Developer</li>
          </ul>

          <div className="flex justify-center md:justify-center gap-4 flex-wrap">
            <Button
              href="#portfolio"
              variant="ghost"
              className=" hover:text-indigo-300 transition duration-300"
            >
              View Projects
            </Button>

            <Button
              variant="maroon-glow"
              href="#contact"
              className=" hover:text-indigo-300 transition duration-300"
            >
              Contact Me
            </Button>
          </div>
        </div>
      </div>

      {/* Untuk Panah bawah */}
      <div className="absolute bottom-6">
        <a
          href="#about"
          className="text-gray-600 dark:text-gray-300 hover:text-red-400 transition"
        >
          <img
            src={DownArrow}
            alt="Scroll down"
            className="h-8 w-8 animate-bounce transition-all duration-300"
          />
        </a>
      </div>
    </section>
  );
};

export default Hero;
