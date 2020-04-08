import React, { useState, useEffect } from 'react'
import axios from 'axios'

const QuestionVotes = props => {
  const { questions } = props

  let total = 0
  for (let i = 0; i < questions.vote; i++) {
    total += questions[i].vote
  }
  console.log(questions.vote)
  return <>{questions.vote}</>
}

export default QuestionVotes
