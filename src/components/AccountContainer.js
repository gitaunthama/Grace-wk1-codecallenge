import React, { useEffect, useState } from "react";
import SearchTransaction from "./SearchTransaction";
import TransactionForm from "./TransactionForm";
import TransactionList from "./TransactionList";

function AccountContainer() {
  const [transaction, setTransaction] = useState([])
  const [query, setQuery] = useState("")
  useEffect(() => {
    fetch("http://localhost:8001/transactions?q=" + query)
      .then((resp) => resp.json())
      .then(transaction => setTransaction(transaction))
  }, [query])
  function handleSearch(e) {
    setQuery(e.target.value)
  }
  return (
    <div>
      <SearchTransaction handleSearch={handleSearch} />
      <TransactionForm />
      <TransactionList transactions={transaction} />
    </div>
  );
}

export default AccountContainer;