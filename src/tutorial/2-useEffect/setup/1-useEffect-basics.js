import React, { useState, useEffect } from 'react';
// by default runs after every re-render
// cleanup function
// second parameter
const UseEffectBasics = () => {

  const [value, setValue] = useState(0);
  useEffect (() => {
    console.log('Effect Called');
    //Apply condition to the hooks.
    if(value > 1 ){
      document.title = `New Messages(${value})`; 
    }
    
  }, [value])

  console.log("render component")
  return (<React.Fragment>
    <h1> {value} </h1>
    <button className = "btn" onClick = {() => setValue(value + 1)}>Click Me</button>
  </React.Fragment>);
};

export default UseEffectBasics;

/*
  This is use to change something outside the comopnent on changes made to the same compoenent.
  This can be used to message passing. And other communication procedures across the mutlli components.

  How to conditionally call hooks.

  15 line second parameter. if we add empty [] it will run only on the initial render
  With a empty bracket it work like a constructor.
  adding more values in to the second parameters.

  when we change the value it will trigger the useEffects again and again.
*/
