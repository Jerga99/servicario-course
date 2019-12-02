

import React from 'react'
import withAuthorization from 'components/hoc/withAuthorization'
import ServiceItem from 'components/service/ServiceItem'
import { connect } from 'react-redux'

import { fetchReceivedOffers } from 'actions'

class ReceivedOffers extends React.Component {

  componentDidMount() {
    const { auth } = this.props
    this.props.dispatch(fetchReceivedOffers(auth.user.uid))
  }

  acceptOffer = offer => {
    console.log(`Accepting ${(offer)}`)
  }

  declineOffer = offer => {
    console.log(`Declining ${(offer)}`)
  }

  statusClass = status => {
    if (status === 'pending') return 'is-warning'
    if (status === 'accepted') return 'is-success'
    if (status === 'declined') return 'is-danger'
  }

  render() {
    const { offers } = this.props
    return (
      <div className="container">
        <div className="content-wrapper">
          <h1 className="title">Received Offers</h1>
          <div className="columns">
            { offers.map(offer => (
              <div 
                key={offer.id}
                className="column is-one-third">
                <ServiceItem
                  noButton
                  className="offer-card"
                  service={offer.service}>
                  <div className={`tag is-large ${this.statusClass(offer.status)}`}>
                    {offer.status}
                  </div>
                  <hr />
                  <div className="service-offer">
                    <div>
                      <span className="label">From User:</span> {offer.fromUser.fullName}
                    </div>
                    <div>
                      <span className="label">Note:</span> {offer.note}
                    </div>
                    <div>
                      <span className="label">Price:</span> ${offer.price}
                    </div>
                    <div>
                      <span className="label">Time:</span> {offer.time} hours
                    </div>
                  </div>
                  { offer.status === 'pending' &&
                    <div>
                      <hr />
                      <button 
                        onClick={() => this.acceptOffer(offer)} 
                        className="button is-success s-m-r">Accept</button>
                      <button 
                        onClick={() => this.declineOffer(offer)} 
                        className="button is-danger">Decline</button>
                    </div>
                  }
                </ServiceItem>
              </div>
              ))
            }
          </div>
        </div>
      </div>
    )
  }
}

const mapStateToProps = ({offers}) => ({ offers: offers.received })

export default 
  withAuthorization(
    connect(mapStateToProps)(ReceivedOffers))











