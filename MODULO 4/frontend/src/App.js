import Header from './Components/Layout/Header';
import Nav from './Components/Layout/Nav';
import Footer from './Components/Layout/Footer';

import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import 'font-awesome/css/font-awesome.min.css';
import IndexPage from './Pages/IndexPage';
import BiografiaPage from './Pages/BiografiaPage';
import DiscografiaPage from './Pages/DiscografiaPage';
import RedesycontactosPage from './Pages/RedesycontactosPage';

function App() {
  return (
    <Router>
      <Header/>
      <Nav/>
      <Switch>
        <Route path="/index" exact component={IndexPage} />
        <Route path="/biografia" exact component={BiografiaPage} />
        <Route path="/discografia" exact component={DiscografiaPage} />
        <Route path="/redesycontacto" exact component={RedesycontactosPage} />
        </Switch>
      <Footer/>
      </Router>
   
  );
}

export default App;
