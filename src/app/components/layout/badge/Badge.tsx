import Style from "./style.module.css";

const { badge, badgeKeyword } = Style;

const Badge = (): JSX.Element => {
  return (
    <div className={badge}>
      <span className={badgeKeyword}>New</span>
      <p className="font-medium text-primary text-11">
        BECOMING A BUSINESS PARTNER ON ONLINE
      </p>
    </div>
  );
};

export default Badge;
