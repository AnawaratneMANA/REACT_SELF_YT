import React, { useState } from 'react';

const UseStateCounter = () => {

  const [value, setValue] = useState(0);

  const reset = () => {
    setValue(0);
  }

  const complexIncrease = () => {
    setTimeout(() => {
      //Get only the previous value (2 click update only 1)
      //setValue(value + 1);
      //This is getting the real previous value (3 clicks 3 updates)
       setValue((prevState)=> {
         return prevState + 1; //This return value will be then next state value.
       })
    },2000
  )
  }

  return (<React.Fragment>
    <section style={{margin: '4rem 0'}}>
      <h2>regular counter</h2>
      <h1>{value}</h1>
      <button className='btn' onClick={() => {
        setValue(value -1)
      }}>Decrease</button>
      <button className='btn' onClick={reset} >Reset</button>
      <button className='btn' onClick={() => {
        setValue(value + 1)
      }}>Increase</button>
    </section>



    <section style={{margin: '4rem 0'}}>
      <h2>regular counter</h2>
      <h2> More Complex Counter
      </h2>
      <h1>{value}</h1>
      <button className='btn' onClick = {complexIncrease}>
        Increase Later
      </button>
    </section>


  </React.Fragment>);
};

export default UseStateCounter;
