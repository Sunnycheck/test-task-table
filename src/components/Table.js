import classes from "./Table.module.css";

import React, { Fragment, useState } from "react";

const Table = (props) => {
  const [style, setStyle] = useState({button: true});
  let currentDate = new Date();
  let now = currentDate.toLocaleDateString("uk-UA");

  const changeColorHandler = () => {
    setStyle({button: !style.button});
  };

  return (
    <Fragment>
      <div className={classes.container}>
        <div className={classes["table-wrapper"]} onClick={changeColorHandler}>
          <table>
            <thead className={style.button ? `thead` : `${classes.button_custom_black}` } onClick={changeColorHandler}>
              <tr>
                <th className={classes["table-header"]}>№</th>
                <th className={classes["table-header"]}>Date/Time</th>
                <th className={classes["table-header"]}>Description</th>
                <th className={classes["table-header"]}>Measurement Value</th>
              </tr>
            </thead>
            <tbody >
              {props.data.map((item, index) => (
                <tr key={item.id} className={style.button ? `tbody` : `${classes.tr_black}` } onClick={changeColorHandler}>
                  <td>{index + 1}</td>
                  <td>
                    {now} / {item.date}
                  </td>
                  <td>{item.description}</td>
                  <td>{parseFloat(item["measurement-value"]).toFixed(2)} kg</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className={classes.buttons}>
          <button className={style.button ? `${classes.button_custom}` : `${classes.button_custom_black}` } onClick={changeColorHandler} href="#">
            Download pdf
          </button>
          <button className={style.button ? `${classes.button_custom}` : `${classes.button_custom_black}` } onClick={changeColorHandler} href="#">
            Download XLS
          </button>
          <button className={style.button ? `${classes.button_custom}` : `${classes.button_custom_black}` } onClick={changeColorHandler} href="#">
            Send report by e-mail
          </button>
          <button className={style.button ? `${classes.button_custom}` : `${classes.button_custom_black}` } onClick={changeColorHandler}>Change Color</button>
        </div>
      </div>
    </Fragment>
  );
};

export default Table;
