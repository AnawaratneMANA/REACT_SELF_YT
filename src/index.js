//Importing react
import React from 'react'

//Importing React-DOM 
import ReactDom  from 'react-dom'

//Adding some CSS



function BookList(){
  return ( 
  <list>
    <h1>Topic</h1>
    <p>Sample Text</p>
    <Book/>
    <Book/>
    <Book/>
    <Book/>
  </list>
  );
}

const Book = () => {
  return (
    <article> 
      <Image></Image>
      <Title></Title>
    </article>
  )
}

const Image = () => {

  return <img src = "https://images-na.ssl-images-amazon.com/images/I/41vMYgD92xL.jpg" alt ="image" ></img>
}

const Title = () => {
  return <h4>Acer Inspiron Laptop</h4>
}

//Attaching the component to the HTML interface.
ReactDom.render(<BookList/>, document.getElementById('root'));
