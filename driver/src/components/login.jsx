import React from 'react'

export default function Login() {
    return (
        <div class="row text-center justify-content-center align-items-center" style={{height:'100vh'}}>
            <div class="col-md-6 ">
                <div class="card">
                    <div class="card-body">
                        <div class="login-img">
                            <img src="https://cdn-icons-png.flaticon.com/512/295/295128.png" height={'100px'} width={'100px'}/>
                        </div>
                        <div class="login-title">
                            <h4>Driver Log In</h4>
                        </div>
                        <div class="login-form mt-4">
                            <form>
                                <div class="form-row">
                                    <div class="form-group col-md-12">
                                        <input id="mobile" name="Full Name" placeholder="Enter Mobile Number" class="form-control" type="text" />
                                    </div>
                                    <div class="form-group col-md-12">
                                        <input type="password" class="form-control" id="pass" placeholder="Password" />
                                    </div>
                                </div>

                                <div class="form-row">
                                    <button type="button" class="btn btn-danger btn-block">Submit</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
