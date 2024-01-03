// Write your JS code here
import {Component} from 'react'
import './index.css'

class RegistrationForm extends Component {
  state = {
    firstName: '',
    lastName: '',
    showForm: true,
    showFnError: false,
    showLnError: false,
  }

  submitForm = event => {
    event.preventDefault()
    const {firstName, lastName} = this.state

    if (firstName === '' && lastName === '') {
      this.setState({showFnError: true, showLnError: true})
    } else if (firstName === '') {
      this.setState({showFnError: true})
    } else if (lastName === '') {
      this.setState({showLnError: true})
    } else {
      this.setState({showForm: false})
    }
  }

  reset = () => {
    this.setState({firstName: '', lastName: '', showForm: true})
  }

  onChangeFirstname = event => {
    this.setState({firstName: event.target.value})
  }

  onChangeLastname = event => {
    this.setState({lastName: event.target.value})
  }

  onBlurFirstname = () => {
    const {firstName} = this.state
    if (firstName === '') {
      this.setState({showFnError: true})
    } else {
      this.setState({showFnError: false})
    }
  }

  onBlurLastname = () => {
    const {lastName} = this.state
    if (lastName === '') {
      this.setState({showLnError: true})
    } else {
      this.setState({showLnError: false})
    }
  }

  renderFirstnameField = () => {
    const {firstName} = this.state
    return (
      <>
        <label className="input-label" htmlFor="fn">
          FIRST NAME
        </label>
        <input
          type="text"
          id="fn"
          className="input-filed"
          value={firstName}
          onChange={this.onChangeFirstname}
          onBlur={this.onBlurFirstname}
          placeholder="First name"
        />
      </>
    )
  }

  renderLastnameField = () => {
    const {lastName} = this.state
    return (
      <>
        <label className="input-label" htmlFor="ln">
          LAST NAME
        </label>
        <input
          type="text"
          id="ln"
          className="input-filed"
          value={lastName}
          onChange={this.onChangeLastname}
          onBlur={this.onBlurLastname}
          placeholder="Last name"
        />
      </>
    )
  }

  render() {
    const {showForm, showFnError, showLnError} = this.state

    return (
      <div className="bg-cont">
        <h1 className="head">Registration</h1>
        <div className="card">
          {showForm && (
            <form className="form-container" onSubmit={this.submitForm}>
              <div className="input-container">
                {this.renderFirstnameField()}
              </div>
              {showFnError && <p className="error-message">Required</p>}
              <div className="input-container">
                {this.renderLastnameField()}
              </div>
              {showLnError && <p className="error-message">Required</p>}
              <button type="submit" className="butt">
                Submit
              </button>
            </form>
          )}
          {!showForm && (
            <div className="success-cont">
              <img
                src="https://assets.ccbp.in/frontend/react-js/success-icon-img.png"
                alt="success"
              />
              <p>Submitted Successfully</p>
              <button type="button" className="butt" onClick={this.reset}>
                Submit Another Response
              </button>
            </div>
          )}
        </div>
      </div>
    )
  }
}

export default RegistrationForm
