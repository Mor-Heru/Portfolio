import GridElement from "./GridElement";

const Grid = () => {
    const projects = [
        {
            name: "My First Project",
            date: "2026",
            img: "/images/project1.png",
            url: "https://github.com/TWOJ_LOGIN/my-first-project",
        },
        {
            name: "My Second Project",
            date: "2026",
            img: "/images/project2.png",
            url: "https://github.com/TWOJ_LOGIN/my-second-project",
        },
    ];

    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-10">
            {projects.map((project) => (
                <GridElement
                    key={project.name}
                    name={project.name}
                    date={project.date}
                    img={project.img}
                    url={project.url}
                />
            ))}
        </div>
    );
};

export default Grid;