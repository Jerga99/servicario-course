/* eslint jsx-a11y/anchor-is-valid: 0 */

import React from 'react'
import { connect } from 'react-redux' // HOC
import Hero from 'components/Hero'
import ServiceItem from 'components/service/ServiceItem'

import { getServices } from 'store'

class Home extends React.Component {

  state = {
    services: []
  }

  componentDidMount() {
    const services = getServices()
    this.setState({services})
  }

  renderServices = (services) =>
    services.map(service => <ServiceItem key={service.id} service={service} />)
  

  render() {
    const { services } = this.state
    const { testingData, testingNumber } = this.props.test
    return (
      <div>
        <Hero />
        <section className="section section-feature-grey is-medium">
          <div className="container">
            <div className="title-wrapper has-text-centered">
              <h2 className="title is-2">Great Power Comes </h2>
              <h3 className="subtitle is-5 is-muted">With great Responsability</h3>
              <div className="divider is-centered"></div>
            </div>

            <div className="content-wrapper">
              <div className="columns">
                { this.renderServices(services) }
              </div>
            </div>
          </div>
        </section>
      </div>
    )
  }
}

const mapStateToProps = state => ({test: state.service})
    
export default connect(mapStateToProps)(Home)







