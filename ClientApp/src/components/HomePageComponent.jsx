import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'

const HomePageComponent = () => {
  const [questions, setQuestions] = useState([])

  const getAllQuestions = async () => {
    const resp = await axios.get('/api/Questions')
    console.log(resp.data)
    setQuestions(resp.data)
  }

  useEffect(() => {
    getAllQuestions()
  }, [])

  return (
    <>
      <section className="homePage">
        <section className="leftSidebar">
          <p>
            <Link to="/" className="homeLink">
              Home
            </Link>
          </p>
          <p>PUBLIC</p>
          <p>Stack Overflow</p>
          <section>
            <p>Tags</p>
            <p>Users</p>
            <p>Jobs</p>
          </section>
          <p>TEAMS</p>
        </section>

        <section className="allQuestions">
          <p class="allQuestionsHeader">All Questions</p>
        </section>
        <section className="questionButton">
          <button className="button">
            <Link to="/ask" className="askButton">
              Ask Question
            </Link>
          </button>
        </section>

        <section className="centerSection">
          <section className="centerContainer">
            <div className="boxed centerHeader">
              Stack Overflow Recently Active Questions
            </div>

            {questions.map(question => {
              return (
                <section className="boxed questionBox">
                  <div className="votes">
                    <div className="mini-counts">
                      <span title>0</span>
                      <div className="label">votes</div>
                    </div>
                  </div>
                  <div className="answers">
                    <div className="mini-counts">
                      <span title>0</span>
                      <div className="label">answers</div>
                    </div>
                  </div>
                  <div className="views">
                    <div className="mini-counts">
                      <span title>0</span>
                      <div className="label">views</div>
                    </div>
                  </div>

                  <section className="summary">
                    <Link to={`/question/${question.id}`}>{question.body}</Link>
                    <section className="tags">
                      <Link to={`/question/${question.id}`} class="post-tag">
                        {question.tags}
                      </Link>
                    </section>
                  </section>
                  <section className="startedBy">Added by "user"</section>
                </section>
              )
            })}
          </section>
        </section>

        <section className="rightSection">
          <section className="overflowBlog">
            <p>The Overflow Blog</p>
            <p>Featured on Meta</p>
          </section>
          <section>
            <p>Custom Filters</p>
          </section>
          <p>Watched Tags on Public Q&A</p>
          <p>Ignored Tags</p>
          <p>Hot Networking Questions</p>
        </section>
      </section>
    </>
  )
}

export default HomePageComponent
