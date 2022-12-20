// Write your code here
import {AiFillClockCircle} from 'react-icons/ai'
import './index.css'

const CourseTimelineCard = props => {
  const {item} = props
  const {courseTitle, description, duration, tagsList} = item

  return (
    <div>
      <div className="container">
        <h1 className="course-heading">{courseTitle}</h1>
        <div className="days-container">
          <AiFillClockCircle />
          <p className="course-paragraph">{duration}</p>
        </div>
      </div>
      <p className="description">{description}</p>
      <ul className="unordered-list">
        {tagsList.map(eachTag => (
          <li key={eachTag.id} className="list-container">
            <p>{eachTag.name}</p>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default CourseTimelineCard
