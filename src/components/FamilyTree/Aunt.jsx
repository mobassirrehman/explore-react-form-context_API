import React, { use } from "react";
import Cousin from "./Cousin";
import { MoneyContext } from "./FamilyTree";

const Aunt = ({ asset }) => {
  const [money, setMoney] = use(MoneyContext);

  const handleAddMoney = () => {
    setMoney(money + 5000);
  };
  return (
    <div>
      <h4>Aunt</h4>
      <section className="flex">
        <Cousin asset={asset} name="Rajan"></Cousin>
        <Cousin name="Samy"></Cousin>
        <button onClick={handleAddMoney}>Add 5000 TK</button>
      </section>
    </div>
  );
};

export default Aunt;
