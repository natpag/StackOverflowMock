import React from 'react'
import { Link } from 'react-router-dom'

const SubmittedQuestion = () => {
  return (
    <>
      <section className="homePage">
        <section className="submitted">
          <h6>Thank you for submitting your question!</h6>
          <Link to="/">Click here to go home!</Link>
        </section>
      </section>
    </>
  )
}

export default SubmittedQuestion
