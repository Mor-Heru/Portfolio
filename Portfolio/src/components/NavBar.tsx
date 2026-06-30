import { useState } from "react";

interface Props {
  onNavigate: (page: string) => void;
  activePage: string;
}

const NavBar = ({onNavigate, activePage}:Props) => {
  const items = ["About US", "Projects", "Media", "CV"];
  const [isOpen, setIsOpen] = useState(false); // Mobile state - displaying the “hamburger menu”
  
  return (
    <nav className="relative">
      <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>☰</button>
      <ul className={`md:flex md:opacity-100 md:pointer-events-auto absolute right-0 top-full bg-purple-600 rounded-md shadow-md p-4 transition-all duration-300 ${isOpen ? "opacity-100" : "opacity-0 pointer-events-none"}`}>
        {items.map((item) => (
          <li className="mr-10">
            <a className={`whitespace-nowrap font-semibold cursor-pointer ${activePage === item.toLowerCase() ? "underline bg-white text-purple-600 rounded-full px-3 py-1" : "hover:underline"}`} onClick={() => onNavigate(item.toLowerCase())}>
              {item}
            </a>
          </li>
        ))}
      </ul>

    </nav>
  );
};

export default NavBar;
