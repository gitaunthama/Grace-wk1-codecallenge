import React, { useState } from "react";
import "./AddTransactionForm.css";

function AddTransactionForm({ setTransactions }) {
  const [formData, setFormData] = useState({
    date: "",
    description: "",
    category: "",
    amount: ""
  });

  function handleChange(e) {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  }

  function handleSubmit(e) {
    e.preventDefault();
    const newTransaction = {
      id: String(Date.now()), // Generate unique ID using current timestamp
      ...formData
    };
    setTransactions(prevTransactions => [...prevTransactions, newTransaction]); // Update transactions state by merging with existing transactions
    alert("Transaction added successfully");
    setFormData({
      date: "",
      description: "",
      category: "",
      amount: ""
    });
  }

  return (
    <div className="segment">
      <form onSubmit={handleSubmit} className="form">
        <div className="inline fields">
          <input
            value={formData.date}
            onChange={handleChange}
            type="date"
            name="date"
          />
          <input
            value={formData.description}
            onChange={handleChange}
            type="text"
            name="description"
            placeholder="Description"
          />
          <input
            value={formData.category}
            onChange={handleChange}
            type="text"
            name="category"
            placeholder="Category"
          />
          <input
            value={formData.amount}
            onChange={handleChange}
            type="number"
            name="amount"
            placeholder="Amount"
            step="0.01"
          />
        </div>
        <button className="button" type="submit">
          Add Transaction
        </button>
      </form>
    </div>
  );
}

export default AddTransactionForm;
