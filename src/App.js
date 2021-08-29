import logo from './logo.svg';
import './App.css';
import { Router, Switch, Route, BrowserRouter } from "react-router-dom";
import History from "./History";
//import { Provider } from "react-redux";

import Signin from './Components/Signin';
import Signup from './Components/Signup';

function App() {
  return (
    //history={history}
      <BrowserRouter>
          <Router>
            <div className="Content">
              <Switch>
              <Route exact path="/" component={Signin}>
                  {/* <Provider store={store}> */}
                    <Signin />
                  {/* </Provider> */}
                </Route>

                <Route path="/Signup" component={Signup}>
                  <Signup />
                </Route>
              </Switch>
            </div>
          </Router>
      </BrowserRouter>
    
  );
}

export default App;
