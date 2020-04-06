import React from 'react'

const QuestionList = props => {
  let { results } = props
  return (
    <ul>
      {results.map(question => {
        return <li>{question.Title}</li>
      })}
    </ul>
  )
}

export default QuestionList
