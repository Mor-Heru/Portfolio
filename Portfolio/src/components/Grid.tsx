import GridElement from "./GridElement";
const Grid = () => {
  const projects = ["project", "project", "project","project", "project", "project","project", "project", "project","project", "project", "project"];
  return (
    <div className="grid grid-cols-4 gap-4 p-10">
        {projects.map((project)=>(
            <GridElement name={project} />
        ))}
    </div>
);
};

export default Grid;
