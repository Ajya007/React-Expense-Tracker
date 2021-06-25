import IncomeTransaction from './InocmeTransaction.js'
const Income = ({errorState,errors,setIncomeValue,setIncomeTitle,incomeSubmitHandler,wholeIncome,incomeTitle,incomeValue,incomeDeleteHandler}) => {



    return(
        <div className="income" >
            <form onSubmit={incomeSubmitHandler}>
                <input onChange={(e) => setIncomeTitle(e.target.value)} placeholder="Add Income" value={incomeTitle} name="Title" autoComplete="off"/>
               {errorState && <p className="err">{errors.Title}</p> }
                <input onChange={(e) => setIncomeValue(e.target.value)} placeholder="Add Value" value={incomeValue} name="value" pattern="\d{1,5}" autoComplete="off" />
                {errorState && <p className="err">{errors.Value}</p> }
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