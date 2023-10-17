// Write your code here
import {Component} from 'react'
import {v4} from 'uuid'
import AppointmentItem from '../AppointmentItem'

import './index.css'

class Appointments extends Component {
  state = {list1: [], name: '', date1: '', stared: false}

  addAppointment = event => {
    event.preventDefault()
    const {name, date1} = this.state
    const add1 = {
      id: v4(),
      name,
      date1,
      isFav: false,
    }

    this.setState(prevState => ({
      list1: [...prevState.list1, add1],
      name: '',
      date1: '',
    }))
  }

  onName = event => {
    this.setState({
      name: event.target.value,
    })
  }

  onDate1 = event => {
    this.setState({
      date1: event.target.value,
    })
  }

  onChange2 = id => {
    this.setState(prevState => ({
      list1: prevState.list1.map(each => {
        if (id === each.id) {
          return {...each, isFav: !each.isFav}
        }
        return each
      }),
    }))
  }

  onDelete = () => {
    this.setState(prevState => ({
      list1: prevState.list1.filter(each => each.isFav === true),
      stared: true,
    }))
  }

  render() {
    const {name, date1, list1, stared} = this.state
    const className1 = stared !== true ? 'btn5' : 'btn6'
    return (
      <div className="bgContainer">
        <div className="bgContainer1">
          <div className="container2">
            <form className="container1" onSubmit={this.addAppointment}>
              <h1 className="heading">Add Appointment</h1>
              <br />
              <label htmlFor="one" className="label1">
                TITLE
              </label>
              <br />

              <input
                id="one"
                placeholder="Title"
                type="text"
                className="input1"
                onChange={this.onName}
                value={name}
              />
              <br />

              <label htmlFor="two" className="label1">
                DATE
                <br />
              </label>
              <input
                id="two"
                placeholder="dd/mm/yyyy"
                type="date"
                className="input1"
                onChange={this.onDate1}
                value={date1}
              />
              <br />
              <button className="btn1" type="submit">
                Add
              </button>
            </form>

            <img
              src="https://assets.ccbp.in/frontend/react-js/appointments-app/appointments-img.png"
              alt="appointments"
            />
            <br />
          </div>
          <br />
          <hr />

          <div>
            <div className="container3">
              <h1 className="heading">Appointments</h1>
              <button
                className={className1}
                type="button"
                onClick={this.onDelete}
              >
                Starred
              </button>
            </div>
            <ul className="ul1">
              {list1.map(each => (
                <AppointmentItem
                  item={each}
                  onChange2={this.onChange2}
                  key={each.id}
                />
              ))}
            </ul>
          </div>
        </div>
      </div>
    )
  }
}
export default Appointments
