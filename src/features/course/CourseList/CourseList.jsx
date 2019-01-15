import React, { Component } from 'react';
import CourseListItem from './CourseListItem';


 class CourseList extends Component {
  render() {
    const {events, onEventOpen, deleteEvent} = this.props;
   
    return (
      <div>
        <h1>Course List </h1>
        {events.map((event) =>(
            
            <CourseListItem key={event.id} event={event}
             onEventOpen={onEventOpen}
            deleteEvent ={deleteEvent} />
        ))}
        {/* <CourseListItem/> */}
      </div>
    )
  }
}
export default CourseList