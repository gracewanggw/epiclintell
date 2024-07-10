import { BottomNavigation, Grid, Typography } from '@mui/material';

function Footer(){
    return(
        <BottomNavigation
            style={{ backgroundColor: 'rgb(245, 245, 243)' }}
        >
            <Grid container>
                <Grid item xs={12}>
                    <Typography
                        variant="caption"
                        sx={{
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            height: '100%',
                            color: '#aaa',
                            textDecoration: 'none',
                        }}
                    >
                        Designed and Developed by Grace Wang (2023)
                    </Typography>
                </Grid>
            </Grid>
                
        </BottomNavigation>
    )
}

export default Footer;