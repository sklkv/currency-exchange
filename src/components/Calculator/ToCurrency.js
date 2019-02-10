import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import Paper from '@material-ui/core/Paper';
import TextField from '@material-ui/core/TextField';
import { withStyles } from '@material-ui/core/styles';

const styles = {
  root: {
    width: '50%',
    height: '60vh',
    margin: '0px',
    borderRadius: '0px',
  },
  textField: {
    marginLeft: '25%',
    marginRight: '25%',
    marginTop: '10%',
  },
  dropField: {
    marginLeft: '25%',
    marginRight: '25%',
    marginTop: '20%',
  },
};

function ToCurrency(props) {
  const { classes, currencies, name, selectCurrencyValue, selectCurrencyAmount, amount } = props;
  return (
    <Fragment>
      <Paper className={classes.root}>
        <TextField
          id='standard-select-currency-native'
          select
          label='To'
          className={classes.dropField}
          value={name}
          onChange={selectCurrencyValue('toCurrency')}
          SelectProps={{
            native: true,
            MenuProps: {
              className: classes.menu,
            },
          }}
          helperText='Please select your currency'
          margin='normal'
        >
          {currencies.map((option, i) => (
            <option key={i} value={option.name}>
              {option.name}
            </option>
          ))}
        </TextField>
        <TextField
          id='from-input'
          label={amount}
          className={classes.textField}
          type='number'
          name='from'
          margin='normal'
          variant='outlined'
          onChange={selectCurrencyAmount('toCurrency')}
        />
      </Paper>
    </Fragment>
  );
}
ToCurrency.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ToCurrency);
