import GridElement from "./GridElement";
const Grid = () => {
  const projects = [["project","date","img"]];
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-10">
        {projects.map((project)=>(
            <GridElement name={project[0]} date={project[1]} img={project[2]}/>
        ))}
    </div>
);
};

export default Grid;
