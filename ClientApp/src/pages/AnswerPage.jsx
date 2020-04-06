import React from 'react'
import Answer from '../components/Answer'

const AnswerPage = props => {
  return (
    <>
      <Answer questionId={props.match.params.questionId} />
    </>
  )
}

export default AnswerPage
