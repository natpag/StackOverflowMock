import React, { useState } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
/*import EmptyQuestionList from './components/EmptyQuestionList'
import QuestionList from './components/QuestionList'*/
import './style.scss'

const Search = () => {
  const [searchTerm, setSearchTerm] = useState('')
  const [results, setResults] = useState([])

  const searchForQuestions = async () => {
    const resp = await axios.get(
      `/api/search/question?searchTerm=${searchTerm}`
    )
    console.log(resp.data)
    setResults(resp.data)
  }

  return (
    <>
      <section className="searchContainer">
        <input
          type="search"
          value={searchTerm}
          onChange={e => setSearchTerm(e.target.value)}
        />
        <button onClick={searchForQuestions}>Search</button>
      </section>
      {/* <main>
        {results.length > 0 ? (
          <QuestionList results={results} />
        ) : (
          <EmptyQuestionList />
        )}
      </main> */}
    </>
  )
}

export default Search
