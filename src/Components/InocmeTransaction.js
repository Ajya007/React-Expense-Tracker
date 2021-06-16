

const InocmeTransaction = ({el,incomeDeleteHandler}) => {
    return (
        <div className="incometransaction">
         <p>{el.incomeTitle}</p>
         <div>
         <p>{el.incomeValue}</p>
         <button onClick={() => incomeDeleteHandler(el.id)}>delete</button>
         </div>
        
            
        </div>
    )
}

export default InocmeTransaction
