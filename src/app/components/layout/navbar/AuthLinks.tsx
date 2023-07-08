import Link from "next/link";
import Style from "./style.module.css";

const { authLinksLogIn, authLinksSignUp } = Style;

const AuthLinks = (): JSX.Element => {
  return (
    <div className="flex items-center gap-5 ms-auto text-14">
      <Link className={authLinksLogIn} href="/">
        log in
      </Link>
      <Link className={authLinksSignUp} href="/">
        sign up
      </Link>
    </div>
  );
};

export default AuthLinks;
