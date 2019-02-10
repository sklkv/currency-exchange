import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import NoSsr from '@material-ui/core/NoSsr';
import Tab from '@material-ui/core/Tab';

function LinkTab(props) {
  return <Tab component='a' onClick={event => event.preventDefault()} {...props} />;
}

const styles = theme => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
  },
});

class Footer extends React.Component {
  state = {
    value: 0,
  };

  changeState = (event, value) => {
    this.setState({
      value,
    });
    this.props.state(!value);
  };

  render() {
    const { classes } = this.props;
    const { value } = this.state;

    return (
      <NoSsr>
        <div className={classes.root}>
          <AppBar position='static'>
            <Tabs variant='fullWidth' value={value} onChange={this.changeState}>
              <LinkTab label='Current rates' />
              <LinkTab label='Converter' />
            </Tabs>
          </AppBar>
        </div>
      </NoSsr>
    );
  }
}

Footer.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Footer);
