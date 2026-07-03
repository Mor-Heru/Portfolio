import {
    SiReact,
    SiTypescript,
    SiJavascript,
    SiTailwindcss,
    SiDocker,
    SiPython,
    SiCplusplus,
} from "react-icons/si";

import type { IconType } from "react-icons";

export const technologyIcons: Record<string, IconType> = {
    React: SiReact,
    TypeScript: SiTypescript,
    JavaScript: SiJavascript,
    Tailwind: SiTailwindcss,
    Docker: SiDocker,
    Python: SiPython,
    "C++": SiCplusplus,
};