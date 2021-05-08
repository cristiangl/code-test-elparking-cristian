import './App.css'
import Home from './views/Home'
import Game from './views/Game'
import Results from './views/Results'
import {
  BrowserRouter as Router,
  Route,
  Switch

} from 'react-router-dom'
import NotFound from './views/NotFound'
import { Provider } from 'react-redux'
import store from './store'

function App () {
  return (
    <Provider store={store}>
      <div className="App">
        <Router>
          <Switch>
            <Route exact path='/results'>
              <Results></Results>
            </Route>
            <Route exact path='/game'>
              <Game></Game>
            </Route>
            <Route exact path='/'>
              <Home></Home>
            </Route>
            <Route>
              <NotFound></NotFound>
            </Route>
          </Switch>

        </Router>
      </div>
    </Provider>
  )
}

export default App
