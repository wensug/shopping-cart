export function currencyFoundInAPI(currency, arrayOfCurrencies) {
  const isFound = arrayOfCurrencies.find(currencyInArray => {
    return currency === currencyInArray.name;
  });

  return isFound ? isFound : false;
}
