import {Component} from 'react'
import './index.css'

class ShowHide extends Component {
  state = {showFirstName: false, showLastName: false}

  toggleFirstName = () => {
    this.setState(prevState => ({showFirstName: !prevState.showFirstName}))
  }

  toggleLastName = () => {
    this.setState(prevState => ({showLastName: !prevState.showLastName}))
  }

  render() {
    const {showFirstName, showLastName} = this.state

    return (
      <div className="container">
        <h1 className="title">Show/Hide</h1>
        <div className="buttons-container">
          <div className="section">
            <button
              className="button"
              type="button"
              onClick={this.toggleFirstName}
            >
              Show/Hide Firstname
            </button>
            {showFirstName && <p className="box">Tiger</p>}
          </div>
          <div className="section">
            <button
              className="button"
              type="button"
              onClick={this.toggleLastName}
            >
              Show/Hide Lastname
            </button>
            {showLastName && <p className="box">Manju</p>}
          </div>
        </div>
        <p className="footer">Code by Manjunath_DK</p>
      </div>
    )
  }
}

export default ShowHide
