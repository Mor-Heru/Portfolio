import MediaElement from "./MediaElement";
import linkedInIcon from "../../assets/LI-In-Bug.png";

const Media = () => {
    const medias = [
        { image: linkedInIcon, text: "LinkedIn", link: "https://linkedin.com", alt: "LinkedIn" },
        { image: linkedInIcon, text: "GitHub", link: "https://github.com/mor-heru", alt: "GitHub" },
    ];

    return (
        <section id="media" className="flex px-10">
            {medias.map((mediaElem, index) => (
                <MediaElement key={index} {...mediaElem} />
            ))}
        </section>
    );
};

export default Media;