import React from "react";
import ErrorBoundry from "./Components/ErrorBoundry";
import Router from "./Components/Router";
import { Provider } from "react-redux";
import {Store} from './Redux/Store'
class App extends React.Component{
  render(){
    return (
     <Provider store={Store}>
        <ErrorBoundry>
          <Router/>
        </ErrorBoundry>
      </Provider>
    );

  }
}

export default App;
