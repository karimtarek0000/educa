import icon1 from "@/assets/icons/e-learning.svg";
import Image from "next/image";
import Style from "./style.module.css";
import Link from "next/link";
import RenderSVG from "../../shared/RenderSVG";
import img1 from "@/assets/images/header/dashboard.png";

const {
  head,
  desc,
  linkGetStarted,
  linkWatchOur,
  wrapperLinks,
  linkWatchOurIcon,
  section,
  sectionWrapper,
  sectionCol1,
  sectionCol2,
} = Style;

const SectionOne = (): JSX.Element => {
  return (
    <section className={section}>
      <div className={sectionWrapper}>
        <div className={sectionCol1}>
          <Image src={icon1} alt="e-learning" />
          <h1 className={head}>
            Dream big <br /> Do right.
          </h1>
          <p className={desc}>
            Slite helps remote teams share ideas, save knowledge, and work
            together anytime, any place.
          </p>
          <div className={wrapperLinks}>
            <Link className={`${linkGetStarted} gradient-button`} href="/">
              get started now
            </Link>
            <Link className={linkWatchOur} href="/">
              <div className={linkWatchOurIcon}>
                <RenderSVG name="play" size="1rem" />
              </div>
              watch our platform!
            </Link>
          </div>
        </div>

        <div className={sectionCol2}>
          <div className="max-lg:max-w-[50vw]">
            <Image src={img1} alt="dashboard" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default SectionOne;
