import React from 'react';
import PropType from 'prop-types'
//Importing the image
import defaultImage from '../../../assets/default-image.jpeg'
const Product = ({image, name, price}) => {
  //Only if the image exist we are checking for the URL
  const url = image && image.url;
  return (
      <article className = 'product'>
        <h4>Single Product</h4>
        <img src={url || defaultImage} alt={name}/>
        <h4>{name}</h4>
        <p>${price || 3.99}</p>
      </article>
  );
};

Product.propTypes = {
  image: PropType.object.isRequired,
  name: PropType.string.isRequired,
  price: PropType.number.isRequired,

};
// Product.defaultProps = {
//   name: 'default name',
//   price: 3.99,
//   image: defaultImage
// }
export default Product;
