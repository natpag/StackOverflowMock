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
      <header class="homeHeader">
        <p>
          <img class="logo" src={StackoverflowImage} alt="Stackoverflow" />
          stack<b>overflow</b>
        </p>
        <p>Products</p>
        <input type="text" class="searchBar"></input>
        <p>User Profile</p>
      </header>
    )
  }
}
