import './App.css';
import {useState} from 'react'
import Income from "./Components/Income.js"

function App() {
  const [wholeIncome,setWholeIncome]=useState([])
  const [incomeTitle,setIncomeTitle]=useState('')
  const [incomeValue,setIncomeValue]=useState('')



  const incomeSubmitHandler = (e) =>{
    e.preventDefault();
  setWholeIncome([...wholeIncome,{id:Math.random()*1000,incomeTitle,incomeValue}])

  }

console.log(wholeIncome)


  return (
    <div className="App">
      <header className="App-header">
      <h1>Expense tracker</h1>
      <Income 
      incomeSubmitHandler={incomeSubmitHandler}
      setIncomeTitle={setIncomeTitle}
      setIncomeValue={setIncomeValue}
      wholeIncome={wholeIncome}
       />
      </header>
    </div>
  );
}

export default App;
