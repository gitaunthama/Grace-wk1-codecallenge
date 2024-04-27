import React, { useState } from "react";
import TransactionsList from "./TransactionsList";
import Search from "./Search";
import AddTransactionForm from "./AddTransactionForm";
import transactions from "./Data";

function AccountContainer() {
  const [filteredTransactions, setFilteredTransactions] = useState(transactions); // start filteredTransactions with all transactions

  function handleSearch(query) {
    if (typeof query !== 'string' || query === '') {
      setFilteredTransactions(transactions);
      return;
    }
    const filtered = transactions.filter(transaction =>
      transaction.description.toLowerCase().includes(query.toLowerCase())
      || transaction.category.toLowerCase().includes(query.toLowerCase()) // Add searching by category
      || transaction.amount.toString().toLowerCase().includes(query.toLowerCase()) // Add searching by amount
      || transaction.date.toLowerCase().includes(query.toLowerCase()) // Add searching by date
    );
    setFilteredTransactions(filtered);
  }

  return (
    <div>
      <Search handleSearch={handleSearch} />
      <AddTransactionForm setTransactions={setFilteredTransactions} /> {/* Pass setFilteredTransactions here */}
      <TransactionsList transactions={filteredTransactions} />
    </div>
  );
}

export default AccountContainer;
