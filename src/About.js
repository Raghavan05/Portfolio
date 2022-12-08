import React from "react";
import './style.css';
import {} from 'react-bootstrap';
import {FaInstagram,FaYoutube,FaTwitter,FaGithub} from "react-icons/fa";
import logo from './img/Ragav_01.JPG';
// import  ReactDOM  from "react-dom/client";

class About extends React.Component{
    render(){
        return(
            <body>
                <div className="heading">
                    <div className="bg-c1 text-center" id = "heading">
                        <h1 className="myname">Fullstack web development</h1>
                        <p className="myoccupation">Projects</p>
                        <ul className="nav nav-pills nav-justified" id="navigation">
                            <li className="nav-item nav-color">
                            <a className="nav-link active" href="/">Home</a>
                            </li>
                            <li className="nav-item">
                            <a className="nav-link active" href="/About">About</a>
                            </li>
                            <li className="nav-item">
                            <a className="nav-link active" href="/Contact">Contact</a>
                            </li>
                        </ul>
                    </div>
                    <div className="container c-2">
                        <div className="row">
                            <div className="col-sm-4">
                                <div className="rounded-circle">
                                    <img src={logo} className="myimg rounded-circle mx-auto d-block" alt="jpg"
                                    width={"150px"} 
                                    height = "150px"/>
                                </div>
                                <br/>
                            </div>
                            <div className="col-sm-8">
                                <h2 className="myskils" style={{color:"white"}}>Web development</h2>
                                <br/>
                                <p className="skills" style={{color:"white"}}>
                                    To create a attractive web design and to respond a quality and quicker response for the users to interact a web.
                                </p>
                            </div>
                        </div>
                    </div>
                    <br/>
                    <div className="container" style={{color : 'white'}}>
                        <div className="row">
                            <div className="col-sm-12 cn-1">
                                <h2 className="myskills">
                                    Technology required
                                </h2>
                                <br/>
                                Frontend languages - Html, Css, Javascript, React
                                <br/>
                                Backend languages - Node js , Java, Python
                                <br/>
                                Database - Mysql, MongoDB
                            </div>
                            
                            <div className="col-sm-12">
                                <h2 className="myskills">
                                    My Projects
                                </h2>
                                <br/>
                                <table className="table table-dark table-striped">
                                    <thead>
                                        <tr>
                                            <th>Project domain</th>
                                            <th>Programming languages</th>
                                            <th>Project links</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>Full Stack web development</td>
                                            <td>React js , Node js , Jsp</td>
                                            <td><a href="https://impakto185.000webhostapp.com/" target="_blank" rel="noreferrer">Impakto18.5</a></td>
                                        </tr>
                                        <tr>
                                            <td>Frontend development</td>
                                            <td>Html , css , js</td>
                                            <td><a href="https://github.com/Ragavan01/Projects1/" target="_blank" rel="noreferrer">My web in Responsive</a></td>
                                        </tr>
                                        <tr>
                                            <td>Full Stack web development</td>
                                            <td>React js , Node js , Jsp </td>
                                            <td><a href="https://github.com/Ragavan01/Projects/" target="_blank" rel="noreferrer">Sympo Project</a></td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                            <div className="col-sm-12">
                                <h2 className="myskills">
                                    Education Qualification
                                </h2>
                                <br/>
                                <table className="table table-dark table-striped">
                                    <thead>
                                        <tr>
                                            <th>Degree</th>
                                            <th>School/College</th>
                                            <th>Year</th>
                                            <th>Percentages</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>B.tech CSBS</td>
                                            <td>Sethu institute of technology</td>
                                            <td>2024</td>
                                            <td>100</td>
                                        </tr>
                                        <tr>
                                            <td>12th</td>
                                            <td>TVK Corp hr sec school</td>
                                            <td>2020</td>
                                            <td>100</td>
                                        </tr>
                                        <tr>
                                            <td>10th</td>
                                            <td>TVK Corp hr sec school</td>
                                            <td>2018</td>
                                            <td>100</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                    <div className="bg-c1 text-center" id="footer">
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
                        <p style={{color : 'white'}}> <b> &copy; 2022 SRS BTL Advertising . All rights reserved.<br/>
                                Design by <u><b>Raghavan R</b></u></b></p>
                    </div>
                </div>
            </body>
        )
    }
}
export default About;