import classes from "./Table.module.css";

import React, { Fragment } from "react";

const Table = (props) => {
  let currentDate = new Date();
  let now = currentDate.toLocaleDateString("uk-UA");

  return (
    <Fragment>
      <div className={classes.container}>
        <div className={classes["table-wrapper"]}>
          <table>
            <thead>
              <tr>
                <th className={classes["table-header"]}>№</th>
                <th className={classes["table-header"]}>Date/Time</th>
                <th className={classes["table-header"]}>Description</th>
                <th className={classes["table-header"]}>Measurement Value</th>
              </tr>
            </thead>
            <tbody className={classes.tablebody}>
              {props.data.map((item, index) => (
                <tr key={item.id}>
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
          <button className={classes.button_custom} href="#">
            Download pdf
          </button>
          <button className={classes.button_custom} href="#">
            Download XLS
          </button>
          <button className={classes.button_custom} href="#">
            Send report by e-mail
          </button>
        </div>
      </div>
    </Fragment>
  );
};

export default Table;
