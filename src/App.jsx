import axios from "axios";
import React, { useEffect } from "react";
import { AppDiv } from "./css/style";

export const App = () => {
  const getMockApi = async () => {
    const { data } = await axios.get("/hello");
    console.log(data);
  };

  useEffect(() => {
    getMockApi();
  });
  return <AppDiv>React</AppDiv>;
};

export default App;
