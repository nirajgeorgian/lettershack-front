import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import AppBar from '@material-ui/core/AppBar';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import Menu from '@material-ui/icons/Menu';
import MoreHoriz from '@material-ui/icons/MoreHoriz';
import { Link } from 'react-router-dom';
import { styles } from './styles'; 

 
class MyWorksOne extends React.Component{
    constructor(props){
      super(props);
    }
    render(){
        const { classes } = this.props;
        const parts = [1,2];
        return(
            <React.Fragment>
              <div className={classes.heroUnit}>  
               <div className={classes.heroContent}> 
                 <main>
                  <Grid container>
                    <Grid item sm={3}>
                      <image src="https://picsum.photos/200/300"/>
                    </Grid>
                    <Grid item sm={9}>
                       <Card>
                        <CardMedia>
                       
                         <Tabs value={1}>
                            <Tab label="Story Details" />
                            <Tab label="Table of Contents" />
                          </Tabs>
                        <Divider className={classes.dividerTop}/>
                        <Button
                         variant="contained" color="primary" className={classes.button}
                        > 
                        + New Part
                        </Button>
                        {
                          parts.map((part)=>(
                           <React.Fragment> 
                           <Divider className={classes.dividerBottom}/>
                            <Grid container>
                              <Grid item justify="center" sm={2}>
                              <IconButton>
                              <Menu/>
                              </IconButton>
                              </Grid>
                              <Grid item sm={8}>
                              <Typography >
                                Untitled Part 1
                              </Typography> 
                              <Typography >
                                published
                              </Typography> 
                              </Grid>
                              <Button
                              >
                              <MoreHoriz/>
                              </Button>
                              <Grid item sm={2}>
                              </Grid> 
                            </Grid>  
                          </React.Fragment>  
                          ))
                        }
                        </CardMedia>     
                       </Card>    
                    </Grid>
                  </Grid>
                  </main>
               </div>
              </div>      
            </React.Fragment>    
        );
    }
}

export default withStyles(styles)(MyWorksOne);