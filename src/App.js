
import "./index.css"
import Navbar from "./components/Navbar";
import Mainsection from "./components/Mainsection";
import Transaction from "./components/Transaction";
import Listgroup from "./components/Listgroup"
import { GlobalProvider } from "./context/Globalcontext";

function App() {

  return (
    <GlobalProvider>
      <div>
        <div className="container">
          <Navbar />
          <Mainsection />
          <Transaction />
          <p id="recent-tr">Recent transaction</p>
          <Listgroup />
        </div>
      </div>
    </GlobalProvider>
  );
}

export default App
