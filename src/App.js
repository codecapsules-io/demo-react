import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
<link rel="stylesheet"
  href="https://maxcdn.bootstrapcdn.com/bootstrap/4.5.0/css/bootstrap.min.css"
  integrity="sha384-9aIt2nRpC12Uk9gS9baDl411NQApFmC26EwAOH8WgZl5MYYxFfc+NcPb1dKGj7Sk"
  crossorigin="anonymous" />

function App() {
  return (
    <div className="App">
      <header className="App-header">
          <div class="container" style={{height:100}}>
		<div class="w-100 h-100 d-flex justify-content-center align-items-center">
				<img src={logo} className="App-logo" alt="logo" />
			<div class="text-left">
				<h1>Hello, world!</h1>
				<h2 class="text-secondary">Congratulations. React is running on CodeCaps!</h2>
			</div>
		</div>
	</div>

      </header>
    </div>

  );
}

export default App;
