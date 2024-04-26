import React from "react";
import Transaction from "./Transaction";

function TransactionsList({ transactions }) {
  // Check if transactions array is empty or undefined
  if (!transactions || transactions.length === 0) {
    return <p>No transactions available</p>;
  }

  // Map over transactions array and create Transaction components
  const list = transactions.map((item) => (
    <Transaction
      key={item.id}
      date={item.date}
      description={item.description}
      category={item.category}
      amount={item.amount}
    />
  ));

  return (
    <table className="ui celled striped padded table">
      <tbody>
        <tr>
          <th>
            <h3 className="ui center aligned header">Date</h3>
          </th>
          <th>
            <h3 className="ui center aligned header">Description</h3>
          </th>
          <th>
            <h3 className="ui center aligned header">Category</h3>
          </th>
          <th>
            <h3 className="ui center aligned header">Amount</h3>
          </th>
        </tr>
        {/* Render a list of <Transaction> components */}
        {list}
      </tbody>
    </table>
  );
}

export default TransactionsList;
