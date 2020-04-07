import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Question from '../components/Question'

const Answer = props => {
  console.log(props)
<<<<<<< HEAD
  const { question } = props
=======
  // const questionId = props.match.params.questionId
  // const { question } = props
>>>>>>> 43be05ee5423a7cd1592a57f39c070786c1a0a21
  const { questionId } = props
  const { answerId } = props
  const [answers, setAnswers] = useState([])
  const [newAnswerText, setNewAnswerText] = useState()

  const sendAnswerToApi = async () => {
    const resp = await axios.post(`/api/Questions/${questionId}/answers`, {
      comment: newAnswerText,
    })
    console.log(resp.data)
  }
  // empty obj
  const [questionDetail, setQuestionDetail] = useState({
    questionData: {},
  })
  //
  const getQuestionData = async () => {
    const response = await axios.get(`/api/Questions/${questionId}`)
    // console.log(response.data)
    // console.log(response.data.title)
    // setQuestionDetail(response.data)
    setQuestionDetail({
      // set the object to the data from api? maybe
      questionData: response.data,
    })
  }
  useEffect(() => {
    getQuestionData()
  }, [])

  const [questionDetails, setQuestionDetails] = useState({
    questionData: {},
  })

  const getQuestionData = async () => {
    const resp = await axios.get('/api/Questions/' + questionId)
    console.log(resp.data)
    console.log(resp.data.title)
    setQuestionDetails(resp.data)
  }

  const [answerDetails, setAnswerDetails] = useState({
    answerData: {},
  })

  const getAllAnswers = async () => {
    const resp = await axios.get('/api/Answers/question/' + questionId)
    console.log(resp.data)
    setAnswers(resp.data)
  }

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
<<<<<<< HEAD
          <h2>{questionDetails.title}</h2>
=======
          <h2>Question Title</h2>
          {/* <h2>{questionDetail.Title}</h2> */}
          {/* <h2>{questionData.title}</h2> */}
          <h2>{questionDetail.questionData.title}</h2>

>>>>>>> 43be05ee5423a7cd1592a57f39c070786c1a0a21
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
        <ul className="AnswerList">
          {answers.map(answer => {
            return (
              <li>
                <p>Answer: {answer.comment}</p>
              </li>
            )
          })}
        </ul>
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
      {/* <ul>
        {question.answer.map(answer => {
          return (
            <li>
              <p>{answer.answer}</p>
            </li>
          )
        })}
      </ul> */}
    </>
  )
}

export default Answer
