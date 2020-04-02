import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <>
      <div>
        <h2>All Questions</h2>
        <button>Ask Question</button>
        <Link to="/answer">answer</Link>
      </div>
      <section className="homePage">
        <section className="leftSidebar">
          <p>Home</p>
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
          <h2>All Questions</h2>
          <button>Ask Question</button>
        </section>

        <section className="rightSection">
          <section className="overflowBlog">
            <p>The Overflow Blog</p>
            <p>Featured on Meta</p>
          </section>
          <section>
            <p>Custom Filters</p>
          </section>
          <section>Watched Tags on Public Q&A</section>
          <section>Ignored Tags</section>
          <section>Hot Networking Questions</section>
        </section>
      </section>
    </>
  )
}

export default Home
