import React from 'react'

const Answer = () => {
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
          ></textarea>
        </section>
        <button className="button">Post Your Answer</button>
      </section>
    </>
  )
}

export default Answer
