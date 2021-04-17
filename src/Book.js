import React from 'react'

// Normal method get called upon the click event
const clickHandler = (e) => {
    console.log(e);
    console.log(e.target);
    alert('Hello World');
  }
  
  //Method with parameters -> when calling its different than usual.
  const clickHandlerParam = (brand) => {
    console.log(brand);
  }
  
  //Adding different parameters to the book component
  const Book = (props) => {
    //This is called object distruturing in JavaScript.
    const {img, manfacture, model, status } = props;
    return (
      <article className="book" onMouseOver={() => {
        console.log({manfacture});
      }}>
        <img src={img} alt="image"></img>
        <h1>{manfacture}</h1>
        <h4>{model} </h4>
        <h4>{status}</h4>
        <button type = 'button' onClick ={clickHandler}>Order</button> <br/>
        <button type = 'button' onClick ={() => clickHandlerParam(manfacture)}>Get the Brand</button>
      </article>
    )
  }

export default Book