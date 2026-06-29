import NavBar from "./NavBar";

interface Props {
  onNavigate: (page: string) => void;
  activePage: string;
}

const Header = ({onNavigate, activePage}:Props) => {
  return (
    <header className="bg-purple-600 text-white shadow-md px-6 py-5 sm:px-8 sm:py-8 flex items-center">
      <h1 className="text-4xl font-bold sm:truncate sm:text-5xl sm:tracking-tight">
        Portfolio
      </h1>
      <div className="ml-auto">
        <NavBar onNavigate={onNavigate} activePage={activePage} />
      </div>
    </header>
  );
};

export default Header;
