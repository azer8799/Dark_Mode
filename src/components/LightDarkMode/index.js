// Write your code here

import {Component} from 'react'
import './index.css'

class LightDarkMode extends Component {
  state = {
    isDark: true,
  }

  onButtonClicked = () => {
    this.setState(prevState => ({isDark: !prevState.isDark}))
  }

  getChangedText = () => {
    const {isDark} = this.state
    if (isDark === true) {
      return 'Light Mode'
    }
    return 'Dark Mode'
  }

  getChangeBackground = () => {
    const {isDark} = this.state
    if (isDark === true) {
      return 'dark-mode'
    }
    return 'light-mode'
  }

  render() {
    const buttonText = this.getChangedText()

    const changeBackground = this.getChangeBackground()

    return (
      <div className="bg-container">
        <div className={`card-container ${changeBackground}`}>
          <h1 className="heading">Click To Change Mode</h1>
          <button
            className="button"
            type="button"
            onClick={this.onButtonClicked}
          >
            {' '}
            {buttonText}
          </button>
        </div>
      </div>
    )
  }
}

export default LightDarkMode
