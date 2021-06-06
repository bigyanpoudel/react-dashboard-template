import logo from './logo.svg';
import './App.css';
import Dashboard from './Dashboard/Dashboard'
import {BrowserRouter} from 'react-router-dom'
function App() {
  return (
    <BrowserRouter>
    <Dashboard>
      <h1>This is dashboard</h1>
    </Dashboard>
    </BrowserRouter>
  );
}

export default App;
