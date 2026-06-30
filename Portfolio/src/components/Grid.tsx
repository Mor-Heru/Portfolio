import GridElement from "./GridElement";
const Grid = () => {
  const projects = ["project", "project", "project","project", "project", "project","project", "project", "project","project", "project", "project"];
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-10">
        {projects.map((project)=>(
            <GridElement name={project} />
        ))}
    </div>
);
};

export default Grid;
