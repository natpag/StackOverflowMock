import React from 'react'
import Answer from '../components/Answer'
import AnswerVote from '../components/AnswerVote'

const AnswerPage = props => {
  return (
    <>
      <Answer
        questionId={props.match.params.questionId}
        // answerId={props.match.params.answerId}
      />
    </>
  )
}

export default AnswerPage
