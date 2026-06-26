import MediaElement from "./MediaElement";


const Media = () => {
    const medias = [
        { image: "./src/assets/LI-In-Bug.png", text: "LinkedIn", link: "https://linkedin.com", alt: "LinkedIn" },
        { image: "./src/assets/LI-In-Bug.png", text: "LinkedIn", link: "https://linkedin.com", alt: "LinkedIn" },
    ];


    return (
        <section id="contact" className="flex px-10">
            {medias.map((mediaElem, index) => (
                <MediaElement key={index} {...mediaElem}/>
            ))}

        </section>
    );
};

export default Media;