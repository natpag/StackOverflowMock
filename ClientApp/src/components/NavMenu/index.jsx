import React, { Component } from 'react'
import StackoverflowImage from './images/StackoverflowImage.jpg'

import { Link } from 'react-router-dom'
import './style.scss'

export class NavMenu extends Component {
  static displayName = NavMenu.name

  constructor(props) {
    super(props)

    this.toggleNavbar = this.toggleNavbar.bind(this)
    this.state = {
      collapsed: true,
    }
  }

  toggleNavbar() {
    this.setState({
      collapsed: !this.state.collapsed,
    })
  }

  render() {
    return (
      <header className="homeHeader">
        <p>
          <img className="logo" src={StackoverflowImage} alt="Stackoverflow" />
          <Link to="/" class="homeLink">
            stack<b>overflow</b>
          </Link>
        </p>
        <p>Products</p>
        <input type="text" className="searchBar"></input>
        <p>User Profile</p>
      </header>
    )
  }
}
