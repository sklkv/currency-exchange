const axios = require('axios');

const getExchangeRate = async (fromCurrency, toCurrency) => {
  try {
    const response = await axios.get('http://www.apilayer.net/api/live?access_key=744fafbfecb525fc77928cedefccc9c0');
    const rate = response.data.quotes;
    const baseCurrency = response.data.source;
    const usd = 1 / rate[`${baseCurrency}${fromCurrency}`];
    const exchangeRate = usd * rate[`${baseCurrency}${toCurrency}`];
    console.log('data: ', response.data);
    return exchangeRate;
  } catch (error) {
    throw new Error(`Unable to get currency ${fromCurrency} and ${toCurrency}`);
  }
};

const convertCurrency = async (fromCurrency, toCurrency, amount) => {
  const exchangeRate = await getExchangeRate(fromCurrency, toCurrency);
  console.log('exc: ', exchangeRate);
  const convertedAmount = (amount * exchangeRate).toFixed(2);
  console.log('converted: ', convertedAmount);
  return `${amount} ${fromCurrency} equal ${convertedAmount} ${toCurrency}.`;
};

convertCurrency('RUB', 'USD', 35.5)
  .then(message => {
    console.log(message);
  })
  .catch(error => {
    console.log(error.message);
  });
