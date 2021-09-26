import './App.css';
import Header from './components/Header/Header';
import HireWriters from './components/HireWriters/HireWriters';
import Modal from '../src/utilities/Modal'
function App() {
  return (
    <div className="App">
      <Header></Header>
      <HireWriters></HireWriters>
      <Modal></Modal>
    </div>
  );
}

export default App;
