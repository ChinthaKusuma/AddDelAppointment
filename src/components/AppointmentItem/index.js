// Write your code here
import './index.css'
import {format} from 'date-fns'

const AppointmentItem = props => {
  const {item, onChange2} = props
  const {id, name, date1, isFav} = item

  const onChange1 = () => {
    onChange2(id)
  }
  const date2 = format(new Date(date1), 'dd MMMM yyyy, EEEE')
  return (
    <li className="container11">
      <div className="container12">
        {name !== '' ? <h1 className="heading">{name}</h1> : ' '}
        <button
          className="btn4"
          type="button"
          onClick={onChange1}
          data-testid="star"
        >
          {isFav !== true ? (
            <div>
              <img
                src="https://assets.ccbp.in/frontend/react-js/appointments-app/star-img.png"
                alt="star"
                className="img2"
              />
            </div>
          ) : (
            <div>
              <img
                src="https://assets.ccbp.in/frontend/react-js/appointments-app/filled-star-img.png"
                alt="star"
                className="img2"
              />
            </div>
          )}
        </button>
      </div>

      {date1 !== '' ? <p className="heading">Date:{date2}</p> : ' '}
    </li>
  )
}
export default AppointmentItem
