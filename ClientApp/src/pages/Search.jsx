import React, { useState } from 'react'
import axios from 'axios'
import EmptyQuestionList from '../components/EmptyQuestionList'
import QuestionList from '../components/QuestionList'

const Search = () => {
  const [searchTerm, setSearchTerm] = useState('')
  const [results, setResults] = useState([])

  const searchForQuestions = async () => {
    const resp = await axios.get(
      `/api/search/questions?searchTerm=${searchTerm}`
    )
    console.log(resp.data)
    setResults(resp.data)
  }

  return (
    <>
      <section className="homePage">
        <section className="search-container">
          <input
            type="search"
            value={searchTerm}
            onChange={e => setSearchTerm(e.target.value)}
          />
          <button onClick={searchForQuestions}>Search</button>
        </section>
        {
          <section className="results-container">
            {results.length > 0 ? (
              <QuestionList results={results} />
            ) : (
              <EmptyQuestionList />
            )}
          </section>
        }
      </section>
    </>
  )
}

export default Search
