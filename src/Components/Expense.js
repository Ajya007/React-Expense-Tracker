
import ExpenseTransaction from './ExpenseTransaction.js'
const Expense= ({errorState1,errors1,setExpenseValue,setExpenseTitle,expenseSubmitHandler,wholeExpense,expenseDeleteHandler,expenseTitle,expenseValue}) => {
 
    

    return(
        <div className="expense" >
            <form onSubmit={expenseSubmitHandler}>
                <input onChange={(e) => setExpenseTitle(e.target.value)} placeholder="Add Expense" value={expenseTitle} autoComplete="off"/>
                {errorState1 && <p className="err">{errors1.title}</p> }
                <input onChange={(e) => setExpenseValue(e.target.value)}  placeholder="Add Value"  value={expenseValue} autoComplete="off"/>
                {errorState1 && <p className="err">{errors1.value}</p> }
                <button type="submit" >submit</button>
            </form>

            <div className="expense-history">
                <h1>Transaction History</h1>
                {wholeExpense.map(el => <ExpenseTransaction key={el.id} el={el}  expenseDeleteHandler={expenseDeleteHandler}/>
)}                
            </div>
        </div>
    )
}

export default Expense