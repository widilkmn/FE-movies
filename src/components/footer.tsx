import Facebook from "../assets/icons/facebook.png";
import Instagram from "../assets/icons/instagram.png";
import Linkedin from "../assets/icons/linkedin.png";
import Twitter from "../assets/icons/twitter.png";

const Footer = () => {
  return (
    <div className="flex flex-row justify-between px-10 py-10 bg-gray-100">
      <div className="flex flex-col">
        <h2 className="font-bold">INDOFLIX</h2>
      </div>
      <div className="flex flex-col">
        <div className="flex flex-row gap-3">
            <a href="#"><img src={Instagram} alt="" /></a>
            <a href="#"><img src={Facebook} alt="" /></a>
            <a href="#"><img src={Twitter} alt="" /></a>
            <a href="#"><img src={Linkedin} alt="" /></a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
