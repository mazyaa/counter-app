import { useState } from 'react';


export default function HandleButton() {
const [likes, setLike] = useState(0);


function handleButtonCount () {
    setLike( likes + 1 );
  }

function handleButtonReduce () {
    setLike( likes - 1 );
  }

function handleButtonReset () {
    setLike(0);
}


  return (
    <div className="parentBtn">
      <div className="counter">
        <button onClick={handleButtonReduce} disabled={likes <= -1 || likes >= 10}>-</button>
        <h1>{(likes >= 0 && likes <10 ? likes : 'gabut yaaa wkwk')}</h1>
        <button onClick={handleButtonCount} disabled={likes <= -1 || likes >= 10}>+</button>
      </div>
      
      <div className="reset">
        <button onClick={handleButtonReset} disabled={likes <= -1 || likes >= 10}>Reset</button>
      </div>
    </div>
  )
}

