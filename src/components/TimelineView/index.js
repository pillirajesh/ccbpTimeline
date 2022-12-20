// Write your code here
import {Chrono} from 'react-chrono'
import CourseTimelineCard from '../CourseTimelineCard'
import ProjectTimelineCard from '../ProjectTimelineCard'
import './index.css'

const TimelineView = props => {
  const {timelineItemsList} = props
  return (
    <div className="app-container">
      <div>
        <h1 className="main-heading">MY JOURNEY OF CCBP 4.0</h1>
      </div>
      <div>
        <Chrono mode="VERTICAL_ALTERNATING" items={timelineItemsList}>
          {timelineItemsList.map(eachItem => {
            if (eachItem.categoryId === 'COURSE') {
              return <CourseTimelineCard item={eachItem} />
            }
            return <ProjectTimelineCard item={eachItem} />
          })}
        </Chrono>
      </div>
    </div>
  )
}

export default TimelineView
