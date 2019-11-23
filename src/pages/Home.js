/* eslint jsx-a11y/anchor-is-valid: 0 */

import React from 'react'
import Navbar from '../components/Navbar'
import NavbarClone from '../components/NavbarClone'

class Home extends React.Component {

  render() {
    return (
      <div>
        <Navbar />
        <NavbarClone />
        <section className="hero is-default is-bold">
          <div className="hero-body">
            <div className="container">
              <div className="columns is-vcentered">
                <div className="column is-5 is-offset-1 landing-caption">
                  <h1 className="title is-1 is-bold is-spaced">
                      Learn, Collaborate.
                  </h1>
                  <h2 className="subtitle is-5 is-muted">Lorem ipsum sit dolor amet is a dummy text used by typography industry </h2>
                  <p>
                    <a className="button cta rounded primary-btn raised">
                        Get Started
                    </a>
                  </p>
                </div>
                <div className="column is-5 is-offset-1">
                  <figure className="image is-4by3">
                      <img src={process.env.PUBLIC_URL + '/worker.svg'} alt="Description" />
                  </figure>
                </div>
              </div>
            </div>
          </div>


        </section>

        <section className="section section-feature-grey is-medium">
          <div className="container">
            <div className="title-wrapper has-text-centered">
              <h2 className="title is-2">Great Power Comes </h2>
              <h3 className="subtitle is-5 is-muted">With great Responsability</h3>
              <div className="divider is-centered"></div>
            </div>

            <div className="content-wrapper">
              <div className="columns">
                <div className="column is-one-third">
                  <div className="feature-card is-bordered has-text-centered revealOnScroll delay-1" data-animation="fadeInLeft">
                    <div className="card-title">
                       <h4>App builder</h4>
                    </div>
                    <div className="card-icon">
                       <img src="https://images.unsplash.com/photo-1574333751899-72c1e3d963fd?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2100&q=80" alt=""/>
                    </div>
                    <div className="card-text">
                       <p>This is some explanatory text that is on two rows</p>
                    </div>
                    <div className="card-action">
                       <a href="#" className="button btn-align-md accent-btn raised">Free Trial</a>
                    </div>
                  </div>
                </div>
                <div className="column">
                  <div className="feature-card is-bordered has-text-centered revealOnScroll delay-2" data-animation="fadeInLeft">
                    <div className="card-title">
                      <h4>Cloud integration</h4>
                    </div>
                    <div className="card-icon">
                      <img src="https://images.unsplash.com/photo-1574333751899-72c1e3d963fd?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2100&q=80" alt=""/>
                    </div>
                    <div className="card-text">
                      <p>This is some explanatory text that is on two rows</p>
                    </div>
                    <div className="card-action">
                      <a href="#" className="button btn-align-md secondary-btn raised">Get Started</a>
                    </div>
                  </div>
                </div>
                <div className="column">
                  <div className="feature-card is-bordered has-text-centered revealOnScroll delay-3" data-animation="fadeInLeft">
                    <div className="card-title">
                      <h4>Addons & Plugins</h4>
                    </div>
                    <div className="card-icon">
                      <img src="https://images.unsplash.com/photo-1574333751899-72c1e3d963fd?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2100&q=80" alt=""/>
                    </div>
                    <div className="card-text">
                      <p>This is some explanatory text that is on two rows</p>
                    </div>
                    <div className="card-action">
                      <a href="#" className="button btn-align-md primary-btn raised">Get Started</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    )
  }
}

export default Home