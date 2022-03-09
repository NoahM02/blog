import React from 'react'
import {useHistory} from 'react-router-dom';
import { AppBar, Toolbar as MaterialToolbar, Typography, Box, Button, Link } from '@material-ui/core';

function Navbar() {
    const history = useHistory();
  
    function handleBlogClick() {
      document.location.replace("/");
    }

    return (
        <div>
            <AppBar position='fixed'>
                <MaterialToolbar variant='regular'>
                    <Box display='flex' flexGrow={1}>
                        <Typography variant='h6'><Link href="/" style={{ textDecoration: 'none', color: '#b8b3ae'}} >Redivivus</Link></Typography>
                    </Box>
                </MaterialToolbar>
            </AppBar>
        </div>
    )
}

export default Navbar
