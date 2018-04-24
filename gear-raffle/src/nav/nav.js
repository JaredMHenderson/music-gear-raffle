import React, { Component } from 'react';
import './nav.css';
import logo from '../musicGearLogo.png';

export default class Navbar extends Component {

    render() {
        return (
            <div>
              <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <a className="navbar-brand" href="/"><img id="logo" src={logo} alt="gear raffle logo" /></a>
                  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarToggler" aria-controls="navbarToggler" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                  </button>

                  <div className="collapse navbar-collapse" id="navbarToggler">
                    <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
                      <li className="nav-item">
                        <a className="nav-link" href="/">Home <span className="sr-only">(current)</span></a>
                      </li>
                      <li className="nav-item">
                        <a className="nav-link" href="/create-raffle">Create Raffle</a>
                      </li>
                      <li className="nav-item dropdown">
                        <a className="nav-link dropdown-toggle" href="#" data-toggle="dropdown">Login / Join</a>
                        <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                            <a className="dropdown-item" data-toggle="modal" data-target="#loginModal">Login</a>
                            <a className="dropdown-item" data-toggle="modal" data-target="#createAccountModal">Create Account</a>
                        </div>
                      </li>
                    </ul>
                  </div>
              </nav>

{/* <!-- LOGIN Modal --> */}

              <div className="modal fade" id="loginModal" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog" role="document">
                  <div className="modal-content">
                    <div className="modal-header">
                      <h5 className="modal-title" id="exampleModalLabel">Login</h5>
                        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                          <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div className="modal-body">
                      <form action="" method="POST">
                        <div className="form-group">
                          <label htmlFor="">Username</label>
                            <input type="text" className="form-control" id="username" placeholder="Username" />
                        </div>
                        <div className="form-group">
                          <label htmlFor="">Password</label>
                            <input type="text" className="form-control" id="username" placeholder="Password" />
                        </div>
                          <button type="submit" className="btn btn-dark">Login</button>
                      </form>
                    </div>
                  </div>
                </div>
              </div>

{/* <!-- Create Account Modal --> */}

              <div className="modal fade" id="createAccountModal" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog" role="document">
                  <div className="modal-content">
                    <div className="modal-header">
                      <h5 className="modal-title" id="exampleModalLabel">Create an Account</h5>
                        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                          <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div className="modal-body">
                      <form action="" method="POST">
                        <div className="form-group">
                          <label htmlFor="">Email</label>
                            <input type="text" className="form-control" id="create-acount-email" placeholder="Email" />
                        </div>
                        <div className="form-group">
                          <label htmlFor="">Password</label>
                            <input type="text" className="form-control" id="create-account-password" placeholder="Password" />
                        </div>
                        <div className="form-group">
                          <label htmlFor="">Confirm Password</label>
                            <input type="text" className="form-control" id="create-account-confirm-password" placeholder="Confirm Password" />
                        </div>
                          <button type="submit" className="btn btn-dark">Create</button>
                      </form>
                    </div>
                  </div>
                </div>
              </div>

        </div>
        );
    }
}
