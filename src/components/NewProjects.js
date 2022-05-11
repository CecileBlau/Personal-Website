import React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
function NewProjects(props) {
  return (
    <div className='newProjectsMain'>
      

      <div className='eachCardProject' >
        <Card className='card'>
          <CardMedia
            component="img"
            height="180"
            image="/books2.jpg"
            alt="Cecile Bookstore Project"
            className='cardMedia'
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              Online Library
            </Typography>
            <Typography variant="body2" color="text.secondary" style={{height:'100px'}} >

               
              React web application using an external API (Google Books), in which you can search for a specific book, publication, or paper. 
              Option for sorting results by number of items, publication date and availability for purchase.
              Individual pop up for showing a book's description.
              Designed with Bootstrap and CSS.



            </Typography>
          </CardContent>
          <CardActions>
            <Button size="small" style={{ background: 'lightgray', color: 'black' }} href='https://libraryonlinececile.herokuapp.com/' target="_blank">Demo</Button>
            <Button size="small" style={{ background: 'lightgray', color: 'black' }} href='https://github.com/CecileBlau/Books-API' target="_blank" >Code</Button>
          </CardActions>
        </Card>
      </div>


      <div className='eachCardProject'>
        <Card className='card'>
          <CardMedia
            component="img"
            height="180"
            image="/hilos.png"
            alt="Hilos Projects"
            className='cardMedia'
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              Hilos (Still in progress)
            </Typography>


            <Typography variant="body2" color="text.secondary" style={{height:'100px'}} >
              Social media application for people who feel isolated.
              Logic written in React/ Javascript language and back-end section with PostgresSQL.
              Authentication: User registration and login are stored with an encrypted password.
              Designed with Material-UI and CSS.

            </Typography>


          </CardContent>
          <CardActions>
            <Button size="small" style={{ background: 'lightgray', color: 'black' }}>Demo</Button>
            <Button size="small" style={{ background: 'lightgray', color: 'black' }}>Code</Button>
          </CardActions>
        </Card>
      </div>
    </div>

  );
}

export default NewProjects;