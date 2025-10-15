import React from "react";
import MySelf from "./MySelf";
import Brother from "./Brother";
import Sister from "./Sister";

const Dad = ({asset}) => {
  return (
    <div>
      <h4>Dad</h4>
      <section className="flex">
        <MySelf asset={asset}></MySelf>
        <Brother></Brother>
        <Sister></Sister>
      </section>
    </div>
  );
};

export default Dad;
