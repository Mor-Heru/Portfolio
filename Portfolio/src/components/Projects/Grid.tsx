import { useEffect, useState } from "react";

import GridElement from "./GridElement";

type GitHubRepo = {
    name: string;
    html_url: string;
    updated_at: string;
    description: string | null;
};

const Grid = () => {
    const [projects, setProjects] = useState<GitHubRepo[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchProjects = async () => {
            try {
                const response = await fetch("https://api.github.com/users/mor-heru/repos?per_page=100");

                if (!response.ok) {
                    throw new Error("GitHub API request failed");
                }

                const data: GitHubRepo[] = await response.json();

                const filteredProjects = data
                    .filter((repo) => !repo.name.startsWith(".") && repo.name !== "mor-heru")
                    .sort((a, b) => new Date(b.updated_at).getTime() - new Date(a.updated_at).getTime())
                    .slice(0, 8);

                setProjects(filteredProjects);
            } catch (error) {
                console.error("Unable to load GitHub repos:", error);
                setProjects([]);
            } finally {
                setLoading(false);
            }
        };

        void fetchProjects();
    }, []);

    if (loading) {
        return <div className="p-10 text-white">Ładowanie projektów...</div>;
    }

    if (projects.length === 0) {
        return <div className="p-10 text-white">Brak projektów do wyświetlenia.</div>;
    }

    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-10">
            {projects.map((project) => (
                <GridElement
                    key={project.name}
                    name={project.name}
                    date={new Date(project.updated_at).getFullYear().toString()}
                    img="https://github.com/mor-heru.png"
                    url={project.html_url}
                />
            ))}
        </div>
    );
};

export default Grid;