import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div className="container" style={{height:100}}>
          <div className="w-100 h-100 d-flex justify-content-center align-items-center">
            <img src={logo} className="App-logo" alt="logo" />
            <div className="text-start">
              <h1>Hello, world!</h1>
              <h2 className="text-secondary">Congratulations. React is running on CodeCaps!</h2>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
}

export default App;
