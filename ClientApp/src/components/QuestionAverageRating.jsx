import React from 'react'

const QuestionAverageRating = props => {
  const { answers } = props

  let total = 0
  for (let i = 0; i < answers.length; i++) {
    total += answers[i].vote
  }
  const avg = total / answers.length
  console.log(answers)
  return (
    <>
      {avg} /5 ({answers.length} answer)
    </>
  )
}

export default QuestionAverageRating
