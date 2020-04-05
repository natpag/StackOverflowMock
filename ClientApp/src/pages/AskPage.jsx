import React, { useState } from 'react'
import axios from 'axios'
import { Redirect } from 'react-router-dom'

// const PostQuestion = () => {
//   const [question, setQuestion] = useState({})
//   const [wasSuccessfullyCreated, setWasSuccessfullyCreated] = useState({
//     shouldRedirect: false,
//     newTrailInformation: {},
//   })

//   const addQuestionToApi = async () => {
//     console.log('adding', question)
//     const resp = await axios.post('/api/question', question)
//     if (resp.status === 201) {
//       // do something something else
//       setWasSuccessfullyCreated({
//         shouldRedirect: true,
//           newQuestionInformation: resp.data, })

const AddQuestion = () => {
  const [question, setQuestion] = useState({})
  const [wasSuccessfullyCreated, setWasSuccessfullyCreated] = useState({
    shouldRedirect: false,
    newQuestionInformation: {},
  })

  const updateQuestionData = e => {
    const key = e.target.name
    const value = e.target.value
    setQuestion(prevQuestion => {
      prevQuestion[key] = value
      return prevQuestion
    })
  }

  const addQuestionToApi = async () => {
    console.log('adding', question)
    const resp = await axios.post('/api/questions', question)
    if (resp.status === 201) {
      // do something something else
      setWasSuccessfullyCreated({
        shouldRedirect: true,
        newQuestionInformation: resp.data,
      })
    } else {
      // do something else here
    }
  }

  if (wasSuccessfullyCreated.shouldRedirect) {
    return (
      <Redirect
        to={{
          pathname: `/question/${wasSuccessfullyCreated.newQuestionInformation.id}`,
          state: { trail: wasSuccessfullyCreated.newQuestionInformation },
        }}
      />
    )
  }
}
const AskPage = () => {
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
            <input class="Title"></input>
            <h2>Body</h2>
            <input class="Body" onChange={updateQuestionData}></input>
            <h2>tags</h2>
            <input class="Tags"></input>
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
        <button className="AskPageButton" onClick={addQuestionToApi}>
          submit
        </button>
      </body>
    </>
  )
}

export default AskPage
