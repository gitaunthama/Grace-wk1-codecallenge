import './App.css';
import Navbar from './components/Navbar';
import SearchTransaction from './components/SearchTransaction';
import AccountContainer from './components/AccountContainer';
import TransactionsList from './components/TransactionList';

function App() {
  return (
    <div className="App">
      <Navbar />
      <SearchTransaction />
      <AccountContainer />
      <TransactionsList />
    
    </div>
  );
}

export default App;
