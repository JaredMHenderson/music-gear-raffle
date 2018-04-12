import React, {Component} from 'react';
import './nav.css';
import logo from "./logo.png";
class Navbar extends Component
{

    render()
    {
        return(
            <div>

                

                <nav className="navbar navbar-expand-lg navbar-light bg-light">

                    <a className="navbar-brand" href="/"><img id="logo" src={ logo } alt="gear raffle logo"/> </a>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav mr-auto">
                            <li className="nav-item active">
                                <a className="nav-link" href="#">Home <span className="sr-only">(current)</span></a>
                            </li>
                            
                            <li className="nav-item">
                                <a className="nav-link" href="#">Sell Your Gear</a>
                            </li>

                            {/* <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                    Browse By Category</a>

                                <div className="dropdown-menu" aria-labelledby="navbarDropdown">                                   
                                    <a className="dropdown-item" data-toggle="" data-target="">Electric Guitars</a>
                                    <a className="dropdown-item" data-toggle="" data-target="">Acoustic Guitars</a>
                                    <a className="dropdown-item" data-toggle="" data-target="">Bass Guitars</a>
                                    <a className="dropdown-item" data-toggle="" data-target="">Amps</a>
                                    <a className="dropdown-item" data-toggle="" data-target="">Effects and Pedals</a>
                                    <a className="dropdown-item" data-toggle="" data-target="">Drums and Percussion</a>
                                    <a className="dropdown-item" data-toggle="" data-target="">Pro Audio</a>
                                    <a className="dropdown-item" data-toggle="" data-target="">Keyboards and Synths</a>
                                    <a className="dropdown-item" data-toggle="" data-target="">Other</a>
                                </div>
                            </li> */}

                            {/* <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                    Join/Login
                                </a>
                                <div className="dropdown-menu" aria-labelledby="navbarDropdown">                                   
                                    <a className="dropdown-item" data-toggle="modal" data-target="#loginModal">Login</a>
                                    <a className="dropdown-item" data-toggle="modal" data-target="#createAccountModal">Create Account</a>
                                    <div className="dropdown-divider"></div>
                                    <a className="dropdown-item" href="#">Something else here</a>
                                </div>
                            </li> */}

                        </ul>
                        <form className="form-inline my-2 my-lg-0">
                            <input className="form-control mr-sm-2" type="search" placeholder="Find A Raffle" aria-label="Search"/>
                                <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
                        </form>
  </div>
</nav>
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

                <!-- Create Account Modal -->
                <div className="modal fade" id="createAccountModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div className="modal-dialog" role="document">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title" id="exampleModalLabel">Create Account</h5>
                                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                    <span aria-hidden="true">&times;</span>
                                </button>
                            </div>
                            <div className="modal-body">


                                <form action="" method="POST">

                                    <div className="form-group">
                                        <label htmlFor="">Username</label>
                                        <input type="text" class="form-control" id="create-acount-username" placeholder="Username" />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="">Email</label>
                                        <input type="text" class="form-control" id="create-acount-email" placeholder="Email" />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="">Password</label>
                                        <input type="text" className="form-control" id="create-account-password" placeholder="Password" />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="">Confirm Password</label>
                                        <input type="text" className="form-control" id="create-account-confirm-password" placeholder="Confirm Password" />
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

export default Navbar;