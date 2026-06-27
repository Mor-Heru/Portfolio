interface Props {
  onNavigate: (page: string) => void;
}

const NavBar = ({onNavigate}:Props) => {
  const items = ["Projects", "Media", "CV"];
  return (
    <ul className="flex">
      {items.map((item) => (
        <li className="mr-10">
          <a className="font-semibold hover:underline cursor-pointer" onClick={() => onNavigate(item.toLowerCase())}>
            {item}
          </a>
        </li>
      ))}
    </ul>
  );
};

export default NavBar;
