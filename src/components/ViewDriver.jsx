import React, { useEffect, useState } from 'react'

import { deleteDriver, getDriver, updateDriver } from '../services/driver'
import { toast } from 'react-toastify'


const ViewDriver = () => {
    const [Driver, setDriver] = useState([])
    const [selectedDriver, setselectedDriver] = useState()

    const init = () => {
        getDriver().then((res) => {
            setDriver(res.data)
        })
    }

    useEffect(() => {
        init()
    }, [])

    const deleteMach = (id) => {
        deleteDriver(id).then(res => {
            if (res.status) {
                toast.success("Deleted Successfully")
                init()
            }
        })
    }
    const handleChange = (e) => {
        const { name, value } = e.target;
        setDriver({
          ...Driver,
          [name]: value,
        });
      };
    const handleFileChange = (e) => {
        setDriver({
          ...Driver,
          uploadIdProof: e.target.files[0],
        });
      };

    const submitAction = (e) => {
        e.preventDefault()

        const driverName = document.getElementById("driverName")
        const address = document.getElementById("address")
        const mobileNo = document.getElementById("mobileNo")
        const alternateMobileNo = document.getElementById("alternateMobileNo")
        const emailId = document.getElementById("emailId")
        const idProof = document.getElementById("idProof")
        const uploadIdProof = document.getElementById("uploadIdProof")
        const vehicleNo = document.getElementById("vehicleNo")

        const data = {
            driverName: driverName.value,
            address: address.value,
            mobileNo: mobileNo.value,
            alternateMobileNo: alternateMobileNo.value,
            emailId: emailId.value,
            idProof: idProof.value,
            uploadIdProof: uploadIdProof.value,
            vehicleNo: vehicleNo.value
        }

        updateDriver(selectedDriver._id, data).then((res) => {
            if (res.status) {
                init()
                toast.success("Successfully updated")
                document.getElementById('modal-close').click();
            }
        })

    }

    return (
        <div className='container'>
            <h2>Drivers</h2>
            <div className='table-container p-3 px-5 shadow p-3 mt-2 bg-white rounded '>
                <table class="table">
                    <thead>
                        <tr>
                            <th scope="col">No</th>
                            <th scope="col">Driver Name</th>
                            <th scope="col">Address</th>
                            <th scope="col">Mobile No</th>
                            <th scope="col">Alternate Mobile No</th>
                            <th scope="col">Email-ID</th>
                            <th scope="col">ID Proof</th>
                            <th scope="col">Upload ID proof</th>
                            <th scope="col">Vehicle No</th>
                            <th scope="col">Status</th>
                            <th scope="col">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            Driver.map((data, ind) => {
                                return (
                                    <tr>
                                        <th scope="row">{ind + 1}</th>
                                        <td>{data.driverName}</td>
                                        <td>{data.address}</td>
                                        <td>{data.MobileNo}</td>
                                        <td>{data.alternateMobileNo}</td>
                                        <td>{data.emailId}</td>
                                        <td>{data.idProof}</td>
                                        <td>{data.uploadIdproof}</td>
                                        <td>{data.vehicleNo}</td>
                                        <td><span class={data.status == "online" ? `badge bg-success` : `badge bg-danger`}>{data.status}</span></td>

                                        <td>
                                            <div className='d-flex'>
                                                <button className='btn text-primary' data-bs-toggle="modal" data-bs-target="#editmodal" onClick={() => { setselectedDriver(data) }}><i class="bi bi-pencil-fill"></i></button>
                                                <button className='btn text-danger' onClick={() => deleteMach(data._id)}><i class="bi bi-trash3-fill"></i></button>
                                            </div>
                                        </td>
                                    </tr>
                                )
                            })
                        }
                    </tbody>
                </table>

                <div class="modal fade" id="editmodal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLongTitle" aria-hidden="true">
                    <div class="modal-dialog" role="document">
                        <div class="modal-content">
                            <form onSubmit={submitAction}>
                                <div class="modal-header justify-content-between">
                                    <h5 class="modal-title" id="exampleModalLongTitle">Update Driver </h5>
                                    <button type="button" id="modal-close" class="btn text-danger" data-bs-dismiss="modal" aria-label="Close">
                                        <i class="bi bi-x-circle"></i>
                                    </button>
                                </div>
                                <div class="modal-body">

                                    <div className="row g-2">
                                        <div className="col col-12 col-sm-12 col-md-12">
                                            <label htmlFor="" className="form-label">Driver Name</label>
                                            <input type="text" className="form-control" id='driverName' defaultValue={selectedDriver && selectedDriver.driverName} placeholder='Enter driverName' required />
                                        </div>
                                        <div className="col col-12 col-sm-12 col-md-12">
                                            <label htmlFor="" className="form-label">Address</label>
                                            <input type="text" className="form-control" id='address' defaultValue={selectedDriver && selectedDriver.address} placeholder='Enter address' required />
                                        </div>
                                        <div className="col col-12 col-sm-12 col-md-12">
                                            <label htmlFor="" className="form-label">Mobile No</label>
                                            <input type="text" className="form-control" id='MobileNo' defaultValue={selectedDriver && selectedDriver.MobileNo} placeholder='Enter MobileNo' required />
                                        </div>
                                        <div className="col col-12 col-sm-12 col-md-12">
                                            <label htmlFor="" className="form-label">Alternate Mobile No</label>
                                            <input type="text" className="form-control" id='alternateMobileNo' defaultValue={selectedDriver && selectedDriver.alternateMobileNo} placeholder='Enter alternateMobileNo' required />
                                        </div>
                                        <div className="col col-12 col-sm-12 col-md-12">
                                            <label htmlFor="" className="form-label">Email-Id</label>
                                            <input type="text" className="form-control" id='emailId' defaultValue={selectedDriver && selectedDriver.emailId} placeholder='Enter emailId' required />
                                        </div>
                                        <div className="col col-12 col-sm-12 col-md-6">
                                            <label className="form-label">Id Proof</label>
                                            <select
                                                name="idProof"
                                                value={Driver.idProof}
                                                onChange={handleChange}
                                                className="form-control"
                                                required
                                            >
                                                <option value="">--Select--</option>
                                                <option value="Aadhar">Aadhar</option>
                                                <option value="Driving License">Driving License</option>
                                                <option value="Pan Card">Pan Card</option>
                                            </select>
                                        </div>
                                        <div className="col col-12 col-sm-12 col-md-6">
                                            <label className="form-label">Upload selected Id Proof</label>
                                            <input
                                                type="file"
                                                name="uploadIdproof"
                                                onChange={handleFileChange}
                                                className="form-control"
                                                required
                                            />
                                        </div>
                                        <div className="col col-12 col-sm-12 col-md-12">
                                            <label htmlFor="" className="form-label">vehicle No</label>
                                            <input type="text" className="form-control" id='vehicleNo' defaultValue={selectedDriver && selectedDriver.vehicleNo} placeholder='Enter vehicleNo' required />
                                        </div>
                                    </div>

                                </div>
                                <div class="modal-footer">
                                    <button type="button" class="btn btn-danger" data-bs-dismiss="modal">Close</button>
                                    <button type="submit" class="btn btn-primary">Save changes</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ViewDriver