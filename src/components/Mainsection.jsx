import {useContext, useState,} from 'react'
import GlobalContext from '../context/Globalcontext'

function Mainsection() {

    const {transaction,savetransaction}=useContext(GlobalContext)

    const balance= transaction.reduce((p,c) => {
        return p + c.amount

    }, 0)

    
  const [text, setText]=useState([""])
  const [amount, setAmount]=useState([""])

  const handleSubmit=(e)=>{
    e.preventDefault()
    savetransaction(text,amount)
    setText("")
    setAmount("")
  }

return (
    <div className="total-tr">
        <div className="total-bl">
            <h2>Total Balance</h2>
            <h1>₹{balance}</h1>
        </div>

        <form className="input-field" onSubmit={(e)=>handleSubmit(e)}>
            <input type="text" placeholder="ENTER TRANSACTION NAME"
            onChange={(e)=>setText(e.target.value)}
            value={text}
             />
            <input type="number" placeholder="ENTER TRANSACTION AMOUNT"
            onChange={(e)=>setAmount(e.target.value)}
            value={amount}
            />
            <button>SAVE TRANSACTION</button>
        </form>


    </div>
)

}
export default Mainsection