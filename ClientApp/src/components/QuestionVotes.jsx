import React from 'react'

const QuestionVotes = props => {
  const { answers } = props

  let total = 0
  for (let i = 0; i < answers.vote; i++) {
    total += answers[i].vote
  }
  console.log(answers)
  return <>{answers.vote}</>
}

export default QuestionVotes
