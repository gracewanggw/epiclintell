import React from "react";
import Container from "@mui/material/Container";
import Grid from '@mui/material/Grid';
import Typewriter from './Typewriter';



function About(){

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