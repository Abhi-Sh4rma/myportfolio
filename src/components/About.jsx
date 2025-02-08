import React from "react";

export function About() {
  return (
    <section id="about" className="pt-32 pb-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center gap-12">
          <div className="md:w-1/3">
            <div className="relative">
              <div className="absolute -inset-1 rounded-full bg-gradient-to-r from-purple-600 to-pink-600 opacity-75 blur"></div>
              <div className="relative">
                <img
                  src="https://res.cloudinary.com/ddpmtl6kw/image/upload/v1739004915/Abhi_q2t9rl.png"
                  alt="Abhishek Sharma"
                  className="rounded-full w-64 h-64 object-cover shadow-2xl mx-auto border-4 border-white"
                />
              </div>
            </div>
          </div>
          <div className="md:w-2/3">
            <div className="space-y-6">
              <div>
                <h2 className="text-5xl font-bold text-gray-900 mb-2 bg-gradient-to-r from-purple-600 to-pink-600 inline-block text-transparent bg-clip-text">
                  About Me
                </h2>
                <div className="h-1 w-20 bg-gradient-to-r from-purple-600 to-pink-600 rounded"></div>
              </div>
              <p className="text-gray-700 text-lg leading-relaxed">
                I am Abhishek Sharma, a dedicated Data Science student with a strong passion for artificial intelligence, machine learning, and data-driven insights. My goal is to leverage data science techniques to build innovative solutions that solve real-world problems efficiently.
              </p>
              <p className="text-gray-700 text-lg leading-relaxed">
                With expertise in Python, machine learning frameworks, and data visualization, I specialize in creating intelligent systems that enhance decision-making. I am always eager to explore new advancements in AI/ML and work on meaningful projects that contribute to technological progress.
              </p>
              <div className="flex gap-4 pt-4">
                <button
                  className="px-8 py-3 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-lg hover:opacity-90 transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
                  onClick={() => {
                    window.open(
                      "https://drive.google.com/file/d/168Wh2vMKCa2M906Q87HWDZOTz028TnAk/view?usp=sharing",
                      "_blank"
                    );
                  }}
                >
                  Download CV
                </button>

                <button
                  className="px-8 py-3 border-2 border-purple-600 text-purple-600 rounded-lg hover:bg-purple-50 transition-all duration-200"
                  onClick={() =>
                    window.open("https://github.com/Abhi-sh4rma", "_blank")
                  }
                >
                  View Projects
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
