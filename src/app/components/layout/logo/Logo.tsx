import Image from "next/image";
import logo from "@/assets/images/logo/logo.svg";
import Link from "next/link";

const Logo = (): JSX.Element => {
  return (
    <Link className=" max-w-[3.75rem] md:max-w-none" href="/">
      <Image src={logo} alt="logo" />
    </Link>
  );
};

export default Logo;
