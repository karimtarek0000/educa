"use client";

import { motion, useCycle } from "framer-motion";
import Logo from "../logo/Logo";
import AuthLinks from "./AuthLinks";
import Links from "./Links";
import Style from "./style.module.css";
import Toggler from "./Toggler";
import Badge from "../badge/Badge";

const { navLinksWrapper, navWrapper } = Style;

const Navbar = (): JSX.Element => {
  const [isOpen, toggleOpen] = useCycle(false, true);

  const variantsLinksWrapper = {
    closed: { x: "100%", opacity: 0 },
    open: { x: 10, opacity: 1 },
  };

  return (
    <motion.nav
      initial={false}
      animate={isOpen ? "open" : "closed"}
      className="bg-primary"
    >
      <div className="container">
        <div className={navWrapper}>
          <Logo />
          <motion.div
            variants={variantsLinksWrapper}
            transition={{ duration: 0.7, type: "tween", ease: "anticipate" }}
            className={navLinksWrapper}
          >
            <Links />
            <div className="max-lg:hidden">
              <Badge />
            </div>
            <AuthLinks />
          </motion.div>
          <Toggler toggle={() => toggleOpen()} />
        </div>
      </div>
    </motion.nav>
  );
};

export default Navbar;

/*
// Open
<svg width="32" height="29" viewBox="0 0 32 29" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M3 26L29 3" stroke="#292E37" stroke-width="5" stroke-linecap="round"/>
<path d="M3 3L29 26" stroke="#292E37" stroke-width="5" stroke-linecap="round"/>
</svg>
*/
