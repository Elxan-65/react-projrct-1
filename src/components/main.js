import React, { useState } from "react";

function Main() {
  const [counter, setCounter] = useState(0);
  const handlerIncrease = () => {
    setCounter(counter+1)
  };
   const handelerDecrease=()=>{
    if(counter>0){
        setCounter(counter-1)   
    }
      
      
  };
  return (
    <div>
      <div className="counter">{counter}</div>
      <div className="button--container">
        <button className="button-decrease" onClick={handelerDecrease}>
          -
        </button>
        <button onClick={ handlerIncrease } className="button--inercase">
          +
        </button>
      </div>
    </div>
  );
}

export default Main;
