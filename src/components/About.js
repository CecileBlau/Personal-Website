import React from 'react';
import '../App.css';


function About(props) {
    return (

        <div className='aboutMe' name='about'>

            <div className='title'>
               
                    <h1 className='titleCecile'>Cecile Blau</h1>
             
                
            </div>

            <div className='divContainingPhotoAndTextAbout'>
                <div className='aboutMePhoto'>
                    <img src='ultimo.jpg' alt='myPhoto' className='myPhoto'></img>
                </div>

                <div className='aboutMeText'>

                    <p> Hello! I am Cecile and I am a new Full Stack Developer.
                        I consider myself to be independent, responsible, empathetic, and authentic.
                    </p>
                    <p> I was born in Florida USA, raised in Lima Peru and currently living in Tel Aviv Israel.
                        I studied Clinical Psychology and enjoyed learning about the human cognition
                        while interacting with ourselves and others.
                        Although, I  felt that my passion for tecnology was missing
                        in my professional life.
                    </p>
                    <p>Being a Full Stack Developer has filled that void. Now, I can convey
                        my Psychology background with a more flexible career path that includes both
                        humans and tecnologies.
                        Specifically, I find it fascinating how human behavior and ideas can be documented for
                        eternity through our daily interactions with websites and applications.
                    </p>

                    

                    <h3>Technical Skills</h3>
                    <div className='technicalSkills'>

                        <div>
                            <img src='html5.png' alt='html5' ></img>
                            <p>HTML5</p>
                        </div>
                        <div>
                            <img src='css.png' alt='css' ></img>
                            <p>CSS</p>
                        </div>
                        <div>
                            <img src='javascript.png' alt='javascript' ></img>
                            <p>JavaScript</p>
                        </div>
                        <div>
                            <img src='react.png' alt='react'></img>
                            <p>React</p>
                        </div>
                        <div>
                            <img src='nodejs.png' alt='nodejs'></img>
                            <p>Node.js</p>
                        </div>
                        <div>
                            <img src='postgreesql.png' alt='postgresql'></img>
                            <p>PostgreSQL</p>
                        </div>
                        <div>
                            <img src='redux.png' alt='redux' ></img>
                            <p>Redux</p>
                        </div>

                    </div>
                </div>
            </div>




        </div>
    );
}

export default About;