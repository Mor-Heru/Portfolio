interface Props {
  onNavigate: (page: string) => void;
  activePage: string;
}

const NavBar = ({onNavigate, activePage}:Props) => {
  const items = ["About US", "Projects", "Media", "CV"];
  return (
    <ul className="flex">
      {items.map((item) => (
        <li className="mr-10">
          <a className={`font-semibold cursor-pointer ${activePage === item.toLowerCase() ? "underline bg-white text-purple-600 rounded-full px-3 py-1" : "hover:underline"}`} onClick={() => onNavigate(item.toLowerCase())}>
            {item}
          </a>
        </li>
      ))}
    </ul>
  );
};

export default NavBar;
