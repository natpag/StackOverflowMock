import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Question from '../components/Question'
import QuestionAverageRating from './QuestionAverageRating'

const Answer = props => {
  console.log(props)
  const { question } = props
  const { questionId } = props
  const { answerId } = props
  const [answers, setAnswers] = useState([])
  const [newAnswerText, setNewAnswerText] = useState()
  const [reviewScore, setReviewScore] = useState(0)

  // Send Answer to API
  const sendAnswerToApi = async () => {
    const resp = await axios.post(`/api/Questions/${questionId}/answers`, {
      comment: newAnswerText,
      vote: reviewScore,
    })
    console.log(resp.data)
  }
  const [questionDetail, setQuestionDetail] = useState({
    questionData: {},
  })

  // Get Question Details
  const getQuestionData = async () => {
    const response = await axios.get(`/api/Questions/${questionId}`)
    setQuestionDetail({
      questionData: response.data,
    })
  }
  const [questionDetails, setQuestionDetails] = useState({
    questionData: {},
  })

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
          <h2>Question Title</h2>
          <h2>{questionDetail.questionData.title}</h2>

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
        {/* <p>{QuestionAverageRating}</p>
        <p>{questionScore}</p> */}
        <p>
          <QuestionAverageRating answers={answers} />
          {/* <QuestionAverageRating question={question} /> */}
        </p>
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
                {/* <p>{rating}</p> */}
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
        <button
          onClick={() =>
            setReviewScore(prevReviewScore => {
              return [prevReviewScore + 1]
            })
          }
        >
          like!
        </button>
        <button onClick={() => setReviewScore(1)}>like!</button>
        {/* <button onClick={() => setQuestionScore(1)}>Thumbs up</button> */}
        <button className="button" onClick={sendAnswerToApi}>
          Post Your Answer
        </button>
      </section>
    </>
  )
}

export default Answer
