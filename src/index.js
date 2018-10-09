import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import store from './store'
import { ListaPacotes } from './views/'

const App = () => (
    <Provider store={store}>
        <ListaPacotes />
    </Provider>
)

ReactDOM.render(<App />, document.getElementById('root'));