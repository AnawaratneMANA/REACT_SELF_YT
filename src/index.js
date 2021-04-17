//Importing react
import React from 'react'

//Importing React-DOM 
import ReactDom from 'react-dom'

//Adding some CSS -> Importing CSS
import './index.css'

//Importing the object array from external class
//With JS files we don't have to mentioned the extension.
import {Laptops} from './books'

//Importing the Book class
import Book from './Book'


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

//Attaching the component to the HTML interface.
ReactDom.render(<BookList />, document.getElementById('root'));
