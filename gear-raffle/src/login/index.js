import React, { Component } from 'react';


import "./login.css";

export default class login extends Component {
  render() {
    return (
      <div>
          <li className="nav-item dropdown">
            <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    Join/Login
                </a>
                <div className="dropdown-menu" aria-labelledby="navbarDropdown">                                   
                    <a className="dropdown-item" data-toggle="modal" data-target="#loginModal">Login</a>
                    <a className="dropdown-item" data-toggle="modal" data-target="#createAccountModal">Create Account</a>
                    <div className="dropdown-divider"></div>
                    <a className="dropdown-item" href="#">Something else here</a>
                </div>
            </li> 

            {/* <!-- LOGIN Modal --> */}
      <div className="modal fade" id="loginModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
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
                  
                      
                  
                      <button type="submit" className="btn btn-primary">Login</button>
                  </form>                                                                                        
              </div>
              
          </div>
      </div>
  </div>
      </div>
    )
  }
}
