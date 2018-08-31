import React from 'react';
import { withStyles } from '@material-ui/core';

const styles = theme =>({
    heroUnit: {
        backgroundColor: 'inherit'
      },
      heroContent: {
        maxWidth: '600',
        margin: '0 auto',
        padding: `${theme.spacing.unit * 8}px 0 ${theme.spacing.unit * 6}px`,
      },
      wrapper:{
        alignItems: 'center',
        display: 'flex',
        justifyContent: 'center',
        height: '100vh',
        width: '100wh'
      },

      loaderImage:{
        height: '6rem',
        width: '6rem'
      }
});

const LoadingPage = (props) => {
    const {classes} = props;
    return(
        <div className={classes.heroUnit}>
             <div className={classes.heroContent}>
               <main> 
              <div className={classes.wrapper}>     
              <img className={classes.loaderImage} src="/src/img/loader.gif"/>
              </div>
              </main> 
            </div>
        </div>
    );
}

export default withStyles(styles)(LoadingPage);