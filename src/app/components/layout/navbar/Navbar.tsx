"use client";

import { m, useCycle } from "framer-motion";
import { useEffect } from "react";
import Badge from "../badge/Badge";
import Logo from "../logo/Logo";
import AuthLinks from "./AuthLinks";
import Links from "./Links";
import Toggler from "./Toggler";
import Style from "./style.module.css";

const { navLinksWrapper, navWrapper } = Style;

const Navbar = (): JSX.Element => {
  const [isOpen, toggleOpen] = useCycle<boolean>(false, true);

  useEffect(() => {
    const closeMenuItems = (e: any) => {
      if (!e.target.closest("#navbar") && isOpen) toggleOpen();
    };
    document.addEventListener("click", closeMenuItems);
    return () => document.removeEventListener("click", closeMenuItems);
  }, [isOpen, toggleOpen]);

  const variantsLinksWrapper = {
    closed: { x: "100%", opacity: 0 },
    open: { x: 10, opacity: 1 },
  };

  return (
    <m.nav
      initial={false}
      animate={isOpen ? "open" : "closed"}
      className="overflow-hidden bg-primary"
      id="navbar"
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
            onClick={() => toggleOpen()}
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
