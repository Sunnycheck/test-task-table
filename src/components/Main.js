import { useState, useEffect } from "react";
import Table from "./Table";
import classes from "./Table.module.css";

const Main = ({ onDataLoaded }) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getData = async () => {
      const response = await fetch("http://127.0.0.1/api/test");
      const responseData = await response.json();
      setData(responseData);
      setLoading(false);
      console.log(responseData);
      onDataLoaded();
    };
    getData();
  }, [onDataLoaded]);

  if (loading) {
    return <div className={classes.loading}> Loading...</div>;
  }

  return (
    <>
      <Table data={data} />
    </>
  );
};

export default Main;
