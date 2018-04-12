import React from "react";
import "./Browse-menu.css";


const Browse = (props) => (
                            <li className="nav-item dropdown">
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
                            </li>
)

export default Browse;


        