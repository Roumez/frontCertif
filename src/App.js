import Navbar from './Components/Navbar/Navbar'
import Marketplace from './Containers/Marketplace/Marketplace';
import Dashboard from './Containers/Dashboard/Dashboard'
import AddGames from './Containers/AddGames/AddGames'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
function App() {
  return (
    <>
      <Router>
      <Navbar />
      <Switch>
        <Route path="/" exact component={Marketplace} />
        <Route path="/dashboard" exact component={Dashboard} />
        <Route path="/creatorplace" exact component={AddGames} />
      </Switch>
      </Router>
    </>
  );
}

export default App;
