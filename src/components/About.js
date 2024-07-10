import React, {useState} from "react";
import Container from "@mui/material/Container";
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';
import Typewriter from './Typewriter';
import ContactForm from './ContactForm';

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: '80%', // Default width for larger screens
    maxWidth: '400px',
    bgcolor: 'background.paper',
    borderRadius: '8px',
    boxShadow: 24,
    p: 4,
  };


function About(){
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    return (
        <section id="about" style={{paddingTop: '48px', paddingBottom: '48px'}}>
            <Container maxWidth="lg">
                <Grid container spacing={2} alignItems="center">
                    <Grid item xs={7} >
                        <>
                            <Typewriter font="lg" text="Welcome to Epiclintell" delay={120}></Typewriter>
                            <h2 style={{color: '#2E3B55' }}>
                                A company with 15 years of experience in real-world analytics for the life sciences industry.
                            </h2>
                            <p>
                                Our team consists of highly skilled professional with expertise in epidemiology, data analytics,
                                 and statistical programming. Our proven track record in delievering impactful insights, 
                                 our client-focused approach, and our commitment to data integrity and accuracy sets us apart.
                            </p>
                            <Grid container item spacing={2}>
                                <Grid item xs={4}>
                                    <Button style={{width:'100%'}} href='https://www.linkedin.com/in/gracewang809/' target="_blank" rel="noopener noreferrer">
                                        Linkedin
                                    </Button>
                                </Grid>
                                <Grid item xs={4}>
                                    <Button style={{width:'100%'}} href='https://github.com/gracewanggw/' target="_blank" rel="noopener noreferrer">
                                        Github
                                    </Button>
                                </Grid>
                                <Grid item xs={4}>
                                    <Button style={{width:'100%'}} onClick={handleOpen}>
                                        Contact
                                    </Button>
                                    <Modal
                                        open={open}
                                        onClose={handleClose}
                                        aria-labelledby="modal-modal-title"
                                        aria-describedby="modal-modal-description"
                                    >
                                        <Box sx={style}>
                                            <ContactForm handleClose={handleClose} />
                                        </Box>
                                    </Modal>
                                </Grid>
                            </Grid>
                        </>
                    </Grid>
                    <Grid item xs={5} alignContent='center'>
                        <img
                            alt="hero"
                            src="./clip-art.png"
                            width='100%'
                            height='100%'
                            object-fit='cover'
                        />
                    </Grid>   
                </Grid> 
            </Container>
        </section>
    );
}

export default About;