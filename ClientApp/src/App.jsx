import React, { Component } from 'react'
import { Route, Switch } from 'react-router'
import { Layout } from './components/Layout'
import Home from './pages/Home'
import HelloWorld from './pages/_template/HelloWorld'
import HeyWorld from './pages/_template/HeyWorld'
import NotFound from './pages/NotFound'
import AnswerPage from './pages/AnswerPage'
import AskPage from './pages/AskPage'
import SubmittedQuestion from './pages/SubmittedQuestion'
import Search from './pages/Search'
import './custom.scss'
import QuestionDetails from './pages/QuestionDetails'

export default class App extends Component {
  static displayName = App.name

  render() {
    return (
      <Layout>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/counter" component={HelloWorld} />
          <Route exact path="/typescript" component={HeyWorld} />
          <Route exact path="/answer" component={AnswerPage} />
          <Route exact path="/question/:questionId" component={AnswerPage} />

          <Route exact path="/ask" component={AskPage} />
          <Route exact path="/Submitted" component={SubmittedQuestion} />
          <Route exact path="/Search" component={Search} />
          <Route exact path="*" component={NotFound} />
        </Switch>
      </Layout>
    )
  }
}
