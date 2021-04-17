//Importing react
import React from 'react'

//Importing React-DOM 
import ReactDom  from 'react-dom'

//Adding some CSS -> Importing CSS
import './index.css'

//Creating Varibles
const manfacture = "Acer"
const model = "Inspiron 15"
const img = "https://images-na.ssl-images-amazon.com/images/I/41vMYgD92xL.jpg"

//Adding CSS classes to the Component.
function BookList(){
  return ( 
  <list>
    <div className="container">
      <h1>Topic</h1>
      <p>Sample Text</p>
    </div>

    <section className = "bookList">
    <Book job='developer'/>
    <Book title ="2nd one title"/>
    </section>
  </list>
  );
}

//Adding different parameters to the book component
const Book = (props) => {

  //Printing Props 
  console.log(props)

  const Brand = 'Acer';
  return (
    <article className="book"> 
      <img src = {img} alt ="image" ></img>
      <h1>{manfacture.toUpperCase()}</h1>
      <h4>{model} </h4>
      <h2>{props.job}</h2>
      <h2>{props.title}</h2>
      {console.log(props)}
    </article>
  )
}

//Attaching the component to the HTML interface.
ReactDom.render(<BookList/>, document.getElementById('root'));
