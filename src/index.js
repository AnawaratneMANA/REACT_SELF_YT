//Importing react
import React from 'react'

//Importing React-DOM 
import ReactDom  from 'react-dom'

//Adding some CSS -> Importing CSS
import './index.css'


//Adding CSS classes to the Component.
function BookList(){
  return ( 
  <list>
    <div className="container">
      <h1>Topic</h1>
      <p>Sample Text</p>
    </div>

    <section className = "bookList">
    <Book/>
    <Book/>
    <Book/>
    <Book/>
    </section>
  </list>
  );
}

const Book = () => {
  return (
    <article className="book"> 
      <Image></Image>
      <Title></Title>
      <Specs></Specs>
    </article>
  )
}

const Image = () => {

  return <img src = "https://images-na.ssl-images-amazon.com/images/I/41vMYgD92xL.jpg" alt ="image" ></img>
}

const Title = () => {
  return <h1>Acer Inspiron Laptop</h1>
}

const Specs = () => {
  return <h4>Core i7 Laptops</h4>
}

//Attaching the component to the HTML interface.
ReactDom.render(<BookList/>, document.getElementById('root'));
