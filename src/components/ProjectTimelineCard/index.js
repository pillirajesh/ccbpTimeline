// Write your code here
import {AiFillCalendar} from 'react-icons/ai'
import './index.css'

const ProjectTimelineCard = props => {
  const {item} = props
  const {
    imageUrl,
    projectUrl,
    categoryId,
    projectTitle,
    duration,
    description,
  } = item

  return (
    <div>
      <img src={imageUrl} alt={categoryId} className="image" />
      <div className="container">
        <h1 className="course-heading">{projectTitle}</h1>
        <div className="days-container">
          <AiFillCalendar />
          <p className="course-paragraph">{duration}</p>
        </div>
      </div>
      <p className="description">{description}</p>
      <a href={projectUrl} className="link">
        Visit
      </a>
    </div>
  )
}
export default ProjectTimelineCard
