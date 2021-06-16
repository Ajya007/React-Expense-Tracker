

const ExpenseTransaction = ({el,expenseDeleteHandler}) => {
    return (
        <div className="incometransaction">
         <p>{el.expenseTitle}</p>
         <div>
         <p>{el.expenseValue}</p>
         <button onClick={() => expenseDeleteHandler(el.id)}>delete</button>
         </div>

            
        </div>
    )
}

export default ExpenseTransaction
