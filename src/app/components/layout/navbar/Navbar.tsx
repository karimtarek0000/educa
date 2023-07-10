"use client";

import { m, useCycle } from "framer-motion";
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
    <m.nav
      initial={false}
      animate={isOpen ? "open" : "closed"}
      className="overflow-hidden bg-primary"
    >
      <div className="container">
        <div className="flex justify-center my-2 lg:hidden">
          <Badge />
        </div>

        <div className={navWrapper}>
          <Logo />
          <m.div
            variants={variantsLinksWrapper}
            transition={{ duration: 0.7, type: "tween", ease: "anticipate" }}
            className={navLinksWrapper}
          >
            <Links />
            <div className="max-lg:hidden">
              <Badge />
            </div>
            <AuthLinks />
          </m.div>
          <Toggler toggle={() => toggleOpen()} />
        </div>
      </div>
    </m.nav>
  );
};

export default Navbar;
