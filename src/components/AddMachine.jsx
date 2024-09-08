import React from 'react'

const AddMachine = () => {
  return (
    <div className="container">
      <h2>Add Driver</h2>
      <div className="row g-2 px-5 shadow p-3 mt-2 bg-white rounded">
        <div className="col col-12 col-sm-12 col-md-6">
          <label htmlFor="" className="form-label">Machine Id</label>
          <input type="text" className="form-control" />
        </div>
        <div className="col col-12 col-sm-12 col-md-6">
          <label htmlFor="" className="form-label">Longitude</label>
          <input type="text" className="form-control" />
        </div>
        <div className="col col-12 col-sm-12 col-md-6">
          <label htmlFor="" className="form-label">Latitude</label>
          <input type="text" className="form-control" />
        </div>

        <div className="col col-12 col-sm-12 col-md-12 mt-3">
          <div className='d-flex gap-2 w-25 justify-content-end'>
            <button className="btn btn-success w-100">Add Machine</button>
          </div>
        </div>

      </div>
    </div>
  )
}

export default AddMachine