import React from 'react';

const Products = (props) => {
  const { id } = props.match.params;
  return <div>This is product number {id}</div>;
};

export default Products;
