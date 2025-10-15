import React, { use } from "react";
import { MoneyContext } from "./FamilyTree";

const Brother = () => {
  const [money, setMoney] = use(MoneyContext);
  return (
    <div>
      <h4>Brother</h4>
      <button onClick={() => setMoney(money + 5000)}>Add 5000 TK</button>
    </div>
  );
};

export default Brother;
