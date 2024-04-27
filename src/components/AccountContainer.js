import React, { useState } from "react";
import TransactionsList from "./TransactionsList";
import Search from "./Search";
import AddTransactionForm from "./AddTransactionForm";
import transactions from "./Data";

function AccountContainer() {
  const [filteredTransactions, setFilteredTransactions] = useState(transactions); // start filteredTransactions with all transactions

  function handleSearch(query) {
    // Filter transactions based on the search query
    const filtered = transactions.filter(transaction =>
      transaction.description.toLowerCase().includes(query.toLowerCase())
    );
    setFilteredTransactions(filtered);
  }

  return (
    <div>
      <Search handleSearch={handleSearch} />
      <AddTransactionForm />
      <TransactionsList transactions={filteredTransactions} />
    </div>
  );
}

export default AccountContainer;
