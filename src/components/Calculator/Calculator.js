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
      amount: 'Amount',
    },
    toCurrency: {
      name: 'EUR',
      rate: '0.87435',
      amount: 'Amount',
    },
  };

  selectCurrencyValue = name => event => {
    if (name === 'fromCurrency') {
      this.setState({
        fromCurrency: {
          name: event.target.value,
          rate: quotes[`USD${event.target.value}`],
          amount: this.state.fromCurrency.amount,
        },
      });
    } else if (name === 'toCurrency') {
      this.setState({
        toCurrency: {
          name: event.target.value,
          rate: quotes[`USD${event.target.value}`],
          amount: this.state.toCurrency.amount,
        },
      });
    }
  };

  selectCurrencyAmount = name => event => {
    if (name === 'fromCurrency') {
      this.setState({
        fromCurrency: {
          name: this.state.fromCurrency.name,
          rate: this.state.fromCurrency.rate,
          amount: event.target.value,
        },
      });
    } else if (name === 'toCurrency') {
      this.setState({
        toCurrency: {
          name: this.state.toCurrency.name,
          rate: this.state.toCurrency.rate,
          amount: event.target.value,
        },
      });
    }
  };

  calculate = name => {
    let amount;
    if (name === 'fromCurrency') {
      amount = this.state.fromCurrency.amount;
    } else {
      amount = this.state.toCurrency.amount;
    }
  };

  render() {
    const { classes } = this.props;
    const { fromCurrency, toCurrency } = this.state;
    return (
      <Paper className={classes.root}>
        <FromCurrency
          currencies={currencies}
          name={fromCurrency.name}
          amount={fromCurrency.amount}
          selectCurrencyValue={this.selectCurrencyValue}
          selectCurrencyAmount={this.selectCurrencyAmount}
        />
        <ToCurrency
          currencies={currencies}
          name={toCurrency.name}
          amount={toCurrency.amount}
          selectCurrencyValue={this.selectCurrencyValue}
          selectCurrencyAmount={this.selectCurrencyAmount}
        />
      </Paper>
    );
  }
}

export default withStyles(styles)(Calculator);
