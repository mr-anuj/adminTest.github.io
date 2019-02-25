import React , { Component }from 'react';
import { Grid, Button } from 'semantic-ui-react';
import CoursePageList from '../CoursePageList/CoursePageList';
import CoursePageForm from '../CoursePageForm/CoursePageForm';
import cuid from 'cuid';

import {connect} from 'react-redux';
import {createCoursePage, deleteCoursePage, updateCoursePage} from '../coursePageActions';

// const coursesDashboard = [
//   {
//     id: '1',
//     title: 'Linux System Administrator',
//     date: '2018-03-27',
//     category: 'Server',
//     career:'Linux System Administrator, Network, System Administrator and System Analyst',
//     description:
//       'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus sollicitudin ligula eu leo tincidunt, quis scelerisque magna dapibus. Sed eget ipsum vel arcu vehicula ullamcorper.',
//     city: 'London, UK',
//     venue: "BlackHawk, Chabahil, Kathmandu",
//     hostedBy: 'Bob',
//     hostPhotoURL: 'https://randomuser.me/api/portraits/men/20.jpg',
  
//     attendees: [
//       {
//         id: 'a',
//         name: 'Bob',
//         photoURL: 'https://randomuser.me/api/portraits/men/20.jpg'
//       },
//       {
//         id: 'b',
//         name: 'Tom',
//         photoURL: 'https://randomuser.me/api/portraits/men/22.jpg'
//       }
//     ]
//   },
//   {
//     id: '2',
//     title: 'React js',
//     date: '2018-03-28',
//     category: 'Programming',
//     career:'UX Desinger , Web Design',
//     description:
//       'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus sollicitudin ligula eu leo tincidunt, quis scelerisque magna dapibus. Sed eget ipsum vel arcu vehicula ullamcorper.',
//     city: 'London, UK',
//     venue: "BlackHawk, Chabahil, Kathmandu",
//     hostedBy: 'Tom',
//     hostPhotoURL: 'https://randomuser.me/api/portraits/men/22.jpg',
//     attendees: [
//       {
//         id: 'b',
//         name: 'Tom',
//         photoURL: 'https://randomuser.me/api/portraits/men/22.jpg'
//       },
//       {
//         id: 'a',
//         name: 'Bob',
//         photoURL: 'https://randomuser.me/api/portraits/men/20.jpg'
//       }
//     ]
//   }
// ]

const mapState = (state)=> ({
  courses:state.courses
});

const actions = {
  createCoursePage,
  deleteCoursePage,
  updateCoursePage
}

class CoursePageDashboard extends Component { 
   
        state={
           // courses:coursesDashboard,
            selectedCourse:null,
            isOpen:false
        }

        handleFormOpen =() =>{
              this.setState({
               selectedCourse:null,
                isOpen:true
              })
           }

           handleCancle =() =>{
                this.setState({
               // selectedCourse:null,
                  isOpen:false
                })
             }

    

        handleCreateCourse = (newCourse) => {
        
          newCourse.id = cuid();
         console.log("cuid"+cuid());
          
          newCourse.hostPhotoURL='assets/user.jpg';
          this.props.createCoursePage(newCourse);
          //  const updatedCourse = [...this.state.courses,newCourse];
            // this.props.createCourse(newCourse);
             this.setState({
            //  courses:updatedCourse,
               isOpen:false,
              
              
             })
           }

        handleOpenCourse= (courseToOpen) => () => {
             this.setState({
              selectedCourse:courseToOpen,
               isOpen: true
             })
           }

handleUpdateCourse= (updateCourse)=> {
  this.props.updateCoursePage(updateCourse);
  this.setState({
    // courses: this.state.courses.map(course => {
    //   if(course.id === updateCourse.id){
    //     return Object.assign({}, updateCourse);
    //   } else {
    //     return course
    //   }
    // }),
    
    isOpen:false,
    selectedCourse:null
  })
}        


        handleDeleteCourse = (courseId) => () => {
          // const updateCourses = this.state.courses.filter(e => e.id !== courseId);
          // this.setState({
          //   courses:updateCourses
          // })
          this.props.deleteCoursePage(courseId);
        }
   
    render() {
      const {selectedCourse} = this.state;
      const {courses} = this.props;
  return (
         <Grid >             
            <Grid.Row>
                <Grid.Column width={16}>
                    <CoursePageList deleteCourse={this.handleDeleteCourse} courses={courses} onCourseOpen={this.handleOpenCourse}/>
                </Grid.Column>
                <Grid.Column width={4}>
                    <Button onClick={this.handleFormOpen} positive content="Create Course"/>
                    {this.state.isOpen &&(
                    <CoursePageForm
                   updateCourse={this.handleUpdateCourse}
                     handleCancle={this.handleCancle} 
                     createCourse={this.handleCreateCourse} 
                     selectedCourse={selectedCourse} />)}
                </Grid.Column>
            </Grid.Row>
        </Grid>
    
         )
    }
}

export default  connect(mapState, actions)(CoursePageDashboard);



// selectedCourse={selectedCourse}