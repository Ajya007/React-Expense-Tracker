

const ExpenseTransaction = ({el,expenseDeleteHandler}) => {
    return (
        <div className="expensetransaction">
         <p>{el.expenseTitle}</p>
         <div className="et-collection">
         <p>{el.expenseValue}</p>
         <button onClick={() => expenseDeleteHandler(el.id)}>delete</button>
         </div>

            
        </div>
    )
}

export default ExpenseTransaction
