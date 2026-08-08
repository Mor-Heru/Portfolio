interface Props{
    name: string;
    date: string;
    img: string;
}
const GridElement = ({name,date,img}:Props) => {
  return (
    <div className="border border-purple-600 rounded-lg w-full h-[300px] text-white ">
        <div className="rounded-t-md bg-purple-600 shadow-md px-6 py-5 sm:px-8 sm:py-8 flex items-center">
        <h2 className="text-4xl font-bold sm:truncate sm:text-3xl sm:tracking-tight">{name}</h2>
        </div>
        <img className="w-full h-[174px]" src="{img}"></img>
        <p className="bg-purple-600 rounded-b-md">{date}</p>
    </div>
  )
}

export default GridElement