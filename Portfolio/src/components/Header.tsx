import NavBar from "./NavBar";

interface Props {
  onNavigate: (page: string) => void;
  activePage: string;
}

const Header = ({ onNavigate, activePage }: Props) => {
  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-gradient-to-r from-purple-700 via-purple-600 to-fuchsia-600 shadow-2xl">
      <div className="mx-auto flex h-24 w-full max-w-7xl items-center justify-between px-6 lg:px-8">
        <h1 className="select-none text-4xl font-black tracking-tight text-white transition-all duration-300 hover:scale-[1.03] hover:opacity-90 sm:text-5xl">
          Portfolio
        </h1>

        <NavBar
          onNavigate={onNavigate}
          activePage={activePage}
        />
      </div>
    </header>
  );
};

export default Header;