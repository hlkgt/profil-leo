import {
  faAddressCard,
  faEnvelope,
  faFileCircleCheck,
  faHome,
  faUserAlt,
  faUserPen,
  faXmark,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import { PropTypes } from "prop-types";
import { Fragment, useState } from "react";
import {
  faGithub,
  faInstagram,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";

const NavLink = (props) => {
  const { pathLink, iconLink, tooltipText } = props;
  const [isHover, setIsHover] = useState(false);
  return (
    <Link
      {...props}
      onMouseEnter={() => setIsHover(!isHover)}
      onMouseLeave={() => setIsHover(!isHover)}
      to={pathLink}
      className={
        "relative w-10 h-10 lg:w-12 lg:h-12 bg-slate-900 rounded-full border border-slate-400 text-slate-400 flex justify-center items-center text-xl hover:bg-slate-400 hover:text-slate-900 transition-colors duration-300 ease-in-out"
      }
    >
      <FontAwesomeIcon icon={iconLink}></FontAwesomeIcon>
      <p
        className={
          (isHover ? "-top-14 scale-100 " : "top-0 scale-0 ") +
          "absolute bg-slate-400 text-slate-900 p-2 rounded-md text-lg font-semibold transition-all duration-300 ease-in-out"
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

const Notification = ({ colorIcon, styleIcon, text }) => {
  return (
    <p className={"text-xl font-medium"}>
      <FontAwesomeIcon className={colorIcon} icon={styleIcon}></FontAwesomeIcon>{" "}
      : {text}
    </p>
  );
};
Notification.propTypes = {
  colorIcon: PropTypes.string,
  styleIcon: PropTypes.object,
  text: PropTypes.string,
};

const Navbar = () => {
  const [isShow, setIsShow] = useState(false);
  return (
    <Fragment>
      <div
        className={
          (isShow ? "top-6" : "-top-80") +
          " bg-slate-300 text-slate-900 rounded-xl fixed right-6 transition-all duration-300 ease-in-out flex flex-col gap-4 px-4 py-8 border-2 border-slate-900"
        }
      >
        <Notification
          colorIcon={"text-pink-500"}
          styleIcon={faInstagram}
          text={"@for_thisss"}
        />
        <Notification
          colorIcon={"text-orange-500"}
          styleIcon={faEnvelope}
          text={"haihaioell@gmail.com"}
        />
        <Notification
          colorIcon={"text-black"}
          styleIcon={faGithub}
          text={"hlkgt"}
        />
        <Notification
          colorIcon={"text-blue-600"}
          styleIcon={faLinkedin}
          text={"Leo Marselio"}
        />
        <span
          className={"cursor-pointer absolute top-2 right-4"}
          onClick={() => setIsShow(!isShow)}
        >
          <FontAwesomeIcon icon={faXmark}></FontAwesomeIcon>
        </span>
      </div>
      <div className="w-full fixed bottom-4">
        <div className="container px-8 mx-auto flex justify-center pb-4 lg:pt-8 gap-8">
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
          <NavLink
            pathLink={"#"}
            iconLink={faUserAlt}
            tooltipText={"Sosmed"}
            onClick={() => setIsShow(!isShow)}
          />
        </div>
      </div>
    </Fragment>
  );
};

export default Navbar;
