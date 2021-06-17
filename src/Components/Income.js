
import IncomeTransaction from './InocmeTransaction.js'
const Income = ({setIncomeValue,setIncomeTitle,incomeSubmitHandler,wholeIncome,incomeTitle,incomeValue,incomeDeleteHandler}) => {

    

    return(
        <div className="income" >
            <form onSubmit={incomeSubmitHandler}>
                <input onChange={(e) => setIncomeTitle(e.target.value)} placeholder="Add Income" value={incomeTitle} autocomplete="off"/>
                <input onChange={(e) => setIncomeValue(e.target.value)}  value={incomeValue} autocomplete="off" />
                <button type="submit" >submit</button>
            </form>

            <div className="income-history">
                <h1>Transaction History</h1>
                {wholeIncome.map(el => <IncomeTransaction key={el.id} el={el} incomeDeleteHandler={incomeDeleteHandler} />
)}                
            </div>
        </div>
    )
}

export default Income