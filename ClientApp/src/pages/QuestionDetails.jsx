import React, { useState, useEffect } from 'react'
import axios from 'axios'
// import Answer from '../components/Answer'
import Question from '../components/Question'

const QuestionDetails = props => {
  console.log(props)
  const questionId = props.match.params.questionId

  const [question, setQuestion] = useState()

  const getQuestionData = async () => {
    const resp = await axios.get('/api/questions/' + questionId)
    console.log(resp.data)
    setQuestion(resp.data)
  }

  useEffect(() => {
    getQuestionData()
  }, [])
  return <>{/* <Question question={question} /> */}</>
}

export default QuestionDetails
