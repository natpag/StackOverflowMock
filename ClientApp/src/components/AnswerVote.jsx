import React, { useState, useEffect } from 'react'
import axios from 'axios'

const AnswerVote = props => {
  const { answer } = props
  const [answerVote, setAnswerVote] = useState(answer.vote)

  // Add Votes to Answers APi *****************
  const addAnswerVotesToApi = async id => {
    const resp = await axios.post(`/api/Answers/${id}/upVote`)
    console.log(resp.data)
    setAnswerVote(answerVote + 1)
  }

  // Subtract Votes to Answers APi *****************
  const subtractAnswerVotesToApi = async id => {
    const resp = await axios.post(`/api/Answers/${id}/downVote`)
    console.log(resp.data)
    setAnswerVote(answerVote - 1)
  }

  return (
    <section className="answerComponent">
      <section className="votes">
        <button
          className="voteArrow"
          onClick={() => addAnswerVotesToApi(answer.id)}
        >
          Up
        </button>
        {answerVote}
        <button
          className="voteArrow"
          onClick={() => subtractAnswerVotesToApi(answer.id)}
        >
          Down
        </button>
      </section>
      <p>Answer: {answer.comment}</p>
    </section>
  )
}

export default AnswerVote
