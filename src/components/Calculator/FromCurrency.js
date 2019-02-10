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
  menu: {
    width: 200,
  },
};

function FromCurrency(props) {
  const { classes, currencies, name, selectCurrencyValue, selectCurrencyAmount, amount } = props;
  return (
    <Fragment>
      <Paper className={classes.root}>
        <TextField
          id='standard-select-currency-native'
          select
          label='From'
          className={classes.dropField}
          value={name}
          onChange={selectCurrencyValue('fromCurrency')}
          SelectProps={{
            native: true,
            MenuProps: {
              className: classes.menu,
            },
          }}
          helperText='Please select your currency'
          margin='normal'
        >
          {currencies.map((currency, i) => (
            <option key={i} value={currency.name}>
              {currency.name}
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
          onChange={selectCurrencyAmount('fromCurrency')}
        />
      </Paper>
    </Fragment>
  );
}

FromCurrency.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(FromCurrency);
