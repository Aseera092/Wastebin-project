import React from 'react';
import { addMachine } from '../services/machine';
import { toast } from 'react-toastify';

const submitAction = async (e) => {
  e.preventDefault();

  const machineid = document.getElementById("machineId");
  const latitude = document.getElementById("latitude");
  const longitude = document.getElementById("longitude");

  const data = {
    machineId: machineid.value,
    latitude: latitude.value,
    longitude: longitude.value
  };

  try {
    const res = await addMachine(data);
    if (res.status) {
      toast.success("Successfully added");
      machineid.value = "";
      latitude.value = "";
      longitude.value = "";
    } else {
      toast.error(res.error || "Failed to add machine. Please try again.");
    }
  } catch (error) {
    toast.error("An error occurred while adding the machine.");
  }
};

const AddMachine = () => {
  return (
    <div className="container">
      <h2>Add Machine</h2>
      <form onSubmit={submitAction}>
        <div className="row g-2 px-5 shadow p-3 mt-2 bg-white rounded">
          <div className="col col-12 col-sm-12 col-md-6">
            <label htmlFor="machineId" className="form-label">Machine Id</label>
            <input type="text" className="form-control" id='machineId' placeholder='Enter Machine ID' required />
          </div>
          <div className="col col-12 col-sm-12 col-md-6">
            <label htmlFor="latitude" className="form-label">Latitude</label>
            <input type="text" className="form-control" id='latitude' placeholder='Enter Latitude' required />
          </div>
          <div className="col col-12 col-sm-12 col-md-6">
            <label htmlFor="longitude" className="form-label">Longitude</label>
            <input type="text" className="form-control" id='longitude' placeholder='Enter Longitude' required />
          </div>

          <div className="col col-12 col-sm-12 col-md-12 mt-3">
            <div className='d-flex gap-2 w-25 justify-content-end'>
              <button type="submit" className="btn btn-success w-100">Add Machine</button>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default AddMachine;
