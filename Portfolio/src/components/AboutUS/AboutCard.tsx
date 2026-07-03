import { technologyIcons } from "../../data/technologyIcons";
import { motion, easeOut, type Variants } from "framer-motion";

interface Props {
  name: string;
  role: string;
  description: string;
  technologies: string[];
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


const AboutCard = ({
    name,
    role,
    description,
    technologies,
}: Props) => {
    return (
        <div className="relative flex-1 group">

            {/* Glow */}
            <div className="
                pointer-events-none
                absolute
                left-1/2 top-1/2
                h-72 w-72
                -trasnslate-x-1/2 -translate-y-1/2
                rounded-full
                bg-purple-500
                opacity-20
                blur-3xl
                transition-opacity duration-500
                group-hover:opacity-30
              "
            />

            {/* Card */}
            <motion.article
                variants={cardVariants}
                className="
                    group
                    flex-1
                    overflow-hidden
                    rounded-2xl
                    border border-purple-500/20
                    bg-slate-900/80
                    hover:border-purple-400
                    hover:shadow-2xl
                    hover:shadow-purple-600/20
                "
                whileHover={{
                    y: -8,
                    scale: 1.02,
                }}
                transition={{
                    duration: 0.25,
                    type: "spring",
                    stiffness: 200,
                    damping: 20,
                }}
                whileTap={{ scale: 0.98 }}
            >
                <div className="bg-gradient-to-r from-purple-700 via-purple-600 to-fuchsia-600 px-8 py-8">
                    <div className="flex items-center gap-5">
                        <div
                            className="
                                flex h-16 w-16 items-center justify-center
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
                                            flex items-center gap-2
                                            rounded-full
                                            border border-purple-500/20
                                            bg-purple-500/10
                                            px-3 py-2
                                            text-sm font-medium text-purple-200
                                            transition-all duration-300
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
                    </div>
                </div>
            </motion.article>
        </div>
    );
};

export default AboutCard;