import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import { ApolloProvider, ApolloClient, createNetworkInterface, createBatchingNetworkInterface } from 'react-apollo'
import { Provider } from 'react-redux'

import Routes from './routes'

// Base stylesheets
import './normalize.css'
import './app.css'

// Setup Apollo client
const createClient = () => (
  new ApolloClient({
    networkInterface: createNetworkInterface({
      uri: 'http://localhost:8000/graphql',
    }),
    // networkInterface: createBatchingNetworkInterface({
    //   uri: 'http://localhost:8080/graphql',
    //   batchInterval: 30,
    //   batchMax: 10,
    // }),
  })
)

function App(props) {
  return (
    <ApolloProvider client={createClient()}>
      <Provider store={props.store}>
        <div style={{ position: 'relative', overflowX: 'hidden' }}>
          <Helmet
            titleTemplate="%s | Some Boilerplate"
            meta={[
              { charset: 'utf-8' },
              {
                'http-equiv': 'X-UA-Compatible',
                content: 'IE=edge',
              },
              {
                name: 'viewport',
                content: 'width=device-width, initial-scale=1',
              },
            ]}
          />
          <Routes />
        </div>
      </Provider>
    </ApolloProvider>
  )
}

App.propTypes = {
  store: PropTypes.object.isRequired, // eslint-disable-line
}

export default App
