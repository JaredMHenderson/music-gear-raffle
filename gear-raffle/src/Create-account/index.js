import React from "react";
import "./Create-account.css";

const CreateAccount = () => (
         {/* <!-- Create Account Modal --> */}
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
)

export default CreateAccount;