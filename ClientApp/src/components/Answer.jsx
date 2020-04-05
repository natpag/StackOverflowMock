import React, { useState } from 'react'
import axios from 'axios'

const Answer = props => {
  const { answer } = props

  const [newAnswerText, setNewAnswerText] = useState('')

  const sendAnswerToApi = async () => {
    const resp = await axios.post(`/api/`)
  }
  return (
    <>
      <section className="answer-container">
        <section className="answer-header">
          <h2>Question Title</h2>
          <ul className="answer-under-header">
            <li>Asked Today</li>
            <li>Viewed 2 Times</li>
          </ul>
        </section>

        <p>the actual question goes here</p>
        <section className="answer-code-container">
          <p className="answer-code-section">code example goes here</p>
        </section>
        <section className="answer-tag-button-container">
          <button class="post-tag">javascript</button>
          <button class="post-tag">html</button>
          <button class="post-tag">react</button>
        </section>

        <section className="answer-share-user-container">
          <ul>
            <li class="share">share - edit - follow</li>
            <li className="answer-user-info">user info somehow</li>
          </ul>
        </section>
        <ul>all answers here...</ul>
        <h6 className="answer-know-someone">
          Know someone who can answer? Share a link to this question via email.
        </h6>
        <h5>Your Answer</h5>
        <section className="answer-text-area-container">
          <textarea
            name=""
            id=""
            cols="50"
            rows="10"
            placeholder="type answer here..."
            value={newAnswerText}
            onChange={e => setNewAnswerText(e.target.value)}
          ></textarea>
        </section>
        <button className="button" onClick={sendAnswerToApi}>
          Post Your Answer
        </button>
      </section>
    </>
  )
}

export default Answer
