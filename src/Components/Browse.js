import React, { Component } from 'react';
import { AppBar, Toolbar, IconButton, Typography, Grid, Paper } from '@material-ui/core';

class Browse extends Component {
  state = {  }

  render() { 
    return (
      <div>
        <AppBar position="static">
          <Toolbar variant="dense">
            <IconButton edge="start" color="inherit" aria-label="menu">
              {/* <MenuIcon /> */}
            </IconButton>
            <Typography variant="h6" color="inherit">
              Photos
            </Typography>
          </Toolbar>
        </AppBar>
        <br />
        <Grid container spacing={5}>
          <Grid item xs={12}>
            <Grid container justify="center">
              {[0,1,2,3,4,5,6,7,8,9].map((value) => (
                <Grid key={value} item spacing={10}>
                  <br/>
                  <Paper>
                    <div style={{width: "440px", height: "390px", textAlign: 'left'}}>
                      <img style={{width: "400px"}} src="https://images.squarespace-cdn.com/content/v1/524c7a69e4b076c200185e4d/1497780706945-SRNTJ0RJL60X8QBII0OT/ke17ZwdGBToddI8pDm48kLkXF2pIyv_F2eUT9F60jBl7gQa3H78H3Y0txjaiv_0fDoOvxcdMmMKkDsyUqMSsMWxHk725yiiHCCLfrh8O1z4YTzHvnKhyp6Da-NYroOW3ZGjoBKy3azqku80C789l0iyqMbMesKd95J-X4EagrgU9L3Sa3U8cogeb0tjXbfawd0urKshkc5MgdBeJmALQKw/HIMBA+strobe+01+Final+desat.jpg?format=1500w" />
                      <p>Oil on paper</p>
                    </div>
                    
                  </Paper>
                </Grid>
              ))}
            </Grid>
          </Grid>
        </Grid>
      </div>
    );
  }
} 
export default Browse;