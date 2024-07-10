import { services } from "../data";
import Divider from "@mui/material/Divider";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
// import LineChart from "./LineChart";

function Services() {
    return (
        <section id='services' style={{paddingTop: '48px', paddingBottom:'12px'}}>
            <Divider></Divider>
            <Container maxWidth="lg" style={{paddingTop: '48px'}}>
                <h1 style={{textAlign: 'center', fontSize: '48px', color: '#2E3B55' }}>
                    Services
                </h1>
                <Grid container spacing={3}>
                    { services.map((exp) => (
                        <Grid item xs={12}>
                            <div>
                                <b> {exp.title}</b>
                                <p> {exp.description}</p>
                                <Divider></Divider> 
                            </div>
                            
                        </Grid>
                        )
                    )}
                </Grid>
            </Container>
            {/* <Container maxWidth="lg">
                <Grid item xs={12} ref={lineChartRef} >
                    {isVisible && <LineChart data={data} />}
                </Grid> 
            </Container> */}
            
        </section>
    );
}

export default Services