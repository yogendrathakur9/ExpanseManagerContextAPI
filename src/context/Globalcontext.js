
import { v4 as uuidv4 } from 'uuid';
const { createContext, useState } = require("react");


const GlobalContext = createContext()

export const GlobalProvider = ({children}) => {

    const [transaction, setTransaction] = useState([])

    const savetransaction = (text, amount) => {

        const newTransaction = {
            id: uuidv4(),
            text: text,
            amount: parseInt(amount)
        }
        setTransaction([...transaction, newTransaction])
    }


    // For delete transaction

    const deleteTransaction = (id) => {
        setTransaction(transaction.filter(item => item.id !== id))
    }


    return (
        <GlobalContext.Provider value={{ transaction, savetransaction, deleteTransaction }} >
            {children}
        </GlobalContext.Provider>

    )

}

export default GlobalContext