import './App.css';
import WelcomePage from './components/WelcomePage';
import { Router,Routes,Route } from 'react-router-dom';

function App() {
  let user = JSON.parse(localStorage.getItem("user"));
  if(user){
    console.log(`Redirect ${user.name} to Dashboard!`);
  }
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path='/' element= {<WelcomePage/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
