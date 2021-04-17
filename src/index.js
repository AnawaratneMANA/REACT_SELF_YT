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
    </section>
  </list>
  );
}

const Book = () => {
  const Brand = 'Acer';
  return (
    <article className="book"> 
      <img src = "https://images-na.ssl-images-amazon.com/images/I/41vMYgD92xL.jpg" alt ="image" ></img>
      <h1>{Brand.toUpperCase()} {5} Inspiron Laptop</h1>
      <h4 style={{color: '#617d98', fontSize: '0.75rem', marginTop: '0.25rem'}}>Core i7 Laptops</h4>
    </article>
  )
}

//Attaching the component to the HTML interface.
ReactDom.render(<BookList/>, document.getElementById('root'));
