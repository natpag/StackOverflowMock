import React from 'react'

const QuestionList = props => {
  let { results } = props
  return (
    <ul className="resultList">
      {results.map(question => {
        return (
          <li>
            <p>Title: {question.title}</p>
            <p>Question: {question.body}</p>
          </li>
        )
      })}
    </ul>
  )
}

export default QuestionList
