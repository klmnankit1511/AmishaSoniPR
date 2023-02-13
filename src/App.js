import logo from './logo.svg';
import './App.css';
import Number from './Component/Number';
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Number name = "Amish Soni" age = {22} />
        <Number name = "Ankit Kumar" age = {22 }/>
        <Number name = "Soni" age = {23}  />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        {/* <Number /> */}
      </header>
    </div>
  );
}

export default App;
