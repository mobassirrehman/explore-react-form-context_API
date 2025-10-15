import React from "react";
import Cousin from "./Cousin";

const Uncle = () => {
  return (
    <div>
      <h4>Uncle</h4>
      <section className="flex">
        <Cousin name="Akbar"></Cousin>
        <Cousin name="Johan"></Cousin>
      </section>
    </div>
  );
};

export default Uncle;
