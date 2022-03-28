import React from 'react';
import '../App.css';
import NewProjects from './NewProjects';



function Projects(props) {
    return (
        <div className='projectsMain' name='projects'>
             
            <div className='titleProjects'>

                <h1>Projects</h1> 
               
            </div>
           <NewProjects/>
         
            {/* <div className='projects'>
                <div className='projectsDiv'>
                    <div className='projectsHilos'>
                        <img src='/hilos.png'></img>
                        <div className='box-content'>
                            <h3 className='title'>Hilos </h3>
                            <span className='post'><a href='https://www.google.com/' target="_blank" >link</a>  |  <a href='https://github.com/CecileBlau' target="_blank">Github</a></span>
                        </div>

                    </div>
                    <div className='explicacion'>
                        <h3>Hilos</h3>
                        <p>Social media application for people who feel isolated. You can search for friends based on your current feelings or medical condition. Option for a personal or caregivers account. Publications and emotion status are kept in a database for monitoring signs of self-harm or harm to others.</p>
                        <Button variant="contained" style={{backgroundColor:'#F79D5C'}} >View App</Button> <Button variant="contained" style={{backgroundColor:'#F79D5C' }} >View code</Button>
                    </div>
                </div>


                <div className='projectsDiv'>
                    <div className='projectsHilos'>
                        <img src='/books.jpg'></img>
                        <div className='box-content'>
                            <h3 className='title' >Cecile Bookstore</h3>
                            <span className='post'><a href='https://cecilebookstore.herokuapp.com/' target="_blank" >link</a>  |  <a href='https://github.com/CecileBlau/Books-API' target="_blank">Github</a></span>
                        </div>

                    </div>
                    <div className='explicacion' >
                        <h3>API Cecile Bookstore</h3>
                        <p> Web application in which you can search for a specific book, publication, or paper.</p>
                    </div>
                </div>

            </div> */}
           

        </div>
    );
}

export default Projects;