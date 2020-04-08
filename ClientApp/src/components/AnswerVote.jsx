import React, { useState, useEffect } from 'react'
import axios from 'axios'

const AnswerVote = props => {
  const { answers } = props

  let total = 0
  for (let i = 0; i < answers.vote; i++) {
    total += answers[i].vote
  }
  console.log(answers.vote)
  return <>{answers.vote}</>
}

export default AnswerVote
