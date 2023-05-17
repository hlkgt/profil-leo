import {
  faAddressCard,
  faFileCircleCheck,
  faHome,
  faUserAlt,
  faUserPen,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import { PropTypes } from "prop-types";
import { useState } from "react";

const NavLink = ({ pathLink, iconLink, tooltipText }) => {
  const [isHover, setIsHover] = useState(false);
  return (
    <Link
      onMouseEnter={() => setIsHover(!isHover)}
      onMouseLeave={() => setIsHover(!isHover)}
      to={pathLink}
      className={
        "relative w-12 h-12 rounded-full border border-slate-400 text-slate-400 flex justify-center items-center text-xl hover:bg-slate-400 hover:text-slate-900 transition-colors duration-300 ease-in-out"
      }
    >
      <FontAwesomeIcon icon={iconLink}></FontAwesomeIcon>
      <p
        className={
          (isHover ? "block " : "hidden ") +
          "absolute bottom-16 bg-slate-400 text-slate-900 p-2 rounded-md text-lg font-semibold"
        }
      >
        {tooltipText}
      </p>
    </Link>
  );
};
NavLink.propTypes = {
  pathLink: PropTypes.string,
  iconLink: PropTypes.object,
  tooltipText: PropTypes.string,
};

const Navbar = () => {
  return (
    <div className="w-full fixed bottom-4">
      <div className="container px-8 mx-auto flex lg:justify-center pb-4 lg:pt-8 gap-8">
        <NavLink pathLink={"/"} iconLink={faHome} tooltipText={"Home"} />
        <NavLink
          pathLink={"/about"}
          iconLink={faAddressCard}
          tooltipText={"About"}
        />
        <NavLink
          pathLink={"/skills"}
          iconLink={faUserPen}
          tooltipText={"Skills"}
        />
        <NavLink
          pathLink={"/projects"}
          iconLink={faFileCircleCheck}
          tooltipText={"Projects"}
        />
        <NavLink pathLink={"#"} iconLink={faUserAlt} tooltipText={"Sosmed"} />
      </div>
    </div>
  );
};

export default Navbar;
