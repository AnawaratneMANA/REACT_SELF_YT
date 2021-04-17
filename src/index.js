//Importing react
import React from 'react'

//Importing React-DOM 
import ReactDom  from 'react-dom'

//Creating a function -> Capatilizing the class name make them compoonents.
/*

We always have to return something.
We always need to return a single element.
We can have any tag we want.
Attrbutes need to be in Camel case. Otherwise error.
We have to close every single element. (Even one with don't have closing tags -> img)
Always use paranthesis with return statement.

*/ 
function Greeting(){
  return ( 
  <mainarticle>
    <h1>Topic</h1>
    <p>Sample Text</p>
  </mainarticle>
  );
}


//Using fragments -> we can also keep the tags empty.
// function Greeting(){
//   return <React.Fragment>
//     <h1>Topic</h1>
//     <p>Sample Text</p>
//   </React.Fragment>
// }

//Create Element Syntax -> Not reccomend to use.
// const Greeting = () => {
//   return React.createElement('h1', {}, 'hello world');
// }

//Multi Tags with Create Element
/*This can be really messy when having a lot of nested elements*/
/*
const Greeting = () => {
  return React.createElement(
  'div', 
   {}, 
    React.createElement('h1', {}, 'hello world')
    );
};
*/

//Attaching the component to the HTML interface.
ReactDom.render(<Greeting/>, document.getElementById('root'));
