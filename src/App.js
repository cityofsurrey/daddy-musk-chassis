import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import { ApolloProvider, ApolloClient, createNetworkInterface } from 'react-apollo'
import { Provider } from 'react-redux'

import Routes from './routes'

// Base stylesheets
import './normalize.css'
import './app.css'

// Setup Apollo client
const createClient = () => (
  new ApolloClient({
    networkInterface: createNetworkInterface({
      uri: `${process.env.POLLTAL_API}/graphql`,
    }),
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
