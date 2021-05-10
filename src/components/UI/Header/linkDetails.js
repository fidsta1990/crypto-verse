import { NavLink } from "./HeaderStyle";
import { AppContext } from "../../../store/contexts";
import { useContext } from "react";
import { useLocation } from "react-router-dom";

const linkDetails = [
  {
    id: 1,
    route: "/",
    name: "Home",
  },
  {
    id: 2,
    route: "/market",
    name: "Market",
  },
  {
    id: 3,
    route: "/contact",
    name: "Contact",
  },
];

const LinkDetails = () => {
  const { setToggle } = useContext(AppContext);
  const closeNav = () => setToggle(true);
  const { pathname } = useLocation();

  const linkList = linkDetails.map((link) => {
    const { id, route, name } = link;
    return (
      <NavLink
        key={id}
        to={route}
        onClick={closeNav}
        className={`${pathname === route && "active"}`}
      >
        {name}
      </NavLink>
    );
  });

  return linkList;
};

export default LinkDetails;
