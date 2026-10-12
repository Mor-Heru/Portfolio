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
      githubUrl: "https://github.com/Nexiuuu",
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
      githubUrl: "https://github.com/mor-heru",
      role: "Junior IT Specialist • Web Developer • System & Network Administration",
      description:
        "I'm passionate about web development, programming and IT infrastructure. I enjoy creating websites, exploring new technologies, configuring systems and networks, and solving technical problems. I'm continuously improving my skills in software development, system administration and modern web technologies.",
      technologies: [
        "Python",
        "React",
        "TypeScript",
        "JavaScript",
        "Docker",
        "Tailwind",
      ],
      skillGroups: [
        ["C++", "C#", "Python", "JavaScript", "PHP", "Java"],
        ["HTML", "CSS", "React", "WordPress", "Apache", "IIS"],
        ["SQL", "MySQL", "PostgreSQL"],
        ["Windows", "Linux", "DNS", "DHCP", "FTP", "SSH", "Samba"],
        ["Git", "VS Code", "Docker", "Hyper-V", "VirtualBox"],
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