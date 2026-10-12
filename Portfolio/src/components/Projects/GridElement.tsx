interface Props {
    name: string;
    img: string;
    url: string;
}

const GridElement = ({ name, img, url }: Props) => {
    return (
        <a
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            className="block border border-purple-600 rounded-lg w-full h-[300px] text-white overflow-hidden hover:scale-105 transition-transform"
        >
            <div className="bg-purple-600 shadow-md px-6 py-5 sm:px-8 sm:py-8">
                <h2 className="text-3xl font-bold truncate">
                    {name}
                </h2>
            </div>

            <img
                className="w-full h-[220px] object-cover"
                src={img}
                alt={name}
            />
        </a>
    );
};

export default GridElement;