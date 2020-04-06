import React from 'react'
import { Link } from 'react-router-dom'

const EmptyTrailList = () => {
  return (
    <section className="no-results-message">
      No Question found. <Link to="/ask">Ask a new question?</Link>
    </section>
  )
}

export default EmptyTrailList
