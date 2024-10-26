import React, { useState } from 'react';
import { UserRequest } from '../services/userReq';// Replace with actual API call function
import { getValue } from '@testing-library/user-event/dist/utils';

const WasteCollectionRequestForm = () => { // Rename component for clarity
  const [username, setUsername] = useState(''); // Assuming you have a way to get the current user ID (e.g., from server-side rendering)
  const [address, setAddress] = useState('');
  const [wasteType, setWasteType] = useState('');
  const [quantity, setQuantity] = useState('');
  const [location, setLocation] = useState('');
  const [mobileno, setmobileno] = useState('');
  const [errors, setErrors] = useState({});

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validate form data
    const errors = {};
    if (!address) errors.address = 'Address is required';
    if (!wasteType) errors.wasteType = 'Waste type is required';
    if (!quantity) errors.quantity = 'Quantity is required';

    if (Object.keys(errors).length > 0) {
      setErrors(errors);
      return;
    }

    try {
      const response = await UserRequest(username, address, wasteType, quantity, location, mobileno);

      if (response.status === 201) {
        // Handle successful request (e.g., show a success message, clear form)
        console.log('Request created successfully');
      } else {
        // Handle error (e.g., show an error message)
        console.error('Error creating request:', await response.text());
      }
    } catch (error) {
      console.error('Error creating request:', error);
    }
  };

  return (
    <div className="container">
      <h2>Add Driver</h2> {/* Adjust title if not applicable */}
      <form onSubmit={handleSubmit}>
        <div className="row g-2 px-5 shadow p-3 mt-2 bg-white rounded">
        <div className="col col-12 col-sm-12 col-md-6">
            <label htmlFor="longitude" className="form-label">UserNname</label>
            <input type="text" className="form-control" id='username' value={getValue.username} placeholder='Enter username' required onChange={setUsername}/>
          </div>
          <div className="col col-12 col-sm-12 col-md-6">
            <label className="form-label">Address</label>
            <input type="text"  name="address" value={address}onChange={(e) => setAddress(e.target.value)}
              className={`form-control ${errors.address ? 'is-invalid' : ''}`} required
            />
          </div>
          <div className="col col-12 col-sm-12 col-md-6">
            <label htmlFor="longitude" className="form-label">WasteType</label>
            <input type="text" className="form-control" id='wastetype' value={getValue.wasteType} placeholder='Enter wastetype' required onChange={setWasteType} />
          </div>
          <div className="col col-12 col-sm-12 col-md-6">
            <label htmlFor="longitude" className="form-label">Quantity</label>
            <input type="text" className="form-control" id='quantity' value={getValue.quantity} placeholder='Enter quantity' required onChange={setQuantity}/>
          </div>
          <div className="col col-12 col-sm-12 col-md-6">
            <label htmlFor="longitude" className="form-label">Location</label>
            <input type="text" className="form-control" id='location' value={getValue.location} placeholder='Enter location' required onChange={setLocation}/>
          </div>
          <div className="col col-12 col-sm-12 col-md-6">
            <label htmlFor="longitude" className="form-label">MobileNo</label>
            <input type="text" className="form-control" id='mobileno' value={getValue.mobileno} placeholder='Enter mobileno' required onChange={setmobileno}/>
          </div>
          {/* Add other input fields for waste type, quantity, location, etc. */}
          <button type="submit" className="btn btn-primary">
            Submit Request
          </button>
        </div>
      </form>
    </div>
  );
};

export default WasteCollectionRequestForm;