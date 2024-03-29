import React from 'react'

const Login = () => {
    return (
        <div>
            {/*<!-- Button trigger modal -->*/}
            <button type="button" className="btn btn-outline-primary ms-auto" data-bs-toggle="modal" data-bs-target="#loginModal">
                Login
            </button>

            {/*<!-- Modal -->*/}
            <div className="modal fade" id="loginModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h1 className="modal-title fs-5" id="exampleModalLabel">
                                <span className="fa fa-sign-in me-1"></span>Login</h1>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            <button className="btn btn-primary w-100 mb-4"> 
                               <span className="fa fa-google me-2"></span> Sign in with Google
                            </button>
                            <button className="btn btn-primary w-100 mb-4"> 
                               <span className="fa fa-facebook me-2"></span> Sign in with Facebook
                            </button>
                            <form>
                                <div className="mb-3">
                                    <label htmlFor="exampleInputEmail1" className="htmlForm-label">Email address</label>
                                    <input type="email" className="htmlForm-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                                        <div id="emailHelp" className="htmlForm-text">We'll never share your email with anyone else.</div>
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="exampleInputPassword1" className="htmlForm-label">Password</label>
                                    <input type="password" className="htmlForm-control" id="exampleInputPassword1" />
                                </div>
                                <div className="mb-3 htmlForm-check">
                                    <input type="checkbox" className="htmlForm-check-input" id="exampleCheck1" />
                                        <label className="htmlForm-check-label" htmlFor="exampleCheck1">Check me out</label>
                                </div>
                                <button type="submit" className="btn btn-outline-primary w-100 mt-5">Submit</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Login