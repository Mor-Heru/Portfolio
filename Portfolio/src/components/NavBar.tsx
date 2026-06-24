const NavBar = () => {
  const items = ["Projects", "Contact", "CV"];
  return (
    <ul className="flex">
      {items.map((item) => (
        <li className="mr-10">
          <a className="font-semibold hover:underline" href="#">
            {item}
          </a>
        </li>
      ))}
    </ul>
  );
};

export default NavBar;
