import Link from "next/link";

const Links = (): JSX.Element => {
  return (
    <div className="flex gap-5 max-lg:items-center max-lg:flex-col text-14">
      <Link href="/">about</Link>
      <Link href="/">courses</Link>
      <Link href="/">teachers</Link>
      <Link href="/">pricing</Link>
    </div>
  );
};

export default Links;
