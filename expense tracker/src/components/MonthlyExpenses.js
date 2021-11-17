import React, { useContext } from 'react'
import { GlobalContext } from '../context/GlobalState';


function moneyFormat(num) {
  let p = num.toFixed(2).split('.');
  return (
    '$ ' +
    p[0]
      .split('')
      .reverse()
      .reduce(function (acc, num, i, orig) {
        return num === '-' ? acc : num + (i && !(i % 3) ? ',' : '') + acc;
      }, '') +
    '.' +
    p[1]
  );
}

export const MonthlyExpenses = () => {
  const { transactions } = useContext(GlobalContext);

  const amounts = transactions.map(transaction => transaction.amount);

  const income = amounts
    .filter(item => item > 0)
    .reduce((acc, item) => (acc += item), 0);

  const expense = (
    amounts.filter(item => item < 0).reduce((acc, item) => (acc += item), 0) *
    -1
  );

  return (
    <div className="inc-exp-container">
        <div>
          <h4>Monthly Income</h4>
  <p className="money income">{moneyFormat(income)}</p>
        </div>
        <div>
          <h4>Monthly Expenses</h4>
  <p className="money expenses">{moneyFormat(expense)}</p>
        </div>
      </div>
  )
}
