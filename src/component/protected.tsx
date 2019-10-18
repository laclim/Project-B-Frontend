import React, { useState } from "react";
import Axios from "axios";

function Protected() {
  const [result, setResult] = useState("");
  Axios.get("/restricted")
    .then(res => {
      setResult(res.data);
    })
    .catch(err => {
      //   setResult(err);
    });
  return <div>{result}</div>;
}

export default Protected;
