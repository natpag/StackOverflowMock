import React, { Component } from 'react'
import {
  Collapse,
  Container,
  Navbar,
  NavbarBrand,
  NavbarToggler,
  NavItem,
  NavLink,
  Dropdown,
} from 'reactstrap'
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
        <Navbar
          className="navbar-expand-sm navbar-toggleable-sm ng-white border-bottom box-shadow mb-3"
          light
        >
          <Container>
            <NavbarBrand tag={Link} to="/">
              stack<b>overflow</b>
            </NavbarBrand>
            <NavbarToggler onClick={this.toggleNavbar} className="mr-2" />
            <Collapse
              className="d-sm-inline-flex flex-sm-row-reverse"
              isOpen={!this.state.collapsed}
              navbar
            >
              <section className="navContainer">
                <ul className="navbar-nav flex-grow">
                  <NavItem>
                    <p className="product">Products</p>
                  </NavItem>
                  <NavItem>
                    <section className="search-container">
                      <select id="search-channel-selector">All</select>
                      <input
                        type="search"
                        /*value={searchTerm}
                      onChange={e => setSearchTerm(e.target.value)}*/
                      />
                    </section>
                  </NavItem>
                  <NavItem>
                    <p>User Profile</p>
                  </NavItem>
                </ul>
              </section>
            </Collapse>
          </Container>
        </Navbar>
      </header>
    )
  }
}
