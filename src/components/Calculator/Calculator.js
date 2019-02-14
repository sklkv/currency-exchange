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
  currencies.push({ name: key.slice(3), rate: quotes[key] });
}

class Calculator extends Component {
  state = {
    fromCurrency: {
      name: 'USD',
      rate: '1',
    },
    toCurrency: {
      name: 'EUR',
      rate: '0.87435',
    },
    amount: 1,
  };

  selectCurrencyValue = name => event => {
    if (name === 'fromCurrency') {
      this.setState({
        fromCurrency: {
          name: event.target.value,
          rate: quotes[`USD${event.target.value}`],
        },
      });
    } else if (name === 'toCurrency') {
      this.setState({
        toCurrency: {
          name: event.target.value,
          rate: quotes[`USD${event.target.value}`],
        },
      });
    }
  };

  changeAmount = name => event => {
    if (name === 'fromCurrency') {
      this.setState({
        amount: event.target.value / this.state.fromCurrency.rate,
      });
    } else if (name === 'toCurrency') {
      this.setState({
        amount: event.target.value / this.state.toCurrency.rate,
      });
    }
  };

  render() {
    const { classes } = this.props;
    const { fromCurrency, toCurrency, amount } = this.state;
    const fromCurrencyAmount = amount * fromCurrency.rate;
    const toCurrencyAmount = amount * toCurrency.rate;
    return (
      <Paper className={classes.root}>
        <FromCurrency
          currencies={currencies}
          name={fromCurrency.name}
          amount={fromCurrencyAmount}
          selectCurrencyValue={this.selectCurrencyValue}
          changeAmount={this.changeAmount}
        />
        <ToCurrency
          currencies={currencies}
          name={toCurrency.name}
          amount={toCurrencyAmount}
          selectCurrencyValue={this.selectCurrencyValue}
          changeAmount={this.changeAmount}
        />
      </Paper>
    );
  }
}

export default withStyles(styles)(Calculator);
