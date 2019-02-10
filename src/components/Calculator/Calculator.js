import React, { Component } from 'react';
import Paper from '@material-ui/core/Paper';
import { withStyles } from '@material-ui/core/styles';
import FromCurrency from './FromCurrency';
import ToCurrency from './ToCurrency';
import Data from '../Converter/Data';

const styles = theme => ({
  root: {
    width: '100%',
    minHeight: '85vh',
    overflowX: 'auto',
    display: 'flex',
    borderRadius: '0px',
  },
});

const currencies = [];
const quotes = Data.quotes;
for (let key in quotes) {
  currencies.push({ name: key.slice(3), ratio: quotes[key] });
}

class Calculator extends Component {
  state = {
    fromCurrency: {
      name: 'USD',
      rate: '1',
      amount: 0,
    },
    toCurrency: {
      name: 'EUR',
      rate: '0.87435',
      amount: 0,
    },
  };

  selectFromCurrency = name => event => {
    this.setState({
      [name]: event.target.value,
    });
  };

  render() {
    const { classes } = this.props;
    const { fromCurrency, toCurrency } = this.state;
    return (
      <Paper className={classes.root}>
        <FromCurrency
          currencies={currencies}
          name={fromCurrency.name}
          // selectFromCurrency={this.selectFromCurrency(fromCurrency.name)}
        />
        <ToCurrency currencies={currencies} name={toCurrency.name} />
      </Paper>
    );
  }
}

export default withStyles(styles)(Calculator);
