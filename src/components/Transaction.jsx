import React, { useContext } from 'react'
import GlobalContext from '../context/Globalcontext'

function Transaction() {

const {transaction}=useContext(GlobalContext)

// funcation for income

    const income = transaction.filter((item)=> {
        if (item.amount > 0) {
            return item
        }
    }).reduce((p,c)=>{
        return p + c.amount
     },0 )

     // funcation for income

     
    const expense = transaction.filter((item)=> {
        if (item.amount < 0) {
            return item
        }
    }).reduce((p,c)=>{
        return p + c.amount
     },0 )

    return (
        <div className="transactions">
            <div className="income">
                <h2>Total Income</h2>
                <h1>₹{income}</h1>
            </div>
            <div className="expense">
                <h2>Total Expense</h2>
                <h1>₹{expense}</h1>
            </div>
        </div>
    )
}

export default Transaction 