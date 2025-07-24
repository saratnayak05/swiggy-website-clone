import logo from "../assets/swiggy_logo.avif";

const Header = () => {
  return (
    <div className=" bg-amber-700 h-18 flex items-center justify-around">
      <div className="h-12 w-12">
        <img src={logo}></img>
      </div>
      <nav className="">
        <ul className="flex gap-20 text-lg font-semibold text-teal-50">
          <li>Swiggy Corporate</li>
          <li>Search</li>
          <li>Offer</li>
          <li>Help</li>
          <li>Sign In</li>
          <li>Cart</li>
        </ul>
      </nav>
    </div>
  );
};

export default Header;
