interface Props{
    name: string;
}
const GridElement = ({name}:Props) => {
  return (
    <div className="border border-purple-600 rounded-lg w-full h-[300px] text-white">
        <div className="rounded-t-md bg-purple-600 shadow-md px-6 py-5 sm:px-8 sm:py-8 flex items-center">
        <h2 className="text-4xl font-bold sm:truncate sm:text-3xl sm:tracking-tight">{name}</h2>
        </div>
    </div>
  )
}

export default GridElement