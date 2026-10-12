import type { ReactNode } from "react";

interface Props {
    image: string | ReactNode;
    text: string;
    link: string;
    alt: string;
}

const MediaElement = ({ image, text, link, alt }: Props) => {
    return (
        <a
            href={link}
            target={link.startsWith("http") ? "_blank" : undefined}
            rel={link.startsWith("http") ? "noopener noreferrer" : undefined}
            className="group block overflow-hidden rounded-lg border border-purple-600 text-white transition-transform hover:scale-105"
        >
            <div className="bg-purple-600 px-6 py-5 text-2xl font-bold sm:px-8 sm:py-8">
                {text}
            </div>

            <div className="bg-slate-900/60 p-4">
                {typeof image === "string" ? (
                    <img
                        src={image}
                        alt={alt}
                        className="mx-auto h-[180px] w-full object-contain"
                    />
                ) : (
                    <div className="flex h-[180px] items-center justify-center">{image}</div>
                )}
            </div>
        </a>
    );
};

export default MediaElement;