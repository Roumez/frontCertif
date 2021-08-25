import Navbar from './Components/Navbar/Navbar'
import Footer from './Components/Footer/Footer'
import Marketplace from './Containers/Marketplace/Marketplace';
import Dashboard from './Containers/Dashboard/Dashboard'
import AddGames from './Containers/AddGames/AddGames'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
function Dapp() {
  return (
    <>
      <Router>
      <Navbar />
      <Switch>
        <Route path="/" exact component={Marketplace} />
        <Route path="/dashboard" exact component={Dashboard} />
        <Route path="/creatorplace" exact component={AddGames} />
      </Switch>
      <Footer />
      </Router>
    </>
  );
}

export default Dapp;
