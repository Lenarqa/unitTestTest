import logo from './logo.svg';
import './App.css';
import Greeting from './components/Greeting';
import Acync from './components/Async';

function App() {
  return (
    <div className="App">
      <Greeting />
      <Acync />
    </div>
  );
}

export default App;
