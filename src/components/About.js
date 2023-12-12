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
    width: '36vw',
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
  };

function About(){
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    return (
        <section id="about" style={{paddingTop: '48px'}}>
            <Container maxWidth="lg">
                <Grid container spacing={2} alignItems="center">
                    <Grid item xs={7} >
                        <>
                            <Typewriter text="👋 Hi, I'm Grace!" delay={120}></Typewriter>
                            <h2>
                                I love developing solutions through code and exploring the world through data 🚀  
                            </h2>
                            <p>
                                I am a senior at Dartmouth College pursuing a dual major in Computer Science and Economics with a concentration in Math.
                                I am passionate about translating ideas into impactful applications and uncovering meaningful insights from data.
                                Whether it's crafting code for software solutions or delving into datasets to extract valuable narratives, I love that every line of code and every data point tell a unique story. 
                                Beyond coding, you can find me playing pickleball, cooking, or solving puzzles.
                            </p>
                            <Grid container item spacing={2}>
                                <Grid item xs={3}>
                                    <Button href='https://www.linkedin.com/in/gracewang809/'>
                                        Linkedin
                                    </Button>
                                </Grid>
                                <Grid item xs={3}>
                                    <Button href='https://github.com/gracewanggw/'>
                                        Github
                                    </Button>
                                </Grid>
                                <Grid item xs={6}>
                                    <Button onClick={handleOpen}>
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
                    <Grid item xs={5}>
                        <img
                            alt="hero"
                            src="./clip-art.png"
                            width='400px'
                            height='200px'
                            object-fit='cover'
                        />
                    </Grid>
                </Grid>
            </Container>
        </section>
    );
}

export default About;