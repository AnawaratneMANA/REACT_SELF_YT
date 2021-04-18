import React, { useState, useEffect } from 'react';
// by default runs after every re-render
// cleanup function
// second parameter
const UseEffectBasics = () => {

  const [value, setValue] = useState(0);
  useEffect (() => {
    console.log('Effect Called');
    document.title = `New Messages(${value})`;
  })

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

*/
