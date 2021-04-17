//Importing react
import React from 'react'

//Importing React-DOM 
import ReactDom from 'react-dom'

//Adding some CSS -> Importing CSS
import './index.css'

//Creating a Laptop Class
/*
  In react we can iterate in a object array in one go.
  But this is possible with string array which is much simpler form.
*/
const Laptops = [
  {
    id: 1,
    img: "https://images-na.ssl-images-amazon.com/images/I/41vMYgD92xL.jpg",
    model: "Inspiron 15",
    manfacture: "Acer",
    status: 'In Stock'
  },

  {
    id: 2,
    img: "https://m.media-amazon.com/images/I/61dZniqZ32L._AC_UY218_.jpg",
    model: "Lenovo T480",
    manfacture: "Lenovo",
  },

  {
    id: 3,
    img: "https://m.media-amazon.com/images/I/91kzJEfoVqL._AC_UL320_.jpg",
    model: "HP Elitebook 840",
    manfacture: "HP",
    status: 'Pre order'
  },


]

//Adding CSS classes to the Component.
function BookList() {
  return (
    <list>
      <div className="container">
        <h1>Topic</h1>
        <p>Sample Text</p>
      </div>

      <section className="bookList">
        {Laptops.map((laptop)  => {
            return (
              <Book key={laptop.id} {...laptop}></Book>
            )
        })}
      </section>
    </list>
  );
}

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

//Attaching the component to the HTML interface.
ReactDom.render(<BookList />, document.getElementById('root'));
