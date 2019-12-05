import React from 'react'
import { connect } from 'react-redux'
import withAuthorization from 'components/hoc/withAuthorization'
import { withRouter } from 'react-router-dom'
import { Timestamp } from 'db'
import moment from 'moment'
import { 
  subToCollaboration, 
  joinCollaboration,
  leaveCollaboration,
  subToProfile,
  sendChatMessage,
  subToMessages,
  startCollaboration } from 'actions'
import JoinedPeople from 'components/collaboration/JoinedPeople'
import ChatMessages from 'components/collaboration/ChatMessages'
import Timer from 'components/collaboration/Timer'

class CollaborationDetail extends React.Component {

  state = {
    inputValue: ''
  }

  componentDidMount() {
    const { id } = this.props.match.params
    const { user } = this.props.auth

    joinCollaboration(id, user.uid)
    this.watchCollabChanges(id)
    this.watchMessagesChanges(id)
  }

  watchCollabChanges = id => {
    this.unsubscribeFromCollab = this.props.subToCollaboration(id, 
      ({joinedPeople}) => {
        this.watchJoinedPeopleChanges(joinedPeople.map(jp => jp.id))
      })
  }

  watchJoinedPeopleChanges = ids => {
    this.peopleWatchers = {}
    ids.forEach(id => {
      this.peopleWatchers[id] = this.props.subToProfile(id)
    })
  }

  watchMessagesChanges = collabId => {
    this.unsubscribeFromMessages = this.props.subToMessages(collabId)
  }

  onKeyboardPress = (e) => {
    if (e.key === 'Enter') { this.onSendMessage(this.state.inputValue) }
  }

  onSendMessage = inputValue => {
    if (inputValue.trim() === '') { return }

    const timestamp = moment().valueOf().toString()
    const { user } = this.props.auth
    const { collaboration } = this.props

    const message = {
      user: {
        uid: user.uid,
        avatar: user.avatar,
        name: user.fullName
      },
      timestamp: parseInt(timestamp, 10),
      content: inputValue.trim()
    }

    sendChatMessage({message, collabId: collaboration.id, timestamp})
      .then(_ => this.setState({inputValue: ''}))
  }

  onStartCollaboration = collaboration => {
    const { id, time } = collaboration
    const nowSeconds = Timestamp.now().seconds

    const expiresAt = new Timestamp(nowSeconds + time, 0)
    startCollaboration(id, expiresAt)
  }

  componentWillUnmount() {
    const { id } = this.props.match.params
    const { user } = this.props.auth

    this.unsubscribeFromCollab()
    this.unsubscribeFromMessages()

    Object.keys(this.peopleWatchers)
      .forEach(uid => this.peopleWatchers[uid]())

    leaveCollaboration(id, user.uid)
  }

  render() {
    const { collaboration, joinedPeople, messages } = this.props
    const { inputValue } = this.state
    const { user } = this.props.auth

    return (
       <div className="content-wrapper">
        <div className="root">
          <div className="body">
            <div className="viewListUser">
              <JoinedPeople users={joinedPeople} />
            </div>
            <div className="viewBoard">
              <div className="viewChatBoard">
                <div className="headerChatBoard">
                  <div className="headerChatUser">
                    <img className="viewAvatarItem" src="https://i.imgur.com/cVDadwb.png" alt="icon avatar" />
                    <span className="textHeaderChatBoard">{user.fullName}</span>
                  </div>
                  { false &&
                    <div className="headerChatButton">
                      <button 
                        onClick={() => this.onStartCollaboration(collaboration)}
                        className="button is-success">Start Collaboration</button>
                    </div>
                  }
                  { true &&
                    <Timer />
                  }
                </div>
                <div className="viewListContentChat">
                  <ChatMessages 
                    authUser={user}
                    messages={messages} />
                  <div style={{float: "left", clear: "both"}}></div>
                </div>
                <div className="viewBottom">
                  <input 
                    onChange={(e) => this.setState({inputValue: e.target.value})}
                    onKeyPress={this.onKeyboardPress}
                    value={inputValue}
                    className="viewInput" 
                    placeholder="Type your message..." />
                  <button 
                    onClick={() => this.onSendMessage(inputValue)}
                    className="button is-primary is-large">Send
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

const mapDispatchToProps = () => ({
  subToCollaboration,
  subToProfile,
  subToMessages
})

const mapStateToProps = ({collaboration}) => {
  return {
    collaboration: collaboration.joined,
    joinedPeople: collaboration.joinedPeople,
    messages: collaboration.messages
  }
}

const Collaboration = withAuthorization(withRouter(CollaborationDetail))
export default connect(mapStateToProps, mapDispatchToProps())(Collaboration)














