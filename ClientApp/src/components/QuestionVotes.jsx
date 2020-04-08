import React, { useState, useEffect } from 'react'
import axios from 'axios'

const QuestionVotes = props => {
  const { question } = props
  // const [questionVote, setQuestionVote] = useState(question.vote)

  // Add Votes to Question APi *****************
  const addQuestionVotesToApi = async id => {
    const resp = await axios.post(`/api/Questions/${id}/upVoteQ`)
    console.log(resp.data)
    // setQuestionVote(questionVote + 1)
  }

  // Subtract Votes to Question APi *****************
  const subtractQuestionVotesToApi = async id => {
    const resp = await axios.post(`/api/Questions/${id}/downVoteQ`)
    console.log(resp.data)
    // setQuestionVote(questionVote - 1)
  }

  return (
    <section className="questionComponent">
      <section className="votes">
        <button
          className="voteArrow"
          onClick={() => addQuestionVotesToApi(question.id)}
        >
          Up
        </button>
        {question.vote}
        <button
          className="voteArrow"
          onClick={() => subtractQuestionVotesToApi(question.id)}
        >
          Down
        </button>
      </section>
      <p>{question.body}</p>
    </section>
  )
}

export default QuestionVotes
