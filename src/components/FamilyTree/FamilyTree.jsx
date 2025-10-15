import React, { useState } from "react";
import Grandpa from "./Grandpa";
import "./FamilyTree.css";
import { createContext } from "react";

export const AssetContext = createContext("");
export const MoneyContext = createContext(0);

const FamilyTree = () => {
  const [money, setMoney] = useState(0);
  const asset = "Sapphire";
  const newAsset = "Ruby";

  return (
    <div className="family-tree">
      <h2>Family Tree</h2>
      <h4>Total Family Money {money}</h4>
      <MoneyContext value={[money, setMoney]}>
        <AssetContext.Provider value={newAsset}>
          <Grandpa asset={asset}></Grandpa>
        </AssetContext.Provider>
      </MoneyContext>
    </div>
  );
};

export default FamilyTree;
