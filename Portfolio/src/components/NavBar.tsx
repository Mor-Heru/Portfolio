import { useState } from "react";

interface Props {
  onNavigate: (page: string) => void;
  activePage: string;
}

const NavBar = ({onNavigate, activePage}:Props) => {
  const items = [
    { label: "About US" , page: "about us"}, 
    { label: "Projects", page: "projects" },
    { label: "Media", page: "media" },
    { label: "CV", page: "cv" },
  ];
  const [isOpen, setIsOpen] = useState(false); // Mobile state - displaying the “hamburger menu”
  
  return (
    <nav className="sticky top-0 z-50 backdrop-blur-md bg-purple-700/70 border-b border-white/10 rounded-full">
      <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>☰</button>
      <ul 
        className={`
          absolute right-0 top-full mt-3
          w-52 rounded-2xl border border-white/10
          bg-slate-900/95 backdrop-blur-xl
          p-3 shadow-2xl
          transition-all duration-300 
          ${
            isOpen 
              ? "translate-y-0 opacity-100"
              : "pointer-events-none -translate-y-2 opacity-0"
              }
              md:static
              md:mt-0
              md:flex
              md:w-auto
              md:translate-y-0
              md:items-center
              md:gap-2
              md:border-none
              md:bg-transparent
              md:p-0
              md:shadow-none
              md:opacity-100
              md:pointer-events-auto
              `}
            >

        {items.map((item) => (
          <li key={item.page} className="mr-10">
            <button onClick={() => onNavigate(item.page)} 
            className={`
              rounded-full px-5 py-2
              font-semibold tracking-wide
              transition-all duration-300 
              ${
              activePage === item.page
                ? "bg-white text-purple-700 shadow-lg shadow-purple-500/20"
                : "text-white hover:bg-white/10 hover:text-purple-200 hover:scale-105"
              }
              `}
              >
              {item.label}
            </button>
          </li>
        ))}
      </ul>

    </nav>
  );
};

export default NavBar;
