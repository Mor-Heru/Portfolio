import AboutCard from "./AboutCard";


const About = () => {
    const informations = [
        { name: "Alan", text: "Test" },
        { name: "Radosław", text: "Test" },
    ];

    return (
        <section id="about" className="flex gap-4 p-10">
            {informations.map((infoElem, index) => (
                <AboutCard key = {index} {...infoElem} />
            ))}
        </section>
    );
};

export default About;