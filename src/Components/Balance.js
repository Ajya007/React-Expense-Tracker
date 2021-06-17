

const Balance = ({totalIncome,totalExpense,totalBalance}) => {
    return (
        <div className='balance'>
            <h1>Budget Tracker</h1>
            <div className='total-balance'>
                <h2>Your Balance</h2>
                <h2>{totalBalance}</h2>
            

            </div>
            <div className="total-ie">
                <div className="total-i">
                    <h2>Income</h2>
                    <h2>+ {totalIncome}</h2>
                </div>
                <div className="total-e">
                    <h2>Expense</h2>
                    <h2>- {totalExpense}</h2>
                </div>

            </div>

            
        </div>
    )
}

export default Balance
