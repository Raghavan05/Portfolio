import React from "react";
import {FaTwitter,FaInstagram,FaGithub,FaYoutube} from "react-icons/fa";
import "./style.css";
import { NavLink } from "react-router-dom";

// import  ReactDOM  from "react-dom/client";
// import { render } from '@testing-library/react';

class Contact extends React.Component{
     constructor(){
         super();
         this.state = {subject:"",body:""};
     }
     validateform = Event=>{
         var subject = document.getElementById("subject").value;
         var body = document.getElementById("body").value;
         window.location.href = "mailto:ragavanr08n2002@gmail.com?subject="+subject+"&body"+body;
         Event.preventDefault();
         return false;
     }
    render(){
        return(
        <>
        <div className="heading">
            <div className="bg-c1 text-center" id = "heading">
                        <h1 className="myname">Raghavan</h1>
                        <p className="myoccpation">Full Stack Developer</p>
                        <ul className="nav nav-pills bottom-bar nav-justified" id="navigation">
                            <li className="nav-item">
                            <NavLink to={'/'} className="nav-link active" >Home</NavLink>
                            </li>
                            <li className="nav-item">
                            <NavLink to={'/About'} className="nav-link active" >About</NavLink>
                            </li>
                            <li className="nav-item">
                            <NavLink to={'/Contact'} className="nav-link active" >Contact</NavLink>
                            </li>
                        </ul>
                    </div>
            
            <div className="container c-2" id="mailme">
                <div className="row">
                    <div className="col-sm-8 offset-md-2">
                    <h1 style={{textAlign:"center" , color:"white"}} > Mail form </h1>
                        <form className="justify-content-center" onSubmit={this.validateform} target="_blank" method="GET">
                            <div className="form-group form-group-lg">
                                <label className="skills" for="subject">
                                    <strong style={{color : 'white'}}>Name</strong>
                                </label>
                                <input className="form-control" type={"text"} id="subject" required/>
                            </div>
                            <div className="form-group form-group-lg">
                                <label className="skills" for="body">
                                    <strong style={{color : 'white'}}>Feedback</strong>
                                </label>
                                <textarea className="form-control" rows={"5"} id="body" required/>
                            </div>
                            <br/>
                            <input type={"submit"} value="send" id="navigation" className="btn btn-primary"/>
                        </form>
                        {/* <form>
                        <div className="form-group">
                            <h1 style={{color:"white" , textAlign:"center"}}>Login</h1>
                            <label className="skills" for="Subject" style={{color:'white'}}>
                                Username
                            </label>
                            <input type="text" id="username" className="form-control" required/>
                        </div>
                        <div>
                            <label className="skills" for="Body" style={{color:'white'}}>Password</label>
                            <input type="password" id="pwd" className="form-control" required/>
                        </div>
                        <br/>
                        <input type="submit" id="navigation" value={"login"} className="btn btn-primary"/>
                    </form> */}
                    <br/>
                    </div>
                </div>
            </div>
            <div className="text-center footer" id="footer">
            <h4 style={{color:"white" ,textAlign:"center"}}> Phone: 9345890692 </h4>
                        <ul className="nav justify-content-center">
                        <li className="nav-item">
                               <a href="https://twitter.com/i_ragavanN" className="nav-link"
                               style={{color : 'white'}} target="_blank" rel="noreferrer">
                                   <FaTwitter style={{fontSize:"1.5rem"}}/>
                               </a>
                            </li>
                            <li className="nav-item">
                               <a href="https://Instagram.com/" className="nav-link"
                               style={{color : 'white'}} target="_blank" rel="noreferrer">
                                   <FaInstagram style={{fontSize:"1.5rem"}}/>
                               </a>
                            </li>
                            <li className="nav-item">
                               <a href="https://youtube.com/" className="nav-link"
                               style={{color : 'white'}} target="_blank" rel="noreferrer">
                                   <FaYoutube style={{fontSize:"1.5rem"}}/>
                               </a>
                            </li>
                            <li className="nav-item">
                               <a href="https://github.com/Ragavan01" className="nav-link"
                               style={{color : 'white'}} target="_blank" rel="noreferrer">
                                   <FaGithub style={{fontSize:"1.5rem"}}/>
                               </a>
                            </li>
                        </ul>
                        <br/>
                        <p style={{color : 'white'}}> <b> &copy; All rights reserved.<br/>
                                Design by <u><b>Raghavan R</b></u></b></p>
                    </div>  
            </div>
        </>
        )
    }
}
export default Contact;