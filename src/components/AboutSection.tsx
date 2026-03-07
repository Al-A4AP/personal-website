import React from "react";

const AboutSection: React.FC = () => {
  return (
    <section id="about" className="section-container bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="section-title">About Me</h2>
          <div className="w-20 h-1 bg-primary mx-auto mt-4"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Image Column */}
          <div className="order-2 md:order-1">
            <div className="relative">
              <div className="w-full h-96 bg-linear-to-br from-primary to-purple-600 rounded-2xl shadow-2xl flex items-center justify-center overflow-hidden">
                <img
                  src="https://res.cloudinary.com/dr7xrzaqe/image/upload/v1772866416/Gemini_Generated_Image_kzwyirkzwyirkzwy_kfopbz.png"
                  alt="Profile Avatar"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-secondary rounded-2xl shadow-xl"></div>
              <div className="absolute -top-6 -left-6 w-24 h-24 bg-yellow-400 rounded-2xl shadow-xl"></div>
            </div>
          </div>

          {/* Content Column */}
          <div className="order-1 md:order-2">
            <h3 className="text-3xl font-bold text-gray-900 mb-6">
              From Banking to Building Digital Solutions
            </h3>

            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
              With over{" "}
              <strong className="text-primary">
                12 years in financial services
              </strong>
              , I've developed deep understanding of banking operations, credit
              management, and business development.
            </p>

            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
              At a startup franchise network, I managed operations across
              <strong className="text-primary"> 20+ outlets</strong> spanning
              Jakarta, Depok, Surabaya, and Malang.
            </p>
            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
              Now channeling this expertise into{" "}
              <strong className="text-accent">
                full-stack web development
              </strong>
              , combining business acumen with technical skills.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              {/* Banking & Finance - Hijau (Kartu Kredit) */}
              <div className="flex items-start">
                <div className="shrink-0 w-8 h-8 bg-green-500 rounded-lg flex items-center justify-center mr-4">
                  <svg
                    className="w-5 h-5 text-white"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M4 4h12a2 2 0 012 2v8a2 2 0 01-2 2H4a2 2 0 01-2-2V6a2 2 0 012-2zm0 2v2h12V6H4zm0 4v4h12v-4H4z" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-1">
                    Banking & Finance
                  </h4>
                </div>
              </div>

              {/* Fintech & Digital - Biru (Smartphone) */}
              <div className="flex items-start">
                <div className="shrink-0 w-8 h-8 bg-blue-500 rounded-lg flex items-center justify-center mr-4">
                  <svg
                    className="w-5 h-5 text-white"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M7 2a2 2 0 00-2 2v12a2 2 0 002 2h6a2 2 0 002-2V4a2 2 0 00-2-2H7zm3 14a1 1 0 100-2 1 1 0 000 2z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-1">
                    Fintech & Digital
                  </h4>
                </div>
              </div>

              {/* Operations & Leadership - Ungu (Users) */}
              <div className="flex items-start">
                <div className="shrink-0 w-8 h-8 bg-purple-500 rounded-lg flex items-center justify-center mr-4">
                  <svg
                    className="w-5 h-5 text-white"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9 6a3 3 0 11-6 0 3 3 0 016 0zM17 6a3 3 0 11-6 0 3 3 0 016 0zM12.93 17c.046-.327.07-.66.07-1a6.97 6.97 0 00-1.5-4.33A5 5 0 0119 16v1h-6.07zM6 11a5 5 0 015 5v1H1v-1a5 5 0 015-5z" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-1">
                    Operations & Leadership
                  </h4>
                </div>
              </div>

              {/* Web Development - Kuning (Code Bracket) */}
              <div className="flex items-start">
                <div className="shrink-0 w-8 h-8 bg-yellow-500 rounded-lg flex items-center justify-center mr-4">
                  <svg
                    className="w-5 h-5 text-white"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M6.28 5.22a.75.75 0 010 1.06L2.56 10l3.72 3.72a.75.75 0 01-1.06 1.06L.97 10.53a.75.75 0 010-1.06l4.25-4.25a.75.75 0 011.06 0zm7.44 0a.75.75 0 011.06 0l4.25 4.25a.75.75 0 010 1.06l-4.25 4.25a.75.75 0 01-1.06-1.06L17.44 10l-3.72-3.72a.75.75 0 010-1.06z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-1">
                    Web Development
                  </h4>
                </div>
              </div>
            </div>

            <div className="mt-8">
              <a
                href="https://res.cloudinary.com/demo/image/upload/fl_attachment/long_multi_page_pdf.pdf"
                download
                className="inline-block bg-primary hover:bg-indigo-700 text-white font-semibold py-3 px-8 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg"
              >
                Download Resume
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
