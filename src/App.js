import './App.css';
import Navbar from './coponent/Navbar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

// page component
import Maparea from './coponent/Maparea';
import Csv from './coponent/Csv';

const Home = () =>{
  return(
    // 以下のh1タグは表示されないようしてあります。
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
          <Route path='/Maparea' component={Maparea} />
          <Route path='/Csv' component={Csv} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;