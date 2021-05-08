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

function App () {
  return (
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
  )
}

export default App
