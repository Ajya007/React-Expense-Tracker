
import ExpenseTransaction from './ExpenseTransaction.js'
const Expense= ({setExpenseValue,setExpenseTitle,expenseSubmitHandler,wholeExpense,expenseDeleteHandler,expenseTitle,expenseValue}) => {
 
    

    return(
        <div className="expense" >
            <form onSubmit={expenseSubmitHandler}>
                <input onChange={(e) => setExpenseTitle(e.target.value)} placeholder="Add Expense" value={expenseTitle} autoComplete="off"/>
                <input onChange={(e) => setExpenseValue(e.target.value)}  value={expenseValue} autoComplete="off"/>
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