import React, { useContext } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import {
  Navbar,
  NavHeader,
  NavBtn,
  Title,
  NavLinks,
  TitleSpan,
} from "./HeaderStyle";
import LinkDetails from "./linkDetails";
import { motion } from "framer-motion";
import { animateLink } from "../../../animation/headerAnim";
import { AppContext } from "../../../store/contexts";
import { logoAnim } from "../../../animation/logoAnim";



const Header = () => {
  const { setToggle, toggle } = useContext(AppContext);
  const changeBtn = toggle ? <FaBars /> : <FaTimes />;



  const showMobLinks = !toggle && (
    <motion.div
      className="nav-links__animate"
      variants={animateLink}
      initial="hidden"
      animate="visible"
    >
      <LinkDetails />
    </motion.div>
  );

  const showDesktopLinks = toggle && (
    <NavLinks>
      <LinkDetails />
    </NavLinks>
  );

  // FUNCTIONS
  const toggleHandler = () => {
    return setToggle((prevState) => setToggle(!prevState));
  };

  return (
    <Navbar variants={animateLink} initial="hidden" animate="visible">
      <NavHeader>
        <Title to="/">
          <TitleSpan>Crypto</TitleSpan> {logoAnim} <TitleSpan>Verse</TitleSpan>
        </Title>
        <NavBtn onClick={toggleHandler}>{changeBtn}</NavBtn>
      </NavHeader>
      {showMobLinks || showDesktopLinks}
    </Navbar>
  );
};

export default Header;
