interface Props {
    image: string;
    text: string;
    link: string;
    alt: string;
};

const MediaElement = ({image, text, link, alt}:Props) => {
    return (
        <div>
            <a href={link} className="group flex overflow-hidden items-center border border-purple-600 rounded-lg px-3 py-1">
                <img src={image} alt={alt} className="text-white w-20"/>
                <div className="w-0 group-hover:w-32 transition-all text-white overflow-hidden">{text}</div>
            </a>
        </div>
    );
};

export default MediaElement;