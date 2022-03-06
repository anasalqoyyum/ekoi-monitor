import "../styles/Header.css"
import logo from "../assets/images/Logo.png"

const Header = () => {
  return (
    <>
      <header className="w-full top-0 mt-0 bg-white border-b-2 border-[#FF9E44] header">
        <img className="h-1/8 pt-2" src={logo} />
      </header>
    </>
  );
};

export default Header;
