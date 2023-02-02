
import { useContext } from 'react'
import GlobalContext from '../context/Globalcontext'
import Listitem from './Listitem'


function Listgroup() {

  const {transaction,deleteTransaction}=useContext(GlobalContext)

  return (
     
      <ul className="tr-list">
        {
          transaction.map(
            (t) => <Listitem key={transaction.id} transaction={t} deleteTransaction={deleteTransaction} />
          )
        }

      </ul>
  )
}

export default Listgroup