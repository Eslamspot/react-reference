import React from "react";

const Cart = ({ id, name, email }) => {
  return (
    // <div className="tc bg-light-green bid br4 pa4 grow bw2  fl w-third ma2 ">
    <div className="tc bg-light-green bid br4 pa4 grow bw2  fl w-25 ma2 ">
      <img alt="something" src={`https://robohash.org/${id}?200x200`} />
      <div>
        <h2>{name}</h2>
        <p>{email}</p>
      </div>
    </div>
  );
};

export default Cart;
