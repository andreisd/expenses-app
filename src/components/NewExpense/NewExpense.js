import React, { useState } from "react";
import "./NewExpense.css";
import ExpenseForm from "./ExpenseForm";

const NewExpense = (props) => {
  const onSaveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };
    props.onAddExpense(expenseData);
    setShowForm(false);
  };

  const [showForm, setShowForm] = useState(false);

  const showFormHandler = () => {
    setShowForm(true);
  };

  const hideFormHandler = () => {
    setShowForm(false);
  }

  return (
    <div className="new-expense">
      
      {!showForm && <button onClick={showFormHandler}>Add New Expense</button>}
      {showForm && <ExpenseForm onCancel={hideFormHandler} onSaveExpenseData={onSaveExpenseDataHandler} />}
    </div>
  );
};

export default NewExpense;
