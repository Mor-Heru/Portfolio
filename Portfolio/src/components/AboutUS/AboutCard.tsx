interface Props {
    name: string;
    text: string;
};

const AboutCard = ({name, text}:Props) => {
    return (
        <div className="text-white border border-purple-600 rounded-lg w-full h-[300px] shadow-md">
          <h2 className="rounded-t-md bg-purple-600 shadow-md px-6 py-5 sm:px-8 sm:py-8 flex font-bold text-4xl">{name}</h2>
          <p className="px-2">{text}</p>
        </div>
    );
};

export default AboutCard;