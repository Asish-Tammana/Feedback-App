import {Component} from 'react'
import './index.css'

class Feedback extends Component {
  state = {
    isClicked: false,
  }

  emojiClicked = () => {
    this.setState({
      isClicked: true,
    })
  }

  render() {
    const {resources} = this.props
    const {emojis, loveEmojiUrl} = resources
    const {isClicked} = this.state
    return (
      <div className="bg-container">
        <div className="content-container">
          {!isClicked ? (
            <>
              <h1>
                How satisfied are you with our customer support performance?
              </h1>
              <ul className="emoji-container">
                {emojis.map(eachItem => (
                  <li
                    type="none"
                    key={eachItem.id}
                    onClick={this.emojiClicked}
                    className="each-emoji-container"
                  >
                    <img
                      src={eachItem.imageUrl}
                      alt={eachItem.name}
                      className="each-emoji"
                    />
                    <p>{eachItem.name}</p>
                  </li>
                ))}
              </ul>
            </>
          ) : (
            <div>
              <img src={loveEmojiUrl} alt="love emoji" className="love-emoji" />
              <h1>Thank You!</h1>
              <p>
                We will use your feedback to improve our customer support
                performance
              </p>
            </div>
          )}
        </div>
      </div>
    )
  }
}

export default Feedback
