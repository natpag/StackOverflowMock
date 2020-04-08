import React from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'

const QuestionList = props => {
  let { results } = props
  return (
    <ul className="searchResult">
      {results.map(question => {
        return (
          <section className="boxed questionBox">
            <section className="summary">
              <Link to={`/question/${question.id}`}>Q:{question.body}</Link>
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
    </ul>
  )
}

export default QuestionList
