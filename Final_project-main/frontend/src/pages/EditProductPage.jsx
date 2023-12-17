// EditProductPage.jsx

import React from 'react';
import { Link } from 'react-router-dom';
import InventoryForm from '../InventoryForm';

const EditProductPage = () => {
  
  const handleOnSubmit = (data) => {
    
    console.log('Save to inventory:', data);
  };

  const handleOnChange = (e) => {
   
    console.log('Form input changed:', e.target.name, e.target.value);
  };

  
  const formData = {
    id: '', 
    productName: '',
    brand: '',
    quantity: '',
    image: '',
    price: '',
  };

  return (
    <div>
      <h1>Edit Product</h1>
      <InventoryForm
        formData={formData}
        handleOnChange={handleOnChange}
        handleOnSubmit={handleOnSubmit}
        toggleEdit={true}
      />
      <Link to="/main">Back to Inventory</Link>
    </div>
  );
};

export default EditProductPage;
