import React from "react";

export const IncrementComponent = React.memo(({ increment }) => {
  console.log("me estoy redibujando");
  
  return (
    <>
      <button className="btn btn-success" onClick={() => increment(1)}>
        Incrementar + 1
      </button>
    </>
  );
});
