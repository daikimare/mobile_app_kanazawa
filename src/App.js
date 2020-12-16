import logo from './logo.svg';
import './App.css';
import Navbar from './coponent/Navbar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

// page component
import Maparea from './coponent/Maparea';
import Csv from './coponent/CSV';

const Home = () =>{
  return(
    <h1>HomePage</h1>
  );
}

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Switch>
          <Route exact path='/' component={Home} />
          <Route path='/' component={Maparea} />
          <Route path='/' component={Csv} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
