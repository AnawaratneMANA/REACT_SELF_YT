//Importing react
import React from 'react'

//Importing React-DOM 
import ReactDom  from 'react-dom'

//Adding some CSS -> Importing CSS
import './index.css'

//Creating a Laptop Class
const AcerLaptop = {
  img: "https://images-na.ssl-images-amazon.com/images/I/41vMYgD92xL.jpg",
  model: "Inspiron 15",
  manfacture: "Acer",
  status: 'In Stock'
}

const LenovoLaptop = {
  img: "https://m.media-amazon.com/images/I/61dZniqZ32L._AC_UY218_.jpg",
  model: "Lenovo T480",
  manfacture: "Lenovo"

}

//Adding CSS classes to the Component.
function BookList(){
  return ( 
  <list>
    <div className="container">
      <h1>Topic</h1>
      <p>Sample Text</p>
    </div>

    <section className = "bookList">
    <Book img={AcerLaptop.img} manfacture={AcerLaptop.manfacture} model ={AcerLaptop.model} stock = {AcerLaptop.status}/>
    <Book img={LenovoLaptop.img} manfacture={LenovoLaptop.manfacture} model ={LenovoLaptop.model}>
      <p>This Laptop is work very well with business</p>
    </Book>
    </section>
  </list>
  );
}

//Adding different parameters to the book component
const Book = (props) => {
  //This is called object distruturing in JavaScript.
  const {img, manfacture, model, stock, children} = props;
  return (
    <article className="book"> 
      <img src={img} alt ="image"></img>
      <h1>{manfacture}</h1>
      <h4>{model} </h4>
      <h4>{stock}</h4>
      {children}
    </article>
  )
}

//Attaching the component to the HTML interface.
ReactDom.render(<BookList/>, document.getElementById('root'));
