import React, { useState } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'

const Question = () => {
  const [newQuestionText, setNewQuestionText] = useState('')
  const [newTitleText, setNewTitleText] = useState('')
  const [newTagText, setNewTagText] = useState('')
  const sendQuestionToApi = async () => {
    const resp = await axios.post(`/api/Questions`, {
      Body: newQuestionText,
      Title: newTitleText,
      Tags: newTagText,
    })
    console.log(resp.data)
  }

  return (
    <>
      <body className="AskPageBody">
        <section class="Top">
          <h1>Ask a question in</h1>
          {/* <!-- make a drop down button eventually? --> */}
          <h2>Public Q&A</h2>
        </section>
        <section class="QandI">
          <section class="QuestionBox">
            <h2>Title</h2>
            <input
              class="Title"
              onChange={e => setNewTitleText(e.target.value)}
            ></input>
            <h2>Body</h2>
            <input
              class="Body"
              onChange={e => setNewQuestionText(e.target.value)}
            ></input>
            <h2>tags</h2>
            <input
              class="Tags"
              onChange={e => setNewTagText(e.target.value)}
            ></input>
          </section>
          <section class="Instructions">
            <div class="one">
              <h3>step 1: Draft your question</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Temporibus consequuntur officia doloremque est aliquid
                assumenda.
              </p>
            </div>
            <div class="two">
              <h3>step 2: Draft your question</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Temporibus consequuntur officia doloremque est aliquid
                assumenda.
              </p>
            </div>
            <div class="three">
              <h3>step 3: Draft your question</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Temporibus consequuntur officia doloremque est aliquid
                assumenda.
              </p>
            </div>
          </section>
        </section>
        <Link
          to="/Submitted"
          className="AskPageButton"
          onClick={sendQuestionToApi}
        >
          submit
        </Link>
      </body>
    </>
  )
}

export default Question
