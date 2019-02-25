import React, { Component } from 'react';
import CourseListItem from './CourseListItem';
import {Grid} from 'semantic-ui-react';


 class CourseList extends Component {
  render() {
    // const {events, onEventOpen, deleteEvent} = this.props;
    const {events, deleteEvent} = this.props;
   
    return (
      <div>
          <Grid>
          {events.map((event) =>(
            
            <CourseListItem key={event.id} event={event}
            //  onEventOpen={onEventOpen}
            deleteEvent ={deleteEvent} />
        ))}
         
        {/* <h1>Course List </h1> */}
      
        {/* <CourseListItem/> */}
        </Grid>
      </div>
    )
  }
}
export default CourseList

// <Grid>
//         {courses.map((course) =>(
//          //console.log(course.id)
      
//               <CoursePageListItem 
             
//               key={course.id}
//               course={course} 
//               onCourseOpen={onCourseOpen}
//                deleteCourse={deleteCourse}/>
//         ))}
       
       
//       </Grid>