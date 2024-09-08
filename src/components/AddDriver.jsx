import React from 'react'

const AddDriver = () => {
    return (
        <div className="container">
            <h2>Add Driver</h2>
            <div className="row g-2 px-5 shadow p-3 mt-2 bg-white rounded">
                <div className="col col-12 col-sm-12 col-md-6">
                    <label htmlFor="" className="form-label">Driver Name</label>
                    <input type="text" className="form-control" />
                </div>
                <div className="col col-12 col-sm-12 col-md-6">
                    <label htmlFor="" className="form-label">Address</label>
                    <input type="text" className="form-control" />
                </div>
                <div className="col col-12 col-sm-12 col-md-6">
                    <label htmlFor="" className="form-label">Mobile No</label>
                    <input type="text" className="form-control" />
                </div>
                <div className="col col-12 col-sm-12 col-md-6">
                    <label htmlFor="" className="form-label">Alternate MobileNo</label>
                    <input type="text" className="form-control" />
                </div>
                <div className="col col-12 col-sm-12 col-md-6">
                    <label htmlFor="" className="form-label">Email-Id</label>
                    <input type="text" className="form-control" />
                </div>
                <div className="col col-12 col-sm-12 col-md-6">
                    <label htmlFor="" className="form-label">Id Proof</label>
                    <select name="" id="" className="form-control">
                        <option value="">--Select--</option>
                        <option value="">Aadhar </option>
                        <option value="">Driving Liscence</option>
                        <option value="">Pan Card</option>
                    </select>
                </div>
                <div className="col col-12 col-sm-12 col-md-6">
                    <label htmlFor="" className="form-label">Upload selected Idproof</label>
                    <input type="file" className="form-control" />
                </div>
                <div className="col col-12 col-sm-12 col-md-6">
                    <label htmlFor="" className="form-label">Vechicle No</label>
                    <input type="text" className="form-control" />
                </div>
                <div className="col col-12 col-sm-12 col-md-12 mt-3">
                    <div className='d-flex gap-2 w-25 justify-content-end'>
                        <button className="btn btn-success w-100">Add Driver</button>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default AddDriver