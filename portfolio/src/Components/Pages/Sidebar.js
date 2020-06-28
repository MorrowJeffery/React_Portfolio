import React from 'react';
import profpic from '../../assets/ProfPic.png';
import resume from '../../assets/Resume.pdf';
import { Link } from 'react-router-dom';

function SideBar() {
    return (
        <>
            <div className="col-md-3">
                <div className="profile-sidebar">
                    <div className="profile-userpic">
                        <img src={profpic} className="img-responsive" alt="Profile Pic"/>
                    </div>
                    <div className="profile-usertitle">
                        <div className="profile-usertitle-name">
                            Jeff Morrow
                        </div>
                        <div className="profile-usertitle-job">
                            Developer
                        </div>
                    </div>
                    <div className="profile-userbuttons">
                        <button onClick={ () => window.open("https://www.linkedin.com/in/jeffery-morrow-530348141/", "_blank") } type="button" className="btn btn-success btn-sm">LinkedIn</button>
                        <button onClick={ () => window.open("https://github.com/MorrowJeffery", "_blank") } type="button" className="btn btn-danger btn-sm">Github</button>
                        <button onClick={ () => window.open(resume, "_blank") } type="button" className="btn btn-info btn-sm">Resume</button>
                    </div>
                    <div className="profile-usermenu">
                        <ul className="nav">
                            <li className="">
                                <Link to="/">
                                    <i className="glyphicon glyphicon-home"></i>
                                    About Me 
                                </Link>
                            </li>
                            <li>
                                <Link to="/portfolio">
                                    <i className="glyphicon glyphicon-user"></i>
                                    Portfolio 
                                </Link>
                            </li>
                            <li>
                                <Link to="/contact">
                                    <i className="glyphicon glyphicon-ok"></i>
                                    Contact Me 
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </>
    )
}

export default SideBar;