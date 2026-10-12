import { technologyIcons } from "../../data/technologyIcons";
import { motion, easeOut, type Variants } from "framer-motion";

interface Props {
  name: string;
  githubUrl: string;
  role: string;
  description: string;
  technologies: string[];
  skillGroups?: string[];
}

const cardVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 40,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: easeOut,
    },
  },
};

const glowVariants: Variants = {
  rest: {
    opacity: 0.2,
    scale: 1,
  },
  hover: {
    opacity: 0.35,
    scale: 1.2,
    transition: {
      duration: 0.3,
      ease: easeOut,
    },
  },
};

const AboutCard = ({
  name,
  githubUrl,
  role,
  description,
  technologies,
  skillGroups = [],
}: Props) => {
  const handleOpenProfile = () => {
    window.open(githubUrl, "_blank", "noopener,noreferrer");
  };

  return (
    <motion.article
    variants={cardVariants}
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true }}

    whileHover={{
        y: -8,
        scale: 1.02,
    }}

    whileTap={{
        scale: 0.97,
        y: -3,
    }}

    transition={{
        type: "spring",
        stiffness: 260,
        damping: 20,
    }}
      className="group relative flex-1 cursor-pointer"
      onClick={handleOpenProfile}
      onKeyDown={(event) => {
        if (event.key === "Enter" || event.key === " ") {
          event.preventDefault();
          handleOpenProfile();
        }
      }}
      role="button"
      tabIndex={0}
      aria-label={`Open ${name} GitHub profile`}
    >
      {/* Glow */}
      <motion.div
        variants={glowVariants}
        className="
          pointer-events-none
          absolute
          inset-0
          -z-10
          flex
          items-center
          justify-center
        "
      >
        <div
          className="
            h-72
            w-72
            rounded-full
            bg-purple-500/70
            blur-3xl
          "
        />
      </motion.div>

      {/* Card */}
      <motion.div
        variants={{
          rest: {
            y: 0,
            scale: 1,
          },
          hover: {
            y: -8,
            scale: 1.02,
            transition: {
              type: "spring",
              stiffness: 220,
              damping: 20,
            },
          },
        }}
        className="
          overflow-hidden
          rounded-2xl
          border border-purple-500/20
          bg-slate-900/85
          backdrop-blur-xl
          transition-colors
          duration-300
          group-hover:border-purple-400/50
          group-hover:shadow-[0_20px_60px_rgba(168,85,247,0.25)]
        "
      >
        {/* Header */}
        <div className="bg-gradient-to-r from-purple-700 via-purple-600 to-fuchsia-600 px-8 py-8">
          <div className="flex items-center gap-5">
            <div
              className="
                flex
                h-16
                w-16
                items-center
                justify-center
                rounded-full
                border border-white/20
                bg-white/10
                text-3xl
                font-bold
                text-white
              "
            >
              {name[0]}
            </div>

            <div>
              <h2 className="text-3xl font-black text-white">
                {name}
              </h2>

              <p className="mt-1 text-sm font-medium text-purple-100">
                {role}
              </p>
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="flex h-full flex-col p-8">
          <p className="leading-7 text-slate-300">
            {description}
          </p>

          <div className="mt-8">
            <h3 className="mb-3 text-sm font-semibold uppercase tracking-wider text-slate-400">
              Technologies
            </h3>

            <div className="flex flex-wrap gap-2">
              {technologies.map((technology) => {
                const Icon = technologyIcons[technology];

                return (
                  <span
                    key={technology}
                    className="
                      flex
                      items-center
                      gap-2
                      rounded-full
                      border border-purple-500/20
                      bg-purple-500/10
                      px-3
                      py-2
                      text-sm
                      font-medium
                      text-purple-200
                      transition-all
                      duration-300
                      group-hover:border-purple-400/40
                      group-hover:bg-purple-500/20
                    "
                  >
                    {Icon && <Icon className="text-base" />}
                    {technology}
                  </span>
                );
              })}
            </div>

            {skillGroups.length > 0 && (
              <div className="mt-6">
                <h3 className="mb-3 text-sm font-semibold uppercase tracking-wider text-slate-400">
                  Technical skills
                </h3>

                <ul className="space-y-2 text-sm leading-6 text-slate-300">
                  {skillGroups.map((skill) => (
                    <li key={skill} className="flex gap-2">
                      <span className="mt-[0.45rem] h-1.5 w-1.5 rounded-full bg-purple-400" />
                      <span>{skill}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </div>
      </motion.div>
    </motion.article>
  );
};

export default AboutCard;