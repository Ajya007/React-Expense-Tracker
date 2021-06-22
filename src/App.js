import './App.css';
import {useState,useEffect} from 'react'
import Income from "./Components/Income.js"
import Expense from "./Components/Expense.js"
import Balance from "./Components/Balance.js"


function App() {
  const [totalBalance,setTotalBalance] = useState(0)
  const [totalIncome,setTotalIncome] = useState(0)
  
  const [totalExpense,setTotalExpense] = useState(0)
  const [wholeIncome,setWholeIncome]=useState([])
  const [incomeTitle,setIncomeTitle]=useState('')
  const [incomeValue,setIncomeValue]=useState('')


  const [wholeExpense,setWholeExpense]=useState([])
  const [expenseTitle,setExpenseTitle]=useState('')
  const [expenseValue,setExpenseValue]=useState('')

  useEffect(() => {
  const array1=wholeIncome.map(el => el.incomeValue)
  const totalSum=array1.reduce((total,el) => total+el ,0)
  setTotalIncome(totalSum)

  
  }, [wholeIncome])

  useEffect(() => {
    const array2=wholeExpense.map(el => el.expenseValue)
    const totalArr2=array2.reduce((total,el) => total+el ,0)
    setTotalExpense(totalArr2)

    
    }, [wholeExpense])

    useEffect(() => {


    setTotalBalance(totalIncome-totalExpense)
      
      }, [totalExpense,totalIncome])


  const incomeSubmitHandler = (e) =>{
    e.preventDefault();
  setWholeIncome([...wholeIncome,{id:Math.random()*1000,incomeTitle,incomeValue:parseInt(incomeValue)}])
  setIncomeTitle('')
  setIncomeValue('')

  }

  const expenseSubmitHandler = (e) =>{
    e.preventDefault();
  setWholeExpense([...wholeExpense,{id:Math.random()*1000,expenseTitle,expenseValue:parseInt(expenseValue)}])
  setExpenseTitle('')
  setExpenseValue('')

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

    <div className="whole-app">
    <div className="app-section">
   
     
     
      <Balance  
      totalIncome={totalIncome}
      totalExpense={totalExpense}
      totalBalance={totalBalance}/>

      <div className="ie-wrapper">
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
       </div>
    
    </div>
    </div>
  );
}

export default App;
