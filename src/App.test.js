import Enzyme, { mount } from 'enzyme'
import EnzymeAdapter from 'enzyme-adapter-react-16'
import { createStore } from 'redux'
import App from './App'
import { Route, Router, Switch } from 'react-router'
import Home from './views/Home'
import NotFound from './views/NotFound'
import Game from './views/Game'
import Results from './views/Results'
import { Provider } from 'react-redux'
import rootReducer from './reducers/rootReducer'
import { createMemoryHistory } from 'history'
import QuestionList from './components/QuestionList'
import QuestionForm from './components/QuestionForm'

require('jest-fetch-mock').enableFetchMocks()

Enzyme.configure({ adapter: new EnzymeAdapter() })

describe('Trividabo App Test', () => {
  it('Render App', () => {
    const wrapper = mount(<App />)
    expect(wrapper).toHaveLength(1)
  })
})

const initialAppState = {
  loading: false,
  error: null,
  questions: [],
  currentQuestion: null,
  counter: 0,
  numCorrectAnswers: 0
}

const setUp = (props, initialState = initialAppState, history = createMemoryHistory()) => {
  const mockStore = createStore(rootReducer, initialState)
  mockStore.dispatch = jest.fn()

  const wrapper = mount(
    <Provider store={mockStore}>
    <Router history={history}>
      <Switch>
        <Route exact path='/results' component={Results} />
        <Route exact path='/game' component={Game} />
        <Route exact path='/' component={Home} />
        <Route exact component={NotFound} />
      </Switch>
      <Home></Home>
    </Router>
  </Provider>
  )

  return {
    get wrapper () {
      return wrapper
    },
    get history () {
      return history
    }
  }
}

describe('Home Component', () => {
  it('Render Home', () => {
    const { wrapper } = setUp()
    expect(wrapper.find(Home).exists()).toBe(true)
  })

  it('Check if start button is render', () => {
    const { wrapper } = setUp()
    expect(wrapper.find('#startGameButton').exists()).toBe(true)
  })

  it('Click start game button', () => {
    const { wrapper } = setUp()
    wrapper.find('#startGameButton').first().simulate('click')
    expect(wrapper.find(Game).exists()).toBe(true)
  })
})

describe('Not Found Component', () => {
  it('Render Not Found', () => {
    const history = createMemoryHistory()
    history.push('/not-found-path')
    const { wrapper } = setUp(null, initialAppState, history)
    expect(wrapper.find(NotFound).exists()).toBe(true)
  })
})

describe('Results Component', () => {
  it('Render Results', () => {
    const history = createMemoryHistory()
    history.push('/results')
    const { wrapper } = setUp(null, initialAppState, history)
    expect(wrapper.find(Results).exists()).toBe(true)
  })

  it('go results WITHOUT questions', () => {
    const history = createMemoryHistory()
    history.push('/results')
    const withoutQuestionsState = {
      loading: false,
      error: null,
      questions: [],
      currentQuestion: null,
      counter: 0,
      numCorrectAnswers: 0
    }

    const { wrapper } = setUp(null, withoutQuestionsState, history)
    expect(wrapper.find(Results).exists()).toBe(true)
    expect(wrapper.find(QuestionList).exists()).toBe(false)
    expect(wrapper.text().includes('Oops! There are no resutls')).toBe(true)
  })

  it('go results WITH questions', () => {
    const history = createMemoryHistory()
    history.push('/results')
    const withQuestionsState = {
      loading: false,
      error: null,
      questions: [{
        text: 'the number of the devil',
        number: 666,
        found: true,
        type: 'trivia',
        answers: [
          '674',
          '676',
          '672',
          '666'
        ],
        result: 'success'
      }],
      currentQuestion: null,
      counter: 0,
      numCorrectAnswers: 0
    }

    const { wrapper } = setUp(null, withQuestionsState, history)
    expect(wrapper.find(Results).exists()).toBe(true)
    expect(wrapper.find(QuestionList).exists()).toBe(true)
  })
})

describe('Game Component', () => {
  it('Render Game', () => {
    const history = createMemoryHistory()
    history.push('/game')
    const { wrapper } = setUp(null, initialAppState, history)
    expect(wrapper.find(Game).exists()).toBe(true)
  })

  it('Error in Game', () => {
    const history = createMemoryHistory()
    history.push('/game')
    const errorGameState = {
      loading: false,
      error: 'Question not found',
      questions: [],
      currentQuestion: null,
      counter: 0,
      numCorrectAnswers: 0
    }
    const { wrapper } = setUp(null, errorGameState, history)
    expect(wrapper.find(Game).exists()).toBe(true)
    expect(wrapper.text().includes('We are having problems')).toBe(true)
    expect(wrapper.find('#tryAgainButton').exists()).toBe(true)
  })

  it('Loading in Game', () => {
    const history = createMemoryHistory()
    history.push('/game')
    const loadingGameState = {
      loading: true,
      error: null,
      questions: [],
      currentQuestion: null,
      counter: 0,
      numCorrectAnswers: 0
    }
    const { wrapper } = setUp(null, loadingGameState, history)
    expect(wrapper.find(Game).exists()).toBe(true)
    expect(wrapper.find('.load').exists()).toBe(true)
  })

  it('render Question Form', () => {
    const history = createMemoryHistory()
    history.push('/game')
    const currentQuestionState = {
      loading: false,
      error: null,
      questions: [],
      currentQuestion: {
        text: 'the approximate number of fat cells in an average adult',
        number: 45000000000,
        found: true,
        type: 'trivia',
        answers: [
          '45000000000',
          '48000000000',
          '49000000000',
          '47000000000'
        ],
        result: 'success'
      },
      counter: 0,
      numCorrectAnswers: 0
    }
    const { wrapper } = setUp(null, currentQuestionState, history)
    expect(wrapper.find(Game).exists()).toBe(true)
    expect(wrapper.find(QuestionForm).exists()).toBe(true)
  })
})
