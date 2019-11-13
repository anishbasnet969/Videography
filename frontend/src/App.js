import React,{Component,Fragment} from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom';


import {loadUser} from "./actions/auth";

import Header from './components/Header';
import Register from './components/accounts/Register';
import Login from './components/accounts/Login';
import UploadVideo from './components/UploadVideo';
import Posts from './components/Posts'



import {Provider} from 'react-redux';
import store from './store';



class App extends Component{

  componentDidMount(){
    store.dispatch(loadUser());
  }

  render(){
    return (
      <Provider store={store}>
          <Router>
            <Fragment>
              <Header />
              <div className="container">
                <Switch>
                  <Route exact path="/upload" component={UploadVideo} />
                  <Route exact path="/" component={Posts} />
                  <Route exact path="/register" component={Register} />
                  <Route exact path="/login" component={Login} />
                </Switch>
              </div>
            </Fragment>
          </Router>
      </Provider>  
    );
  }
}

export default App;
