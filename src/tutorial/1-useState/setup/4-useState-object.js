import React, { useState } from 'react';

const UseStateObject = () => {
  //State Objects
  const [person, setPerson] = useState({name: 'peter', age: 24, message: 'random message',})
  console.log(person);

  //State values
  const [name, setName] = useState('peter')
  const [age, setAge] = useState(24);
  const [message, setMessaage] = useState('random title');

  const changeMessage = () => {
    //Change the Object values.
    setPerson({...person, message: 'hello world'});
    //Change the state values.
    setMessaage('Hello World');
  };


  return (<React.Fragment>
    <h3>{person.name}</h3>
    <h3>{person.age}</h3>
    <h3>{person.message}</h3>
    <button className='btn' onClick={changeMessage}>Change the Value</button>
  </React.Fragment>);
};

export default UseStateObject;

/*
without spread operator other data other than message will be 
eraced out. 
*/
