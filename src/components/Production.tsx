import React from "react";
import { ObjectNameType } from "types/movie";

interface ProductionType {
  companies: ObjectNameType[];
}

const Production: React.FC<ProductionType> = ({ companies }) => {
  if (!companies.length) return null;

  return (
    <div>
      Production:
      <ul>
        {companies.map(({ name }, idx) => (
          <li key={idx}>{name}</li>
        ))}
      </ul>
    </div>
  );
};

export default Production;
