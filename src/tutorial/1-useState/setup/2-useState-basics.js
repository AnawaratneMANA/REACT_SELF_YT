import React, { useState } from 'react';

const UseStateBasics = () => {
  // console.log(useState("Hello World"));
  // const value = useState(1)[0]
  // const handler = useState(1)[1]
  // console.log(value, handler)
  const [text, setText] = useState('random title');//First one keyword second one method name.
  const handleClick = () => {
    //Toggling mechnism.
    if(text === "random title"){
      setText('Hello World');
    } else {
      setText("random title");
    }
    
  }
  return ( <React.Fragment>
    <h1>{text}</h1>
    <butotn className="btn" onClick= {handleClick} >Change the Name</butotn>
  </React.Fragment>);
};

export default UseStateBasics;

/*

When working and creating hooks it's better to have use keyword infront of 
it should be in a component which name start with capital letter.

*/
