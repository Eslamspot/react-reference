import React from "react";
import Cart from "./card";

const CardList = ({ robots }) => {
  const cards = robots.map((data, i) => {
    return (
      <Cart
        key={robots[i].id}
        id={robots[i].id}
        name={robots[i].name}
        email={robots[i].email}
      />
    );
  });
  return <div>{cards}</div>;
};

export default CardList;
