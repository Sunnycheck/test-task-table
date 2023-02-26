import classes from "./Footer.module.css";

const Footer = () => {
  return (
    <div className={classes.wrapper}>
      <h3 className={classes["text-header"]}>
        <span>System Information</span>
      </h3>
      {/* of course, this values can be produced by some functions */}
      <p className={classes.text}>Database capacity: 100 MB / 1 GB</p>
      <p className={classes.text}>On since: 11.09.2022, 07:30:01</p>
      <p className={classes.text}>Users logged in: 2 </p>
    </div>
  );
};

export default Footer;
