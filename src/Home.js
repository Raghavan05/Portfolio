import React from "react";
import './style.css';
import './index.css';
import {} from 'react-bootstrap';
import {FaInstagram,FaYoutube,FaTwitter,FaGithub} from "react-icons/fa";
import logo from './img/Ragav_01.JPG';
import Navbar from "./Navbar";
import ApiExample from "./api_example";
// import  ReactDOM  from "react-dom/client";

class Home extends React.Component{
    render(){
        return(
            <body>
                <div className="heading">
                    <div className="bg-c1 text-center" id = "heading">
                        <h1 className="myname" style={{color:"white"}}>Raghavan</h1>
                        <p className="myoccpation" style={{color:"white"}}>Full Stack Developer (MERN)</p>
                        <Navbar/>
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
                                <h2 className="myskils" style={{color:"white"}}>Career objective</h2>
                                <br/>
                                <p className="skills" style={{color:"white"}}>
                                    To work in a professional environment where i can find myself in decision opportunities for myself and extend quality service to my organization.
                                </p>
                            </div>
                        </div>
                    </div>
                    <br/>
                    <div className="container" style={{color : 'white'}}>
                        <div className="row">
                            <div className="col-sm-6">
                                <h2 className="myskills">
                                    Technical skills
                                </h2>
                                <br/>
                                <ul className="skills">
                                    <li>
                                        Frontend languages - HTML, CSS, Javascript, Bootstrap, React
                                    </li>
                                    <li>
                                        Backend languages - Node js
                                    </li>
                                    <li>
                                        Database - Mysql, MongoDB
                                    </li>
                                </ul>
                            </div>
                            <div className="col-sm-6">
                                <h2 className="myskills">
                                    Profiles in social media
                                </h2>
                                <br/>
                                <ul className="skills">
                                    <li>
                                        <a href="https://www.linkedin.com/in/raghavan-r1" target="_blank" rel="noreferrer">Linkedin profile</a>
                                    </li>
                                    <li>
                                        <a href="https://github.com/Raghavan05/" target="_blank" rel="noreferrer">Github profile</a>
                                    </li>
                                </ul>
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
                                            <td>Frontend Project</td>
                                            <td>HTML CSS JS Bootstrap</td>
                                            <td><a href="https://grmstudios.in" target="_blank" rel="noreferrer">GRM studios Project</a></td>
                                        </tr>
                                        <tr>
                                            <td>Full Stack web development</td>
                                            <td>HTML , CSS , Js</td>
                                            <td><a href="https://impakto185.000webhostapp.com/" target="_blank" rel="noreferrer">Impakto18.5 clg sympo</a></td>
                                        </tr>
                                        <tr>
                                            <td>Frontend development</td>
                                            <td>HTML , CSS , Js</td>
                                            <td><a href="https://raghavan05.github.io/Techonics/" target="_blank" rel="noreferrer">My department sympo</a></td>
                                        </tr>
                                        <tr>
                                            <td>Full Stack web development</td>
                                            <td>React js</td>
                                            <td><a href="https://raghavan05.github.io/Portfolio/" target="_blank" rel="noreferrer">Portfolio</a></td>
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
                                            <td>8.699</td>
                                        </tr>
                                        <tr>
                                            <td>HSC</td>
                                            <td>TVK Corp hr sec school</td>
                                            <td>2020</td>
                                            <td>50.67%</td>
                                        </tr>
                                        <tr>
                                            <td>SSLC</td>
                                            <td>TVK Corp hr sec school</td>
                                            <td>2018</td>
                                            <td>72.4%</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>

                    <ApiExample/>
                    
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
                               <a href="https://github.com/Raghavan05" className="nav-link"
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
            </body>
        )
    }
}
export default Home;