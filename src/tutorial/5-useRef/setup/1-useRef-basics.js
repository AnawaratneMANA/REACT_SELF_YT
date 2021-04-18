import React, { useEffect, useRef } from 'react';

// preserves value
// DOES NOT trigger re-render
// target DOM nodes/elements

const UseRefBasics = () => {

  const refContainer = useRef(null);
  const devContainer = useRef(null);
  const handleSubmit = (e) => {
    e.preventDefault();

  };

  useEffect(()=> {
    console.log(refContainer.current);
    refContainer.current.focus();
  })
  console.log(refContainer);
  return <React.Fragment>
    <form className='form' onSubmit={handleSubmit}>
      <div>
        <input type='text' ref={refContainer}/>
        <button type='submit'>Submit</button>
      </div>
    </form>
    <div ref={devContainer}> Hello World</div>
  </React.Fragment>;
};

export default UseRefBasics;

/*
* This is used to connect DOM element to the internals
* */
