import MediaElement from "./MediaElement";
import linkedInIcon from "../../assets/LI-In-Bug.png";

const githubIcon = (
    <svg viewBox="0 0 24 24" aria-hidden="true" className="h-[120px] w-[120px] fill-current text-white">
        <path d="M12 2C6.477 2 2 6.484 2 12.021c0 4.428 2.865 8.184 6.839 9.504.5.092.682-.217.682-.482 0-.237-.009-.866-.013-1.7-2.782.605-3.369-1.342-3.369-1.342-.454-1.154-1.11-1.462-1.11-1.462-.908-.621.069-.608.069-.608 1.004.071 1.532 1.032 1.532 1.032.892 1.53 2.341 1.088 2.91.832.091-.647.35-1.088.636-1.338-2.221-.252-4.555-1.111-4.555-4.943 0-1.092.39-1.984 1.029-2.683-.103-.252-.446-1.272.098-2.65 0 0 .84-.268 2.75 1.025A9.58 9.58 0 0 1 12 6.844c.85.004 1.705.115 2.504.337 1.909-1.293 2.748-1.025 2.748-1.025.546 1.378.203 2.398.1 2.65.641.699 1.028 1.591 1.028 2.683 0 3.839-2.337 4.688-4.566 4.937.359.31.678.919.678 1.852 0 1.336-.012 2.415-.012 2.744 0 .268.18.579.688.481A10.02 10.02 0 0 0 22 12.021C22 6.484 17.523 2 12 2Z" />
    </svg>
);

const emailIcon = (
    <svg viewBox="0 0 24 24" aria-hidden="true" className="h-[120px] w-[120px] fill-current text-white">
        <path d="M3 6.75A2.75 2.75 0 0 1 5.75 4h12.5A2.75 2.75 0 0 1 21 6.75v10.5A2.75 2.75 0 0 1 18.25 20H5.75A2.75 2.75 0 0 1 3 17.25V6.75Zm2.2-.5 6.8 5.3 6.8-5.3H5.2Zm13.55 1.99-6.47 5.04a1 1 0 0 1-1.2 0L5.25 8.24v9.01c0 .41.34.75.75.75h12c.41 0 .75-.34.75-.75V8.24Z" />
    </svg>
);

const Media = () => {
    const medias = [
        { image: linkedInIcon, text: "LinkedIn", link: "https://www.linkedin.com/in/radoslaw-lichon", alt: "LinkedIn" },
        { image: githubIcon, text: "GitHub", link: "https://github.com/mor-heru", alt: "GitHub" },
        { image: emailIcon, text: "rado.lichon@gmail.com", link: "mailto:rado.lichon@gmail.com", alt: "Email" },
    ];

    return (
        <section id="media" className="p-10">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {medias.map((mediaElem, index) => (
                    <MediaElement key={index} {...mediaElem} />
                ))}
            </div>
        </section>
    );
};

export default Media;