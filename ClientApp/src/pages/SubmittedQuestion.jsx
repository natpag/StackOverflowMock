import React from 'react'
import { Link } from 'react-router-dom'

const SubmittedQuestion = () => {
  return (
    <>
      <h1>Thank you for submitting your question!</h1>
      <Link to="/">Click here to go home!</Link>
    </>
  )
}

export default SubmittedQuestion
