import { Fragment } from "react";
import { FaHome } from "react-icons/fa";
import classes from "./Header.module.css";

const Header = () => {
  return (
    <Fragment>
      {/* <Container maxWidth='xs'> */}
      <div className={classes.wrapper}>
        <FaHome
          className={classes.homebutton}
          onClick={() => {
            alert("clicked");
          }}
        ></FaHome>
        <img src="./Logo.png" alt="logo" />
      </div>
      <h1 className={classes["text-header"]}>Measurement report</h1>
      {/* </Container> */}
    </Fragment>
  );
};

export default Header;
