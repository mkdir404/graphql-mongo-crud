import React from 'react';
import { ApolloProvider } from 'react-apollo';
import ApolloClient from 'apollo-boost';
import { BrowserRouter as Router , Route , Switch } from 'react-router-dom';


// import componets 
import Header from './componets/Header';
import Clients from './componets/Clients'
import NewClient from './componets/NewClient';
import EditClient from './componets/EditClient';


const client = new ApolloClient({
    uri : "http://localhost:4000/graphql",
    onError : ({networkError,graphQlErrros}) =>{
      console.log('graphqlErrors',graphQlErrros )
      console.log('networksError',networkError)

      return (
        <>
          <h2></h2>
        </>
      )


    }
});

function App() {
  return (
    <ApolloProvider client={client}>
        <Router>
          <>
            <Header/>
            <div className="container">
                <Switch>
                  <Route exact path="/" component={ Clients} />
                  <Route exact path="/client/new" component={ NewClient} />
                  <Route exact path="/client/edit/:id" component={ EditClient} />
                </Switch>
            </div>
          </>
        </Router>
    </ApolloProvider>
  );
}

export default App;
