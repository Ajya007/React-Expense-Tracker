import './App.css';
import {useState} from 'react'
import Income from "./Components/Income.js"
import Expense from "./Components/Expense.js"


function App() {
  const [wholeIncome,setWholeIncome]=useState([])
  const [incomeTitle,setIncomeTitle]=useState('')
  const [incomeValue,setIncomeValue]=useState(0)


  const [wholeExpense,setWholeExpense]=useState([])
  const [expenseTitle,setExpenseTitle]=useState('')
  const [expenseValue,setExpenseValue]=useState(0)



  const incomeSubmitHandler = (e) =>{
    e.preventDefault();
  setWholeIncome([...wholeIncome,{id:Math.random()*1000,incomeTitle,incomeValue}])
  setIncomeTitle('')
  setIncomeValue(0)

  }

  const expenseSubmitHandler = (e) =>{
    e.preventDefault();
  setWholeExpense([...wholeExpense,{id:Math.random()*1000,expenseTitle,expenseValue}])
  setExpenseTitle('')
  setExpenseValue(0)

  }


  const expenseDeleteHandler = (id) =>{
    setWholeExpense(wholeExpense.filter((el) =>
        el.id !==id
    ))
  }

  const incomeDeleteHandler = (id) =>{
    setWholeIncome(wholeIncome.filter((el) =>
        el.id !==id
    ))
  }




  return (
    <div className="App">
      <header className="App-header">
      <h1>Expense tracker</h1>
      <Income 
      incomeSubmitHandler={incomeSubmitHandler}
      setIncomeTitle={setIncomeTitle}
      setIncomeValue={setIncomeValue}
      wholeIncome={wholeIncome}
      incomeTitle={incomeTitle}
      incomeValue={incomeValue}
      incomeDeleteHandler={incomeDeleteHandler}
      
       />

<Expense
      expenseSubmitHandler={expenseSubmitHandler}
      setExpenseTitle={setExpenseTitle}
      setExpenseValue={setExpenseValue}
      wholeExpense={wholeExpense}
      expenseDeleteHandler={expenseDeleteHandler}
      expenseTitle={expenseTitle}
      expenseValue={expenseValue}
       />
      </header>
    </div>
  );
}

export default App;
