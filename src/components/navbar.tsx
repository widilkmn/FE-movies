import { Link, useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();
  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/login");
  };

  return (
    <div className="flex flex-row w-full justify-between px-10 py-10 shadow-md bg-gray-100">
      <h2 className="text-2xl font-bold">INDOFLIX</h2>
      <div className="flex flex-row gap-5">
        <Link to={"/"} className="hover:scale-105 transition-transform">HOME</Link>
        <Link to={"/movie"} className="hover:scale-105 transition-transform" >MOVIE</Link>
        <Link to={"/tv-show"} className="hover:scale-105 transition-transform" >TV SHOW</Link>
        <div className="cursor-pointer hover:scale-105 transition-transform" onClick={handleLogout}>
          LOGOUT
        </div>
      </div>
    </div>
  );
};

export default Navbar;
