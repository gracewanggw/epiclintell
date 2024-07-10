import React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from '@mui/material/Toolbar';
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Hidden from "@mui/material/Hidden";

function Navbar(){
    const navItems = [

    ];
    
    return (
        <AppBar component="nav" position="sticky" style={{ background: '#2E3B55', overflowX: 'auto' }}>
            <Toolbar>
                <Typography
                    href='#'
                    variant="h5"
                    noWrap
                    component="a"
                    sx={{
                        mr: 2,
                        display: { xs: 'none', md: 'flex' },
                        fontWeight: 700,
                        letterSpacing: '.2rem',
                        color: 'inherit',
                        textDecoration: 'none',
                      }}
                >
                    DEGANG WANG
                </Typography>
                <Hidden xsDown implementation="css">
                    <Box sx={{ display: 'flex' }}>
                        {navItems.map((item) => (
                        <Button key={item.title} href={item.link} sx={{ color: '#fff', padding: 2 }}>
                            {item.title}
                        </Button>
                        ))}
                    </Box>
                </Hidden>
            </Toolbar>
        </AppBar>
    );
}

export default Navbar;