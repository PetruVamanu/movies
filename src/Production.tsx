import React from "react";
import { ObjectNameType } from "types/movie";

interface ProductionType {
  companies: ObjectNameType[];
}

const Production: React.FC<ProductionType> = ({ companies }) => {
  let indx: number = 0;
  if (companies.length <= 0) return null;
  return (
    <div>
      Production:
      <ul>
        {companies.map((my_company) => {
            indx = indx + 1;
          return <li key={indx}>{my_company.name}</li>;
        })}
      </ul>
    </div>
  );
};

export default Production;
