import React, { useState, useEffect } from 'react';

// cleanup function
// second argument

const UseEffectCleanup = () => {
  const [size, setSize] = useState(window.innerWidth);
  console.log(size)

  const checkSize = () => {
    setSize(window.innerWidth);
  };

  useEffect(() => {
    window.addEventListener('resize', checkSize);

    //Adding a return function
    return () => {
      console.log('Cleaning Up...');
      window.removeEventListener('resize', checkSize);
    }
  }, [])



  return (<React.Fragment>
    <h1> Window</h1>
    <h2> {size} PX</h2>
  </React.Fragment>);

};

export default UseEffectCleanup;

//Stop at 5.10
