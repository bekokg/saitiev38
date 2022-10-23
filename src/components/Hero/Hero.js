import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import heroImage from '../../static/sary-chelek.jpeg';
import './Hero.css'

export default function SimpleContainer() {
  return (
    <div style={{height: "300px", "marginTop": "100px"}}>
      <CssBaseline />
      <img className='hero-image' src={heroImage} />
      <Container  maxWidth="md">
        <Typography component="div" style={{ backgroundColor: '#cfe8fc' }} />
      </Container>
    </div>
  );
}