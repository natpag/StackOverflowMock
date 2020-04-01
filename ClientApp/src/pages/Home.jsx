import React from 'react'
import { Link } from 'react-router-dom'

export function Home() {
  return (
    <div>
      <h2>All Questions</h2>
      <button>Ask Question</button>
      <Link to="/answer">answer</Link>
    </div>
  )
}
