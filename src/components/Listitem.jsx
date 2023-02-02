import React from 'react'
import { FaTrashAlt } from "react-icons/fa"

function Listitem({deleteTransaction,transaction }) {


    return (
        <li className={transaction.amount > 0 ? "income-li" : "expense-li"}>
            <h1>₹{transaction.amount}</h1>
            {transaction.text}
            <button className='dlbtn'onClick={()=>deleteTransaction(transaction.id)}> <FaTrashAlt /></button>
        </li>

    )
}

export default Listitem