import React, { Component } from 'react';
import { HashRouter as Router, Route} from "react-router-dom";
import { ApolloProvider } from "react-apollo";
import GlobalStyle from './globalStyles';
import client from "./apollo.js"
import Home from './Home';
import Detail from './Detail';

class App extends Component {
  render() {
    return (
      <ApolloProvider client={client}>
        <GlobalStyle />
        <Router>
          <main>
            <Route exact={true} path={"/"} component={Home} />
            <Route exact={true} path={"/details/:movieId"} component={Detail} />
          </main>
        </Router>
      </ApolloProvider>
    );
  }
}

export default App;
