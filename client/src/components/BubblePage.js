import React, { useState, useEffect } from "react";
import axios from "axios";

import Bubbles from "./Bubbles";
import ColorList from "./ColorList";
import axiosWithAuth from '../utils/axiosWithAuth';

const BubblePage = () => {
  const [colorList, setColorList] = useState([]);
  const fetchColors = () => {
    axiosWithAuth()
      .get('/colors')
      .then(res => setColorList(res.data))
  }

  useEffect(() => {
    fetchColors()
  }, [])


  return (
    <>
      <ColorList colors={colorList} updateColors={fetchColors} />
      <Bubbles colors={colorList} />
    </>
  );
};

export default BubblePage;
