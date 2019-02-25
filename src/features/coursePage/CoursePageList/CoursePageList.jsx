import React, { Component } from 'react'
import CoursePageListItem from './CoursePageListItem';
import {Grid} from 'semantic-ui-react';

 class CoursePageList extends Component {
  render() {
    const {courses,onCourseOpen, deleteCourse} = this.props;
   // console.log(courses.title);
    return (
      <div>
         <h1>CoursePageList</h1>
      <Grid>
        {courses.map((course) =>(
         //console.log(course.id)
      
              <CoursePageListItem 
             
              key={course.id}
              course={course} 
              onCourseOpen={onCourseOpen}
               deleteCourse={deleteCourse}/>
        ))}
       
       
      </Grid>
      </div>
    )
  }
}
export default CoursePageList

