import React, { useState } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import EmptyQuestionList from '../components/EmptyQuestionList'
import QuestionList from '../components/QuestionList'
import Search from '../components/Search'

const ResultsPage = () => {
  ;<main>
    {results.length > 0 ? (
      <QuestionList results={results} />
    ) : (
      <EmptyQuestionList />
    )}
  </main>
}

export default ResultsPage
