import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'

const Answer = props => {
  console.log(props)
  const { questionId } = props
  const { answerId } = props
  const [answers, setAnswers] = useState([])
  const [newAnswerText, setNewAnswerText] = useState()

  // Send Answer to API
  const sendAnswerToApi = async () => {
    const resp = await axios.post(`/api/Questions/${questionId}/answers`, {
      comment: newAnswerText,
    })
    console.log(resp.data)
  }

  // Add Votes to Answers APi
  const addAnswerVotesToApi = async () => {
    const resp = await axios.put(`/api/Answers/addVote/${answerId}`)
    console.log(resp.data)
  }

  //SUBTRACT Votes to Answer Api
  const subtractAnswerVotesToApi = async () => {
    const resp = await axios.put(`/api/Answers/subtractVote/${answerId}`)
    console.log(resp.data)
  }

  // Get Question Details
  const [questionDetails, setQuestionDetails] = useState({
    questionData: {},
  })

  const getQuestionData = async () => {
    const resp = await axios.get('/api/Questions/' + questionId)
    console.log(resp.data)
    setQuestionDetails(resp.data)
  }

  // Get Answer Details
  const [answerDetails, setAnswerDetails] = useState({
    answerData: {},
  })
  const getAllAnswers = async () => {
    const resp = await axios.get('/api/Answers/question/' + questionId)
    console.log(resp.data)
    setAnswers(resp.data)
  }

  // Use Effects for Answer and Questions to Show on Page
  useEffect(() => {
    getQuestionData()
  }, [])

  useEffect(() => {
    getAllAnswers()
  }, [])

  return (
    <>
      <section className="answer-container">
        <section className="answer-header">
          <h2>{questionDetails.title}</h2>
          <ul className="answer-under-header">
            <li>Asked Today</li>
            <li>Viewed 2 Times</li>
          </ul>
        </section>
        <p>{questionDetails.body}</p>
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
        <h6>{answers.length} Answers</h6>
        <section className="AnswerList">
          {answers.map(answer => {
            return (
              <>
                <section className="answerComponent">
                  <section className="votes">
                    <button
                      className="voteArrow"
                      // onClick={e => {
                      //   addAnswerVotesToApi(e.target.value)++
                      // }}
                    >
                      Up
                    </button>
                    {answer.vote}
                    <button className="voteArrow">Down</button>
                  </section>
                  <p>Answer: {answer.comment}</p>
                </section>
              </>
            )
          })}
        </section>
        <h6>Your Answer</h6>
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

        <Link to="/Submitted" className="button" onClick={sendAnswerToApi}>
          Post Your Answer
        </Link>
      </section>
    </>
  )
}

export default Answer
