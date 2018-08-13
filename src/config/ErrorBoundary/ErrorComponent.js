import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';

const styles = theme => ({
  root: {
    ...theme.mixins.gutters(),
    paddingTop: theme.spacing.unit * 2,
    paddingBottom: theme.spacing.unit * 2,
  },
});

function ErrorComponent(props) {
  const { classes } = props;

  return (
    <div>
      <Paper className={classes.root} elevation={1}>
        <Typography variant="headline" component="h3">
          Oops! SOmething just happedned causing error.
        </Typography>
        <Typography component="p">
          There is something wrong with Application and we are working on it.
        </Typography>
      </Paper>
    </div>
  );
}

ErrorComponent.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ErrorComponent);
