import React from "react";
import Transaction from "./Transaction";
import "./TransactionList.css";
function TransactionsList({transactions}) {
  const list = transactions.map((item)=>{
    return <Transaction key={item.id} date={item.date} description={item.description} category={item.category} amount={item.amount} />;
  })
  return (
    <table className="padded table">
      <tbody>
        <tr>
          <th>
            <h3 className="table header">Date</h3>
          </th>
          <th>
            <h3 className="table header">Description</h3>
          </th>
          <th>
            <h3 className="table header">Category</h3>
          </th>
          <th>
            <h3 className="table  header">Amount</h3>
          </th>
        </tr>
        {/* render a list of <Transaction> components here */}
        {list}
      </tbody>
    </table>
  );
}

export default TransactionsList;