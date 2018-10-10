import React, { Component } from 'react';
import ApolloClient from 'apollo-boost'
import { ApolloProvider } from 'react-apollo'
import { HttpLink } from 'apollo-link-http';
import { InMemoryCache } from 'apollo-cache-inmemory';
import './styles/main.css'
import './styles/queries.css'

// components 
import DrawerContainer from './components/DrawerContainer'
import ControllerContainer from './components/ControllerContainer'
import MainContainer from './components/MainContainer'

const client = new ApolloClient({
    link: new HttpLink(),
    cache: new InMemoryCache()
})

class App extends Component {
    render() {
        return (
            <ApolloProvider client={client}>
                <div id="spa-wrapper">
                    <div id="drawer-container">
                        <DrawerContainer />
                    </div>
                    
                    <div id="main-container">
                        <MainContainer />
                    </div>

                    <div id="controller-container">
                        <ControllerContainer />
                    </div>
                </div>
            </ApolloProvider>
        );
    }
}

export default App;