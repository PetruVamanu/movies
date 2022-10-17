import React from "react";
import { ObjectNameType } from "types/movie";

interface ProductionType {
  companies: ObjectNameType[];
}

const Production: React.FC<ProductionType> = ({ companies }) => {
  if (!companies.length) return null;

  return (
    <div>
    <span className="text-blue-500">Production studios:</span>
      <ul>
        {companies.map(({ name }, idx) => (
          <li key={idx}>{name}</li>
        ))}
      </ul>
    </div>
  );
};

export default Production;
