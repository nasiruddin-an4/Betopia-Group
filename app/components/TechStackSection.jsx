import React from "react";

const techStack = [
  {
    name: "C++",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg",
    description: "High-performance systems programming.",
  },
  {
    name: "Python",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
    description: "Artificial intelligence and data science.",
  },
  {
    name: "JavaScript",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
    description: "Interactive and dynamic web experiences.",
  },
  {
    name: "Go",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/go/go-original.svg",
    description: "Scalable cloud services and microservices.",
  },
  {
    name: "Swift",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/swift/swift-original.svg",
    description: "Native iOS and Apple ecosystem apps.",
  },
  {
    name: "Kotlin",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kotlin/kotlin-original.svg",
    description: "Modern Android development.",
  },
  {
    name: "PHP",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg",
    description: "Robust server-side scripting.",
  },
  {
    name: "Ruby",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/ruby/ruby-original.svg",
    description: "Elegant and productive web development.",
  },
  {
    name: "Rust",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/rust/rust-original.svg",
    description: "Memory-safe and fast systems.",
  },
  {
    name: "React",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
    description: "Building user interfaces conformably.",
  },
  {
    name: "Flutter",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flutter/flutter-original.svg",
    description: "Multi-platform native interfaces.",
  },
  {
    name: "Java",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg",
    description: "Enterprise-grade backend solutions.",
  },
];

const techStack2 = [
  {
    name: "Tailwind",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg",
    description: "Utility-first CSS framework.",
  },
  {
    name: "Angular",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/angularjs/angularjs-original.svg",
    description: "Platform for building mobile and desktop web apps.",
  },
  {
    name: "Express",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg",
    description: "Fast, unopinionated web framework for Node.js.",
  },
  {
    name: "Redis",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redis/redis-original.svg",
    description: "In-memory data structure store.",
  },
  {
    name: "MySQL",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg",
    className: "w-10",
    description: "Open-source relational database.",
  },
  {
    name: "Docker",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg",
    description: "Develop, ship, and run applications anywhere.",
  },
  {
    name: "PostgreSQL",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg",
    description: "Powerful, open source object-relational database.",
  },
  {
    name: "MongoDB",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg",
    description: "NoSQL database for modern applications.",
  },
  {
    name: "GraphQL",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/graphql/graphql-plain.svg",
    description: "Query language for APIs.",
  },
  {
    name: "Next.js",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg",
    description: "The React Framework for the Web.",
  },
  {
    name: "Node.js",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
    description: "JavaScript runtime built on Chrome's V8 engine.",
  },
  {
    name: "TypeScript",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
    description: "Typed superset of JavaScript.",
  },
];

const TechStackSection = () => {
  return (
    <section className="bg-white py-24 overflow-hidden min-h-screen flex flex-col justify-center">
      <div className="container mx-auto px-4 mb-16 text-center">
        <h2 className="text-[1.5rem] md:text-[2.5rem] font-bold text-black mb-6">
          The Tools of Transformation
        </h2>
        <p className="text-gray-600 text-lg md:text-xl max-w-3xl mx-auto">
          We combine best-in-class frameworks with emerging technologies to turn
          ambitious ideas into robust reality. Whatever the challenge, we have
          the stack to solve it.
        </p>
      </div>

      <div className="flex flex-col gap-8">
        {/* Row 1: Left to Right */}
        <div className="relative w-full overflow-hidden">
          <div className="absolute top-0 left-0 h-full w-24 md:w-48 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none"></div>
          <div className="absolute top-0 right-0 h-full w-24 md:w-48 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none"></div>
          <div className="flex w-max animate-[marquee-reverse_60s_linear_infinite] hover:[animation-play-state:paused] py-4">
            {[...techStack, ...techStack].map((tech, index) => (
              <div
                key={`${tech.name}-${index}-1`}
                className="mx-4 w-[280px] h-[180px] flex-shrink-0 group"
              >
                <div className="w-full h-full bg-white border border-gray-100 rounded-xl p-6 shadow-sm hover:shadow-lg hover:border-gray-200 transition-all duration-300 flex flex-col items-start text-left justify-center cursor-default">
                  {/* Logo / Icon */}
                  <div className="mb-4 p-3 bg-gray-50 rounded-full group-hover:scale-110 transition-transform duration-300">
                    <img
                      src={tech.icon}
                      alt={tech.name}
                      className={`w-12 h-12 object-contain ${
                        tech.className || ""
                      }`}
                    />
                  </div>
                  {/* Title */}
                  <h3 className="text-lg font-bold text-gray-900 mb-2">
                    {tech.name}
                  </h3>
                  {/* Description */}
                  <p className="text-sm text-gray-500 leading-relaxed">
                    {tech.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Row 2: Right to Left */}
        <div className="relative w-full overflow-hidden">
          <div className="absolute top-0 left-0 h-full w-24 md:w-48 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none"></div>
          <div className="absolute top-0 right-0 h-full w-24 md:w-48 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none"></div>
          <div className="flex w-max animate-[marquee_60s_linear_infinite] hover:[animation-play-state:paused] py-4">
            {[...techStack2, ...techStack2].map((tech, index) => (
              <div
                key={`${tech.name}-${index}-2`}
                className="mx-4 w-[280px] h-[180px] flex-shrink-0 group"
              >
                <div className="w-full h-full bg-white border border-gray-100 rounded-xl p-6 shadow-sm hover:shadow-lg hover:border-gray-200 transition-all duration-300 flex flex-col items-start text-left justify-center cursor-default">
                  {/* Logo / Icon */}
                  <div className="mb-4 p-3 bg-gray-50 rounded-full group-hover:scale-110 transition-transform duration-300">
                    <img
                      src={tech.icon}
                      alt={tech.name}
                      className={`w-8 h-8 object-contain ${
                        tech.className || ""
                      }`}
                    />
                  </div>
                  {/* Title */}
                  <h3 className="text-lg font-bold text-gray-900 mb-2">
                    {tech.name}
                  </h3>
                  {/* Description */}
                  <p className="text-sm text-gray-500 leading-relaxed">
                    {tech.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TechStackSection;
