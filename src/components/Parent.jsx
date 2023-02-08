import React, { useState } from "react";
import Child from "./Child";

const Parent = () => {
  const [count, setcount] = useState(0);
  return (
    <div class="">
      <div className="parrent">
        <h1>{count} <small>Parrent Component</small></h1>
        {/* <div>
          <button onClick={() => setcount(count - 1)} className="btn_1">
            Decrement
          </button>
          <button
            onClick={() => setcount((prevState) => prevState + 1)}
            className="btn_2"
          >
            Increment
          </button>
        </div> */}
      </div>
      <div>
        <Child count={count} setcount ={setcount} />
      </div>
    </div>
  );
};

export default Parent;
