import Link from "next/link";
import Logo from "../logo/Logo";
import Links from "./Links";
import AuthLinks from "./AuthLinks";

const Navbar = (): JSX.Element => {
  return (
    <nav className="bg-primary">
      <div className="container flex  flex-wrap py-3 lg:gap-x-[21.875rem] capitalize">
        <Logo />
        <div className="flex items-center flex-grow font-medium text-primary">
          <Links />
          <AuthLinks />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

/*
// Close
<svg width="57" height="46" viewBox="0 0 57 46" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M5 5H51.7403" stroke="#292E37" stroke-width="9" stroke-linecap="round"/>
<path d="M20 23H51.7403" stroke="#292E37" stroke-width="9" stroke-linecap="round"/>
<path d="M9 41H51.7403" stroke="#292E37" stroke-width="9" stroke-linecap="round"/>
</svg>

// Open
<svg width="52" height="48" viewBox="0 0 52 48" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M5 43L47.5 4.5" stroke="#292E37" stroke-width="9" stroke-linecap="round"/>
<path d="M5 4.5L47.5 43" stroke="#292E37" stroke-width="9" stroke-linecap="round"/>
</svg>
*/
