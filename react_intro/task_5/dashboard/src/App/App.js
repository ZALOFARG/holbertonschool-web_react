import hbtnLogo from './holberton-logo.jpg';
import './App.css';
import { getFullYear, getFooterCopy } from '../utils/utils';

function App() {
  const handleClick = (event) => {
    const inputId = event.target.htmlFor;
    document.querySelector('#inputId').focus();
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={hbtnLogo} alt="logo" />
        <h1>School dashboard</h1>
      </header>

      <main className="App-body">
        <p>Login to access the full dashboard</p>
        <div className='Login-input'>
          <label htmlFor='email' onClick={handleClick}>Email</label>
          <input type='email' id='email' />
          <label htmlFor='password' onClick={handleClick}>Password</label>
          <input type='password' id='password' />
          <button type='button'>OK</button>
        </div>
      </main>

      <footer className="App-footer">
        <p>Copyright {getFullYear()} - {getFooterCopy(true)}</p>
      </footer>
    </div>
  );
}

export default App;
