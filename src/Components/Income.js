
import IncomeTransaction from './InocmeTransaction.js'
const Income = ({setIncomeValue,setIncomeTitle,incomeSubmitHandler,wholeIncome}) => {

    

    return(
        <div className="income" >
            <form onSubmit={incomeSubmitHandler}>
                <input onChange={(e) => setIncomeTitle(e.target.value)} />
                <input onChange={(e) => setIncomeValue(e.target.value)} />
                <button type="submit" >submit</button>
            </form>

            <div className="income-history">
                <h1>Transaction History</h1>
                {wholeIncome.map(el => <IncomeTransaction key={el.id} el={el} />
)}                
            </div>
        </div>
    )
}

export default Income