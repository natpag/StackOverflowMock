import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import Answer from '../components/Answer'

const AnswerVote = props => {
  const { answer } = props

  // Add Votes to Answers APi *****************
  const addAnswerVotesToApi = async id => {
    const resp = await axios.post(`/api/Answers/${id}/upVote`)
    console.log(resp.data)
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
        {answer.vote}
        <button className="voteArrow">Down</button>
      </section>
      <p>Answer: {answer.comment}</p>
    </section>
  )
}

export default AnswerVote
