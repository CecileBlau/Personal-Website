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
      <div>
        <Card sx={{ width:'400px'}}>
          <CardMedia
            component="img"
            height="180"
            image="/hilos.png"
            alt="Hilos Projects"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              Hilos
            </Typography>
            <Typography variant="body2" color="text.secondary" style={{width:'368px', height:'100px'}}>
              Social media application for people who feel isolated.
              Logic written in React/ Javascript language and back-end section with PostgresSQL.
              Authentication: User registration and login are stored with an encrypted password.
              Designed with Material-UI and CSS.

            </Typography>
          </CardContent>
          <CardActions>
            <Button size="small" style={{background:'lightgray', color:'black'}}>Demo</Button>
            <Button size="small" style={{background:'lightgray', color:'black'}}>Code</Button>
          </CardActions>
        </Card>
      </div>

      <div>
        <Card sx={{ width:'400px' }}>
          <CardMedia
            component="img"
            height="180"
            image="/books.jpg"
            alt="Cecile Bookstore Project"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              Cecile Bookstore
            </Typography>
            <Typography variant="body2" color="text.secondary" style={{width:'368px', height:'100px'}}>
              Web application in which you can search for a specific book, publication, or paper.
              React web application using an external API (Google Books). Option for sorting results by publication date.
              Designed with Bootstrap and CSS.

            </Typography>
          </CardContent>
          <CardActions>
            <Button size="small" style={{background:'lightgray', color:'black'}} href='https://cecilebookstore.herokuapp.com/' target="_blank">Demo</Button>
            <Button size="small"style={{background:'lightgray', color:'black'}} href='https://github.com/CecileBlau/Books-API' target="_blank" >Code</Button>
          </CardActions>
        </Card>
      </div>
    </div>

  );
}

export default NewProjects;