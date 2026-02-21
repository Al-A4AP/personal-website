import Navbar from "./components/layout/Navbar.tsx";
import Footer from "./components/layout/Footer.tsx";

import Hero from "./components/sections/Hero.tsx";
import About from "./components/sections/About.tsx";
import Skills from "./components/sections/Skills.tsx";
import Portfolio from "./components/sections/Portfolio.tsx";
import Experience from "./components/sections/Experience.tsx";
import Testimonials from "./components/sections/Testimonial.tsx";
import Contact from "./components/sections/Contact.tsx";

function App() {
  return (
    <div className="bg-white dark:bg-black text-gray-900 dark:text-white transition-colors duration-300">
      <Navbar />

      <main className="overflow-x-hidden">
        <Hero />
        <About />
        <Skills />
        <Portfolio />
        <Experience />
        <Testimonials />
        <Contact />
      </main>

      <Footer />
    </div>
  );
}

export default App;
