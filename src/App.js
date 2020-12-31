import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useParams,
  useRouteMatch
} from "react-router-dom";
import Home from './Components/Home/Home';
import CountryDetails from './Components/CountryDetails/CountryDetails';
import NotFound from './Components/NotFound/NotFound';
function App() {
  return (
    <Router>
      <Switch>
        <Route path="/home">
          <Home/>

        </Route>
        <Route path="/country/:countryName">
          <CountryDetails></CountryDetails>
        </Route>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="*">
          <NotFound></NotFound>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
