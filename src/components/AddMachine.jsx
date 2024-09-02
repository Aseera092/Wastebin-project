import React from 'react'

const AddMachine = () => {
  return (
    <div>
      <div className="container">
        <div className="row">
          <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
            <label htmlFor="" className="form-label">Machine Id</label>
            <input type="text" className="form-control" />
          </div>
          <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
            <label htmlFor="" className="form-label">Longitude</label>
            <input type="text" className="form-control" />
          </div>
          <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
            <label htmlFor="" className="form-label">Latitude</label>
            <input type="text" className="form-control" />
          </div>
          <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12 mt-2">
                <button className="btn btn-success">Add</button>
            </div>
            
        </div>
      </div>
    </div>
  )
}

export default AddMachine