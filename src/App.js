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
  
  const [errors,setErrors] = useState({})
  const [errorState,setErrorState]=useState(false)
  const [errors1,setErrors1] = useState({})
  const [errorState1,setErrorState1]=useState(false)


//Local storage for Income
  const getLocalWholeIncome = () => {
    if(localStorage.getItem("wholeIncome") === null){
      localStorage.setItem("wholeIncome",JSON.stringify([]))
    }else{
      let WholeIncomelocal=JSON.parse(localStorage.getItem("wholeIncome"));
      setWholeIncome(WholeIncomelocal)
    }
  }

  const getLocalWholeExpense = () => {
    if(localStorage.getItem("wholeExpense") === null){
      localStorage.setItem("wholeExpense",JSON.stringify([]))
    }else{
      let WholeExpenselocal=JSON.parse(localStorage.getItem("wholeExpense"));
      setWholeExpense(WholeExpenselocal)
    }
  }

  useEffect(() => {
  getLocalWholeIncome(); 
  getLocalWholeExpense();
  
 }, [])
 useEffect(() => {
  localStorage.setItem("wholeIncome",JSON.stringify(wholeIncome))
 }, [wholeIncome])
 useEffect(() => {
  localStorage.setItem("wholeExpense",JSON.stringify(wholeExpense))
 }, [wholeExpense])




  


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
    if(!incomeTitle){
        if(!incomeValue){
          setErrors({Title:"Title is required",Value:"Value is required"})
          setErrorState(true)
          setTimeout(() => {
            setErrorState(false)
            
          }, 2000);

                        }
        else{
          setErrorState(true)
          setErrors({Title:"Title is required"})
          setTimeout(() => {
            setErrorState(false)
            
          }, 2000);
      }
     

    }
    else  if(!incomeValue){
      setErrors({Value:"Value is required"})
      setErrorState(true)
      setTimeout(() => {
        setErrorState(false)
      }, 2000);
     
                    }
 
 
  

    else{
      setErrorState(false)
      setWholeIncome([...wholeIncome,{id:Math.random()*1000,incomeTitle,incomeValue:parseInt(incomeValue)}])
      setIncomeTitle('')
      setIncomeValue('')

    }
  

 

  }

  const expenseSubmitHandler = (e) =>{
    e.preventDefault();

    if(!expenseTitle){
      if(!expenseValue){
        setErrors1({title:"Title is required",value:"Value is required"})
        setErrorState1(true)
        setTimeout(() => {
          setErrorState1(false)
        },2000);
                      }
      else{
        setErrors1({title:"Title is required"})
        setErrorState1(true)
        
        setTimeout(() => {
          setErrorState1(false)
          
        }, 2000);
    }
   

  }

  else  if(!expenseValue){
    setErrors1({value:"Value is required"})
    setErrorState1(true)
    setTimeout(() => {
      setErrorState1(false)
    }, 2000);
                  }

  else{
    setErrorState1(false)
    setWholeExpense([...wholeExpense,{id:Math.random()*1000,expenseTitle,expenseValue:parseInt(expenseValue)}])
    setExpenseTitle('')
    setExpenseValue('')

  }
  
 

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
      errorState={errorState}
      errors={errors}
      incomeSubmitHandler={incomeSubmitHandler}
      setIncomeTitle={setIncomeTitle}
      setIncomeValue={setIncomeValue}
      wholeIncome={wholeIncome}
      incomeTitle={incomeTitle}
      incomeValue={incomeValue}
      incomeDeleteHandler={incomeDeleteHandler}
      
       />

<Expense
 errorState1={errorState1}
 errors1={errors1}
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
