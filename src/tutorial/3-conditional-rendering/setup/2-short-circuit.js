import React, { useState } from 'react';
// short-circuit evaluation
// ternary operator

const ShortCircuit = () => {
  const [text, setText] = useState("");

  const [isError, setIsError] = useState(false);

  const firstValue = text || 'hello world'; //if above have a value it will return it, else return second one.
  const secondValue = text && 'hello world';

  return (<React.Fragment>
    { /*
      <h1>{firstValue}</h1>
      <h1>Value: {secondValue}</h1>
    */ }

    <h1>{text || 'john doe'}</h1>
    <button className = 'btn' onClick={() => setIsError(!isError)}>Toggle Error</button>
    {isError && <h1> Error...</h1>}
    {isError ? <p>There is an Error...</p>: <div>
      <h2> There is no Error</h2>
    </div>}
  </React.Fragment>);
};

export default ShortCircuit;


/**
 *
 * Following is not working.
 * return <>
 *     {if(){console.log('hello world')}} </>
 *
 *  This is a alternative way of use a conditional statements for the component visibility.
    if can't use to display component conditionally we have to use this technique.
 */

