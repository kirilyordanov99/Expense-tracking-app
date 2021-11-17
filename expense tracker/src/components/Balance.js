import React, { useContext } from 'react';
import { GlobalContext } from '../context/GlobalState';

function moneyFormat(number) {
  let p = number.toFixed(2).split('.');
  return (
    '$ ' + (p[0].split('')[0]=== '-' ? '-' : '') +
    p[0]
      .split('')
      .reverse()
      .reduce(function (acc, number, i, orig) {
        return number === '-' ? acc : number + (i && !(i % 3) ? ',' : '') + acc;
      }, '') +
    '.' +
    p[1]
  );
}

export const Balance = () => {
  const { transactions } = useContext(GlobalContext);

  const amounts = transactions.map(transaction => transaction.amount);

  const total = amounts.reduce((acc, item) => (acc += item), 0);

  return (
    <>
    <h2>My Balance</h2>
    <h1>{moneyFormat(total)}</h1>
    </>
  )
}
