import React from 'react'

const ViewDriver = () => {
    return (
        <div className='container'>
            <h2>Drivers</h2>
            <div className='table-container p-3 px-5 shadow p-3 mt-2 bg-white rounded '>
                <table class="table">
                    <thead>
                        <tr>
                        <th scope="col">No</th>
                            <th scope="col">Driver ID</th>
                            <th scope="col">Driver Name</th>
                            <th scope="col">Mobile No</th>
                            <th scope="col">Vehicle No</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <th scope="row">1</th>
                            <td>Mark</td>
                            <td>Otto</td>
                            <td>@mdo</td>
                            <td>@mdo</td>
                        </tr>
                        <tr>
                            <th scope="row">2</th>
                            <td>Jacob</td>
                            <td>Thornton</td>
                            <td>@fat</td>
                            <td>@fat</td>
                        </tr>
                        <tr>
                            <th scope="row">3</th>
                            <td >Larry the Bird</td>
                            <td>@twitter</td>
                            <td>@twitter</td>
                            <td>@twitter</td>
                        </tr>

                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default ViewDriver