import React, { useState } from 'react'
import { useEffect } from 'react'
import { deleteMachine, getMachine, updateMachine } from '../services/machine'
import { toast } from 'react-toastify'

const ViewallMachine = () => {

  const [machines, setMachines] = useState([])
  const [selectedMachine,setSelectedMachine] = useState()

  const init = () => {
    getMachine().then((res) => {
      setMachines(res.data)
    })
  }

  useEffect(() => {
    init()
  }, [])

  const deleteMach = (id) => {
    deleteMachine(id).then(res => {
      if (res.status) {
        toast.success("Deleted Successfully")
        init()
      }
    })
  }

  const submitAction = (e) => {
    e.preventDefault()
  
    const machineid = document.getElementById("machineId")
    const latitude = document.getElementById("latitude")
    const longitude = document.getElementById("longitude")
  
    const data = {
      machineId: machineid.value,
      latitude: latitude.value,
      longitude: longitude.value
    }
  
    updateMachine(selectedMachine._id,data).then((res) => {
      if (res.status) {
        init()
        toast.success("Successfully updated")
        document.getElementById('modal-close').click();
      }
    })
  
  }

  return (
    <div className='container'>
      <h2>Machines</h2>
      <div className='table-container p-3 px-5 shadow p-3 mt-2 bg-white rounded '>
        <table class="table">
          <thead>
            <tr>
              <th scope="col">Sl No</th>
              <th scope="col">Machine ID</th>
              <th scope="col">Latitude</th>
              <th scope="col">Longitude</th>
              <th scope="col">Waste Level(%)</th>
              <th scope="col">Status</th>
              <th scope="col">Last Collection Date</th>
              <th scope="col">Action</th>
            </tr>
          </thead>
          <tbody>
            {
              machines.map((data, ind) => {
                return (
                  <tr>
                    <th scope="row">{ind + 1}</th>
                    <td>{data.machineId}</td>
                    <td>{data.latitude}</td>
                    <td>{data.longitude}</td>
                    <td>{data.storage}</td>
                    <td><span class={data.status == "online" ? `badge bg-success` : `badge bg-danger`}>{data.status}</span></td>
                    <td>{data.lastCollection ? data.lastCollection : '-'}</td>
                    <td>
                      <div className='d-flex'>
                        <button className='btn text-primary' data-bs-toggle="modal" data-bs-target="#editmodal" onClick={()=>{setSelectedMachine(data)}}><i class="bi bi-pencil-fill"></i></button>
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
                <h5 class="modal-title" id="exampleModalLongTitle">Update Machine </h5>
                <button type="button" id="modal-close" class="btn text-danger" data-bs-dismiss="modal" aria-label="Close">
                  <i class="bi bi-x-circle"></i>
                </button>
              </div>
              <div class="modal-body">
                
                  <div className="row g-2">
                    <div className="col col-12 col-sm-12 col-md-12">
                      <label htmlFor="" className="form-label">Machine Id</label>
                      <input type="text" className="form-control" id='machineId' defaultValue={selectedMachine && selectedMachine.machineId} placeholder='Enter Machine ID' required />
                    </div>
                    <div className="col col-12 col-sm-12 col-md-12">
                      <label htmlFor="" className="form-label">Longitude</label>
                      <input type="text" className="form-control" id='latitude' defaultValue={selectedMachine && selectedMachine.latitude} placeholder='Enter Latitue' required />
                    </div>
                    <div className="col col-12 col-sm-12 col-md-12">
                      <label htmlFor="" className="form-label">Latitude</label>
                      <input type="text" className="form-control" id='longitude' defaultValue={selectedMachine && selectedMachine.longitude} placeholder='Enter Longitude' required />
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

export default ViewallMachine