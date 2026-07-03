import { motion } from "framer-motion";
import AboutCard from "./AboutCard";

const containerVariants = {
    hidden: {},
    visible: {
        transition: {
            staggerChildren: 0.15,
            delayChildren: 0.1
        },
    },
};

const About = () => {
  const informations = [
    {
      name: "Alan",
      role: "Front-end Developer • Game Developer",
      description:
        "I'm passionate about creating modern web applications and games. I enjoy building responsive interfaces, solving complex problems and continuously improving my skills.",
      technologies: [
        "React",
        "TypeScript",
        "JavaScript",
        "Tailwind",
        "Docker",
        "C++",
      ],
    },
    {
      name: "Radosław",
      role: "AI/ML Developer • Front-end Developer",
      description:
        "", // Napisz tu coś o sobie
      technologies: [
        "Python",
        "React",
        "TypeScript",
        "JavaScript",
        "Docker",
        "Tailwind",
      ],
    },
  ];

  return (
    <motion.section
      id="about"
      className="mx-auto flex max-w-7xl flex-col gap-8 px-6 py-16 md:flex-row"
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
    >
      {informations.map((info) => (
        <AboutCard key={info.name} {...info} />
      ))}
    </motion.section>
  );
};

export default About;