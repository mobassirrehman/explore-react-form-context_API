import React from "react";
import Special from "./Special";

const MySelf = ({ asset }) => {
  return (
    <div>
      <h4>MySelf</h4>
      <Special asset={asset}></Special>
    </div>
  );
};

export default MySelf;
