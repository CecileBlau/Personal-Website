import React, { useState, useEffect } from 'react';
import '../App.css';



function Contact(props) {


    return (
        <div className='contactMain' name='contact'>
            <h1>Contact me</h1>
            <div className='contactTwoDivs'>
                <div className='contact'>
                    <a href="tel:+9720543571806">
                        <div>
                            <img src='telephone.svg' alt='telf' ></img>
                            <a><h3>+972 054 3571 806</h3></a>
                        </div>
                    </a>

                    <a href="mailto:cblau@pucp.pe" target="_blank">
                        <div>
                            <img src='envelope.svg' alt='mail' ></img>

                            <a ><h3>cblau@pucp.pe</h3></a>
                        </div>
                    </a>


                    <a href='https://www.linkedin.com/in/cecile-blau-195061105/' target="_blank" >
                        <div>
                            <img src='linkedin.svg' alt='linkedin' ></img>
                            <a > <h3>Cecile Blau</h3></a>

                        </div>

                    </a>



                    <a href='https://github.com/CecileBlau' target="_blank">
                        <div>
                            <img src='github.svg' alt='github'></img>
                            <a ><h3>/CecileBlau</h3></a>

                        </div>
                    </a>


                    <a href="/CecileBlauCVFaltaLinks.pdf" download="Example.pdf">
                      <div>
                        <img src='files.svg' alt='cv'></img>
                        <a > <h3>Download CV</h3></a>

                    </div>   
                    </a>
                   

                </div>

            </div>


        </div>
    );
}

export default Contact;