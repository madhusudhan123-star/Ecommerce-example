import React from "react";
import { Card } from "./index";

const Cardlist = ({ data }) => {
  return (
    <div>
      <div className="flex pb-44 flex-wrap justify-center drop-shadow-xl">
        {!data ? null : data.map((item, idx) => <Card key={idx} item={item} />)}
      </div>
    </div>
  );
};

export default Cardlist;
